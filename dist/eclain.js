"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const agentql_1 = require("agentql");
const playwright_1 = require("playwright");
// Configuration - WARNING: Hardcoded credentials are a security risk!
const CONFIG = {
    url: 'http://www.google.com', // Replace with actual URL
    email: 'test@greenstone.com.au', // Replace with actual email
    username: 'Claims Agent',
    password: 'pa55w0rd!',
    policyNumber: '123456',
    letterContent: 'Test claim letter content for automated testing'
};
// AgentQL queries
const LOGIN_PAGE_QUERY = `
{
  login_button
  email_input
  next_button
}
`;
const CREDENTIALS_PAGE_QUERY = `
{
  username_input
  password_input
  submit_button
}
`;
const SEARCH_PAGE_QUERY = `
{
  search_button
  policy_number_input
  policy_results[] {
    policy_link
  }
}
`;
const POLICY_PAGE_QUERY = `
{
  new_case_button
}
`;
const NEW_CASE_FORM_QUERY = `
{
  mandatory_fields[] {
    input
    label
  }
  create_case_button
}
`;
const MODIFY_CASE_QUERY = `
{
  modify_case_button
  document_list_dropdown
  claim_form_option
  submit_button
}
`;
const ADDITIONAL_INFO_QUERY = `
{
  dropdown_menu
  additional_claim_info_option
  create_letter_button
  view_letter_link
}
`;
const LETTER_FORM_QUERY = `
{
  letter_body_textarea
  submit_button
}
`;
const LETTER_VIEW_QUERY = `
{
  letter_content
  download_pdf_button
}
`;
// Field mappings
const FIELD_MAPPINGS = {
    'Claim Date': new Date().toISOString().split('T')[0],
    'Incident Date': new Date().toISOString().split('T')[0],
    'Date of Loss': new Date().toISOString().split('T')[0],
    'Claim Description': 'Automated test case - Property damage claim',
    'Description': 'Automated test case - Property damage claim',
    'Claim Amount': '1000.00',
    'Amount': '1000.00',
    'Estimated Amount': '1000.00',
    'Policy Holder Name': 'Test User',
    'Claimant Name': 'Test User',
    'Contact Number': '1234567890',
    'Phone': '1234567890',
    'Email': 'test@greenstone.com.au',
    'Location': 'Test Location',
    'Incident Location': 'Test Location'
};
async function automateEClaims() {
    // Configure AgentQL
    (0, agentql_1.configure)({ apiKey: process.env.AGENTQL_API_KEY || 'your-agentql-api-key-here' });
    // Launch browser
    const browser = await playwright_1.chromium.launch({
        headless: false,
        slowMo: 500
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    const agentqlPage = await (0, agentql_1.wrap)(page);
    try {
        // Navigate to login page
        await agentqlPage.goto(CONFIG.url);
        await agentqlPage.waitForLoadState('networkidle');
        // Click login and enter email
        const loginElements = await agentqlPage.queryElements(LOGIN_PAGE_QUERY);
        await loginElements.login_button.click();
        await agentqlPage.waitForTimeout(1000);
        await loginElements.email_input.fill(CONFIG.email);
        await loginElements.next_button.click();
        await agentqlPage.waitForLoadState('networkidle');
        // Enter credentials
        const credentialElements = await agentqlPage.queryElements(CREDENTIALS_PAGE_QUERY);
        await credentialElements.username_input.fill(CONFIG.username);
        await credentialElements.password_input.fill(CONFIG.password);
        await credentialElements.submit_button.click();
        await agentqlPage.waitForLoadState('networkidle');
        // Search for policy
        const searchElements = await agentqlPage.queryElements(SEARCH_PAGE_QUERY);
        await searchElements.search_button.click();
        await agentqlPage.waitForTimeout(1000);
        await searchElements.policy_number_input.fill(CONFIG.policyNumber);
        await searchElements.policy_number_input.press('Enter');
        await agentqlPage.waitForLoadState('networkidle');
        await agentqlPage.waitForTimeout(2000);
        // Open the policy
        const policyResults = await agentqlPage.queryElements(SEARCH_PAGE_QUERY);
        if (policyResults.policy_results && policyResults.policy_results.length > 0) {
            await policyResults.policy_results[0].policy_link.click();
            await agentqlPage.waitForLoadState('networkidle');
        }
        // Click New Case
        const policyPageElements = await agentqlPage.queryElements(POLICY_PAGE_QUERY);
        await policyPageElements.new_case_button.click();
        await agentqlPage.waitForLoadState('networkidle');
        // Fill mandatory fields
        const newCaseElements = await agentqlPage.queryElements(NEW_CASE_FORM_QUERY);
        for (const field of newCaseElements.mandatory_fields) {
            const labelText = await field.label.textContent();
            const trimmedLabel = labelText?.trim() || '';
            const mappingKey = Object.keys(FIELD_MAPPINGS).find(key => trimmedLabel.toLowerCase().includes(key.toLowerCase()));
            if (mappingKey) {
                await field.input.fill(FIELD_MAPPINGS[mappingKey]);
            }
        }
        await newCaseElements.create_case_button.click();
        await agentqlPage.waitForLoadState('networkidle');
        // Modify case and submit claim form
        const modifyCaseElements = await agentqlPage.queryElements(MODIFY_CASE_QUERY);
        await modifyCaseElements.modify_case_button.click();
        await agentqlPage.waitForTimeout(1000);
        await modifyCaseElements.document_list_dropdown.click();
        await modifyCaseElements.claim_form_option.click();
        await modifyCaseElements.submit_button.click();
        await agentqlPage.waitForLoadState('networkidle');
        // Create letter
        const additionalInfoElements = await agentqlPage.queryElements(ADDITIONAL_INFO_QUERY);
        await additionalInfoElements.dropdown_menu.click();
        await additionalInfoElements.additional_claim_info_option.click();
        await additionalInfoElements.create_letter_button.click();
        await agentqlPage.waitForLoadState('networkidle');
        await additionalInfoElements.view_letter_link.click();
        await agentqlPage.waitForLoadState('networkidle');
        // Handle re-authentication if needed
        const authPrompt = await agentqlPage.isVisible('input[type="password"]');
        if (authPrompt) {
            const reAuthElements = await agentqlPage.queryElements(CREDENTIALS_PAGE_QUERY);
            await reAuthElements.username_input.fill(CONFIG.username);
            await reAuthElements.password_input.fill(CONFIG.password);
            await reAuthElements.submit_button.click();
            await agentqlPage.waitForLoadState('networkidle');
        }
        // Enter letter content
        const letterFormElements = await agentqlPage.queryElements(LETTER_FORM_QUERY);
        await letterFormElements.letter_body_textarea.fill(CONFIG.letterContent);
        await letterFormElements.submit_button.click();
        await agentqlPage.waitForLoadState('networkidle');
        // Verify letter
        const letterViewElements = await agentqlPage.queryElements(LETTER_VIEW_QUERY);
        const letterContent = await letterViewElements.letter_content.textContent();
        console.log('Letter content:', letterContent);
        console.log('Automation completed successfully!');
    }
    catch (error) {
        console.error('Error:', error);
        await agentqlPage.screenshot({ path: 'error.png', fullPage: true });
        throw error;
    }
    finally {
        await browser.close();
    }
}
// Run the script
automateEClaims().catch(console.error);

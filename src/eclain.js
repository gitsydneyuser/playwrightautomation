"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var agentql_1 = require("agentql");
var playwright_1 = require("playwright");
// Configuration - WARNING: Hardcoded credentials are a security risk!
var CONFIG = {
    url: 'http://www.google.com', // Replace with actual URL
    email: 'test@greenstone.com.au', // Replace with actual email
    username: 'Claims Agent',
    password: 'pa55w0rd!',
    policyNumber: '123456',
    letterContent: 'Test claim letter content for automated testing'
};
// AgentQL queries
var LOGIN_PAGE_QUERY = "\n{\n  login_button\n  email_input\n  next_button\n}\n";
var CREDENTIALS_PAGE_QUERY = "\n{\n  username_input\n  password_input\n  submit_button\n}\n";
var SEARCH_PAGE_QUERY = "\n{\n  search_button\n  policy_number_input\n  policy_results[] {\n    policy_link\n  }\n}\n";
var POLICY_PAGE_QUERY = "\n{\n  new_case_button\n}\n";
var NEW_CASE_FORM_QUERY = "\n{\n  mandatory_fields[] {\n    input\n    label\n  }\n  create_case_button\n}\n";
var MODIFY_CASE_QUERY = "\n{\n  modify_case_button\n  document_list_dropdown\n  claim_form_option\n  submit_button\n}\n";
var ADDITIONAL_INFO_QUERY = "\n{\n  dropdown_menu\n  additional_claim_info_option\n  create_letter_button\n  view_letter_link\n}\n";
var LETTER_FORM_QUERY = "\n{\n  letter_body_textarea\n  submit_button\n}\n";
var LETTER_VIEW_QUERY = "\n{\n  letter_content\n  download_pdf_button\n}\n";
// Field mappings
var FIELD_MAPPINGS = {
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
function automateEClaims() {
    return __awaiter(this, void 0, void 0, function () {
        var browser, context, page, agentqlPage, loginElements, credentialElements, searchElements, policyResults, policyPageElements, newCaseElements, _loop_1, _i, _a, field, modifyCaseElements, additionalInfoElements, authPrompt, reAuthElements, letterFormElements, letterViewElements, letterContent, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    // Configure AgentQL
                    (0, agentql_1.configure)({ apiKey: process.env.AGENTQL_API_KEY || 'your-agentql-api-key-here' });
                    return [4 /*yield*/, playwright_1.chromium.launch({
                            headless: false,
                            slowMo: 500
                        })];
                case 1:
                    browser = _b.sent();
                    return [4 /*yield*/, browser.newContext()];
                case 2:
                    context = _b.sent();
                    return [4 /*yield*/, context.newPage()];
                case 3:
                    page = _b.sent();
                    return [4 /*yield*/, (0, agentql_1.wrap)(page)];
                case 4:
                    agentqlPage = _b.sent();
                    _b.label = 5;
                case 5:
                    _b.trys.push([5, 67, 69, 71]);
                    // Navigate to login page
                    return [4 /*yield*/, agentqlPage.goto(CONFIG.url)];
                case 6:
                    // Navigate to login page
                    _b.sent();
                    return [4 /*yield*/, agentqlPage.waitForLoadState('networkidle')];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, agentqlPage.queryElements(LOGIN_PAGE_QUERY)];
                case 8:
                    loginElements = _b.sent();
                    return [4 /*yield*/, loginElements.login_button.click()];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, agentqlPage.waitForTimeout(1000)];
                case 10:
                    _b.sent();
                    return [4 /*yield*/, loginElements.email_input.fill(CONFIG.email)];
                case 11:
                    _b.sent();
                    return [4 /*yield*/, loginElements.next_button.click()];
                case 12:
                    _b.sent();
                    return [4 /*yield*/, agentqlPage.waitForLoadState('networkidle')];
                case 13:
                    _b.sent();
                    return [4 /*yield*/, agentqlPage.queryElements(CREDENTIALS_PAGE_QUERY)];
                case 14:
                    credentialElements = _b.sent();
                    return [4 /*yield*/, credentialElements.username_input.fill(CONFIG.username)];
                case 15:
                    _b.sent();
                    return [4 /*yield*/, credentialElements.password_input.fill(CONFIG.password)];
                case 16:
                    _b.sent();
                    return [4 /*yield*/, credentialElements.submit_button.click()];
                case 17:
                    _b.sent();
                    return [4 /*yield*/, agentqlPage.waitForLoadState('networkidle')];
                case 18:
                    _b.sent();
                    return [4 /*yield*/, agentqlPage.queryElements(SEARCH_PAGE_QUERY)];
                case 19:
                    searchElements = _b.sent();
                    return [4 /*yield*/, searchElements.search_button.click()];
                case 20:
                    _b.sent();
                    return [4 /*yield*/, agentqlPage.waitForTimeout(1000)];
                case 21:
                    _b.sent();
                    return [4 /*yield*/, searchElements.policy_number_input.fill(CONFIG.policyNumber)];
                case 22:
                    _b.sent();
                    return [4 /*yield*/, searchElements.policy_number_input.press('Enter')];
                case 23:
                    _b.sent();
                    return [4 /*yield*/, agentqlPage.waitForLoadState('networkidle')];
                case 24:
                    _b.sent();
                    return [4 /*yield*/, agentqlPage.waitForTimeout(2000)];
                case 25:
                    _b.sent();
                    return [4 /*yield*/, agentqlPage.queryElements(SEARCH_PAGE_QUERY)];
                case 26:
                    policyResults = _b.sent();
                    if (!(policyResults.policy_results && policyResults.policy_results.length > 0)) return [3 /*break*/, 29];
                    return [4 /*yield*/, policyResults.policy_results[0].policy_link.click()];
                case 27:
                    _b.sent();
                    return [4 /*yield*/, agentqlPage.waitForLoadState('networkidle')];
                case 28:
                    _b.sent();
                    _b.label = 29;
                case 29: return [4 /*yield*/, agentqlPage.queryElements(POLICY_PAGE_QUERY)];
                case 30:
                    policyPageElements = _b.sent();
                    return [4 /*yield*/, policyPageElements.new_case_button.click()];
                case 31:
                    _b.sent();
                    return [4 /*yield*/, agentqlPage.waitForLoadState('networkidle')];
                case 32:
                    _b.sent();
                    return [4 /*yield*/, agentqlPage.queryElements(NEW_CASE_FORM_QUERY)];
                case 33:
                    newCaseElements = _b.sent();
                    _loop_1 = function (field) {
                        var labelText, trimmedLabel, mappingKey;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0: return [4 /*yield*/, field.label.textContent()];
                                case 1:
                                    labelText = _c.sent();
                                    trimmedLabel = (labelText === null || labelText === void 0 ? void 0 : labelText.trim()) || '';
                                    mappingKey = Object.keys(FIELD_MAPPINGS).find(function (key) {
                                        return trimmedLabel.toLowerCase().includes(key.toLowerCase());
                                    });
                                    if (!mappingKey) return [3 /*break*/, 3];
                                    return [4 /*yield*/, field.input.fill(FIELD_MAPPINGS[mappingKey])];
                                case 2:
                                    _c.sent();
                                    _c.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    };
                    _i = 0, _a = newCaseElements.mandatory_fields;
                    _b.label = 34;
                case 34:
                    if (!(_i < _a.length)) return [3 /*break*/, 37];
                    field = _a[_i];
                    return [5 /*yield**/, _loop_1(field)];
                case 35:
                    _b.sent();
                    _b.label = 36;
                case 36:
                    _i++;
                    return [3 /*break*/, 34];
                case 37: return [4 /*yield*/, newCaseElements.create_case_button.click()];
                case 38:
                    _b.sent();
                    return [4 /*yield*/, agentqlPage.waitForLoadState('networkidle')];
                case 39:
                    _b.sent();
                    return [4 /*yield*/, agentqlPage.queryElements(MODIFY_CASE_QUERY)];
                case 40:
                    modifyCaseElements = _b.sent();
                    return [4 /*yield*/, modifyCaseElements.modify_case_button.click()];
                case 41:
                    _b.sent();
                    return [4 /*yield*/, agentqlPage.waitForTimeout(1000)];
                case 42:
                    _b.sent();
                    return [4 /*yield*/, modifyCaseElements.document_list_dropdown.click()];
                case 43:
                    _b.sent();
                    return [4 /*yield*/, modifyCaseElements.claim_form_option.click()];
                case 44:
                    _b.sent();
                    return [4 /*yield*/, modifyCaseElements.submit_button.click()];
                case 45:
                    _b.sent();
                    return [4 /*yield*/, agentqlPage.waitForLoadState('networkidle')];
                case 46:
                    _b.sent();
                    return [4 /*yield*/, agentqlPage.queryElements(ADDITIONAL_INFO_QUERY)];
                case 47:
                    additionalInfoElements = _b.sent();
                    return [4 /*yield*/, additionalInfoElements.dropdown_menu.click()];
                case 48:
                    _b.sent();
                    return [4 /*yield*/, additionalInfoElements.additional_claim_info_option.click()];
                case 49:
                    _b.sent();
                    return [4 /*yield*/, additionalInfoElements.create_letter_button.click()];
                case 50:
                    _b.sent();
                    return [4 /*yield*/, agentqlPage.waitForLoadState('networkidle')];
                case 51:
                    _b.sent();
                    return [4 /*yield*/, additionalInfoElements.view_letter_link.click()];
                case 52:
                    _b.sent();
                    return [4 /*yield*/, agentqlPage.waitForLoadState('networkidle')];
                case 53:
                    _b.sent();
                    return [4 /*yield*/, agentqlPage.isVisible('input[type="password"]')];
                case 54:
                    authPrompt = _b.sent();
                    if (!authPrompt) return [3 /*break*/, 60];
                    return [4 /*yield*/, agentqlPage.queryElements(CREDENTIALS_PAGE_QUERY)];
                case 55:
                    reAuthElements = _b.sent();
                    return [4 /*yield*/, reAuthElements.username_input.fill(CONFIG.username)];
                case 56:
                    _b.sent();
                    return [4 /*yield*/, reAuthElements.password_input.fill(CONFIG.password)];
                case 57:
                    _b.sent();
                    return [4 /*yield*/, reAuthElements.submit_button.click()];
                case 58:
                    _b.sent();
                    return [4 /*yield*/, agentqlPage.waitForLoadState('networkidle')];
                case 59:
                    _b.sent();
                    _b.label = 60;
                case 60: return [4 /*yield*/, agentqlPage.queryElements(LETTER_FORM_QUERY)];
                case 61:
                    letterFormElements = _b.sent();
                    return [4 /*yield*/, letterFormElements.letter_body_textarea.fill(CONFIG.letterContent)];
                case 62:
                    _b.sent();
                    return [4 /*yield*/, letterFormElements.submit_button.click()];
                case 63:
                    _b.sent();
                    return [4 /*yield*/, agentqlPage.waitForLoadState('networkidle')];
                case 64:
                    _b.sent();
                    return [4 /*yield*/, agentqlPage.queryElements(LETTER_VIEW_QUERY)];
                case 65:
                    letterViewElements = _b.sent();
                    return [4 /*yield*/, letterViewElements.letter_content.textContent()];
                case 66:
                    letterContent = _b.sent();
                    console.log('Letter content:', letterContent);
                    console.log('Automation completed successfully!');
                    return [3 /*break*/, 71];
                case 67:
                    error_1 = _b.sent();
                    console.error('Error:', error_1);
                    return [4 /*yield*/, agentqlPage.screenshot({ path: 'error.png', fullPage: true })];
                case 68:
                    _b.sent();
                    throw error_1;
                case 69: return [4 /*yield*/, browser.close()];
                case 70:
                    _b.sent();
                    return [7 /*endfinally*/];
                case 71: return [2 /*return*/];
            }
        });
    });
}
// Run the script
automateEClaims().catch(console.error);

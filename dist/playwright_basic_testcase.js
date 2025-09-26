"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const playwright_1 = require("playwright");
// A promise object has 3 states Pending, Fulfilled, Rejected
async function Launch_browser(headless = false) {
    console.log("Launching browser...");
    const browser = await playwright_1.chromium.launch({ headless });
    const page = await browser.newPage();
    console.log("Browser launched successfully");
    return { browser, page };
}
//camel case
async function launch_website(page, url) {
    console.log(`Navigating to ${url}...`);
    await page.goto(url);
    //wait till the network calls are done
    //await page.waitForLoadState('networkidle');
    await page.waitForLoadState('domcontentloaded');
    console.log(`Navigation to ${url} successful`);
}
async function getting_a_quote_for_life(page) {
    await page.waitForTimeout(2000);
    page.locator("//a[@aria-controls='subNavigation-0']").click();
    await page.waitForTimeout(2000);
    page.locator("div[class='block-hero-inner'] a[class='btn btn-beta']").click();
    await page.waitForTimeout(2000);
    page.locator("label[for='male']").click();
    await page.waitForTimeout(2000);
    page.locator("label[for='nonsmoker']").click();
    await page.waitForTimeout(2000);
    page.locator("#dob").fill("19/05/1990");
    await page.waitForTimeout(2000);
}
//makeiing a test scenarion step by steps
//steps 1
(async () => {
    //steps 1
    const { browser, page } = await Launch_browser(false);
    //step 2
    await launch_website(page, "https://www.realinsurance.com.au/");
    //step 3
    await getting_a_quote_for_life(page);
})();

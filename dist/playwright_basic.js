"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const playwright_1 = require("playwright");
//npx tsc && node dist/playwright_basic.js
(async () => {
    const browser = await playwright_1.chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://www.google.com/");
    await page.locator("#APjFqb").fill("Hello World");
    await page.locator("(//input[@name='btnK'])[2]").click();
})();

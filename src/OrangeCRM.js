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
var playwright_1 = require("playwright");
// A promise object has 3 states Pending, Fulfilled, Rejected
function Launch_browser() {
    return __awaiter(this, arguments, void 0, function (headless) {
        var browser, page;
        if (headless === void 0) { headless = false; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Launching browser...");
                    return [4 /*yield*/, playwright_1.chromium.launch({ headless: headless })];
                case 1:
                    browser = _a.sent();
                    return [4 /*yield*/, browser.newPage()];
                case 2:
                    page = _a.sent();
                    console.log("Browser launched successfully");
                    return [2 /*return*/, { browser: browser, page: page }];
            }
        });
    });
}
//camel case
function launch_website(page, url) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Navigating to ".concat(url, "..."));
                    return [4 /*yield*/, page.goto(url)];
                case 1:
                    _a.sent();
                    //wait till the network calls are done
                    //await page.waitForLoadState('networkidle');
                    return [4 /*yield*/, page.waitForLoadState('domcontentloaded')];
                case 2:
                    //wait till the network calls are done
                    //await page.waitForLoadState('networkidle');
                    _a.sent();
                    console.log("Navigation to ".concat(url, " successful"));
                    return [2 /*return*/];
            }
        });
    });
}
function extract_credentials(page) {
    return __awaiter(this, void 0, void 0, function () {
        var userText, passText, username, password;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, page.waitForTimeout(2000)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, page.locator("//p[text()='Username : Admin']").innerText()];
                case 2:
                    userText = _a.sent();
                    return [4 /*yield*/, page.locator("//p[text()='Password : admin123']").innerText()];
                case 3:
                    passText = _a.sent();
                    console.log("admintext is ".concat(userText));
                    console.log("passtext is ".concat(passText));
                    username = userText.split(":")[1].trim();
                    password = passText.split(":")[1].trim();
                    console.log("admin is ".concat(username));
                    console.log("pass is ".concat(password));
                    return [4 /*yield*/, page.waitForTimeout(2000)];
                case 4:
                    _a.sent();
                    return [2 /*return*/, [username, password]];
            }
        });
    });
}
function login(page, username, password) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, page.waitForTimeout(2000)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, page.locator("//input[@placeholder='Username']").fill(username)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, page.locator("//input[@placeholder='Password']").fill(password)];
                case 3:
                    _a.sent();
                    console.log("username in login is ".concat(username));
                    console.log("pass in login is ".concat(password));
                    return [4 /*yield*/, page.waitForTimeout(2000)];
                case 4:
                    _a.sent();
                    //await page.locator("//button[@fdprocessedid='0qs6df']").click();
                    return [4 /*yield*/, page.locator("//button[@type='submit']").click()];
                case 5:
                    //await page.locator("//button[@fdprocessedid='0qs6df']").click();
                    _a.sent();
                    return [4 /*yield*/, page.waitForTimeout(2000)];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function logout(page) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, page.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, page.waitForTimeout(2000)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, page.locator("//a[text()='Logout']").click()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, page.waitForTimeout(2000)];
                case 4:
                    _a.sent();
                    console.log("User has been logged out");
                    return [2 /*return*/];
            }
        });
    });
}
function closeBrowser(page) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Closing the browser");
                    return [4 /*yield*/, page.close()];
                case 1:
                    _a.sent();
                    console.log("Browser has been closed");
                    return [2 /*return*/];
            }
        });
    });
}
//makeiing a test scenarion step by steps
//steps 1
function clickPersonalDetails(page) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, page.waitForTimeout(2000)];
                case 1:
                    _a.sent();
                    //await page.locator("//span[text()='My Info']").click();
                    return [4 /*yield*/, page.locator("//span[normalize-space()='My Info']").click()];
                case 2:
                    //await page.locator("//span[text()='My Info']").click();
                    _a.sent();
                    //await page.locator("//a[text()='Personal Details']").click();
                    return [4 /*yield*/, page.locator("//a[text()='Job']").click()];
                case 3:
                    //await page.locator("//a[text()='Personal Details']").click();
                    _a.sent();
                    //const passText = await page.locator("//p[text()='Password : admin123']").innerText();
                    //console.log(`admintext is ${userText}`);
                    //console.log(`passtext is ${passText}`);
                    //const username = userText.split(":")[1].trim();
                    //const password = passText.split(":")[1].trim();
                    //console.log(`admin is ${username}`);
                    //console.log(`pass is ${password}`);
                    return [4 /*yield*/, page.waitForTimeout(2000)];
                case 4:
                    //const passText = await page.locator("//p[text()='Password : admin123']").innerText();
                    //console.log(`admintext is ${userText}`);
                    //console.log(`passtext is ${passText}`);
                    //const username = userText.split(":")[1].trim();
                    //const password = passText.split(":")[1].trim();
                    //console.log(`admin is ${username}`);
                    //console.log(`pass is ${password}`);
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function fillPersonalDetails(page) {
    return __awaiter(this, void 0, void 0, function () {
        var firstName;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, page.waitForTimeout(2000)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, page.locator("//input[@placeholder='First Name']").clear()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, page.locator("//input[@placeholder='First Name']").fill("Manda")];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, page.waitForTimeout(1000)];
                case 4:
                    _a.sent();
                    //await page.locator("//button[@fdprocessedid='ciiisp']").scrollIntoViewIfNeeded();
                    return [4 /*yield*/, page.evaluate(function () { return window.scrollBy(0, 1000); })];
                case 5:
                    //await page.locator("//button[@fdprocessedid='ciiisp']").scrollIntoViewIfNeeded();
                    _a.sent();
                    return [4 /*yield*/, page.waitForTimeout(2000)];
                case 6:
                    _a.sent();
                    //await page.locator("//button[@fdprocessedid='ciiisp']").click();
                    return [4 /*yield*/, page.locator("button[data-v-6653c066][type='submit']").click()];
                case 7:
                    //await page.locator("//button[@fdprocessedid='ciiisp']").click();
                    _a.sent();
                    //await page.locator("//input[@placeholder='Password']").fill(password);
                    return [4 /*yield*/, page.waitForTimeout(7000)];
                case 8:
                    //await page.locator("//input[@placeholder='Password']").fill(password);
                    _a.sent();
                    return [4 /*yield*/, page.locator("//input[@placeholder='First Name']").innerText()];
                case 9:
                    firstName = _a.sent();
                    console.log("firstname is in function first" + firstName);
                    return [2 /*return*/];
            }
        });
    });
}
function extractPersonalDetails(page) {
    return __awaiter(this, void 0, void 0, function () {
        var firstName;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, page.locator("//div[text()='HR Manager']").innerText()];
                case 1:
                    firstName = _a.sent();
                    console.log("firstname is in function" + firstName);
                    return [2 /*return*/, [firstName]];
            }
        });
    });
}
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, browser, page, _b, username, password, firstName;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, Launch_browser(false)];
            case 1:
                _a = _c.sent(), browser = _a.browser, page = _a.page;
                //step 2
                return [4 /*yield*/, launch_website(page, "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")];
            case 2:
                //step 2
                _c.sent();
                return [4 /*yield*/, extract_credentials(page)];
            case 3:
                _b = _c.sent(), username = _b[0], password = _b[1];
                console.log("calling function admin is ".concat(username));
                console.log("calling function pass is ".concat(password));
                return [4 /*yield*/, login(page, username, password)];
            case 4:
                _c.sent();
                return [4 /*yield*/, clickPersonalDetails(page)];
            case 5:
                _c.sent();
                return [4 /*yield*/, extractPersonalDetails(page)];
            case 6:
                firstName = _c.sent();
                console.log("firstname is" + firstName);
                return [4 /*yield*/, logout(page)];
            case 7:
                _c.sent();
                return [4 /*yield*/, closeBrowser(page)];
            case 8:
                _c.sent();
                return [2 /*return*/];
        }
    });
}); })();

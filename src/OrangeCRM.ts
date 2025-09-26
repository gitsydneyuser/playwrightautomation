
import { Browser,chromium,Page } from "playwright";


// A promise object has 3 states Pending, Fulfilled, Rejected
async function Launch_browser(headless: boolean = false): Promise<{ browser: Browser, page: Page }> {
    console.log("Launching browser...");
    const browser = await chromium.launch({ headless });
    const page = await browser.newPage();
    console.log("Browser launched successfully");
    return { browser, page };
}


//camel case
async function launch_website(page: Page,url: string): Promise<void> {
    console.log(`Navigating to ${url}...`);
    await page.goto(url);
    //wait till the network calls are done
    //await page.waitForLoadState('networkidle');
    await page.waitForLoadState('domcontentloaded');
    console.log(`Navigation to ${url} successful`);
}

async function extract_credentials(page: Page): Promise<string[]> {
  await page.waitForTimeout(2000);
  const userText = await page.locator("//p[text()='Username : Admin']").innerText();
  const passText = await page.locator("//p[text()='Password : admin123']").innerText();
  console.log(`admintext is ${userText}`);
  console.log(`passtext is ${passText}`);
  const username = userText.split(":")[1].trim();
  const password = passText.split(":")[1].trim();
  console.log(`admin is ${username}`);
  console.log(`pass is ${password}`);
  await page.waitForTimeout(2000);
  return [ username, password];
 // page.locator("div[class='block-hero-inner'] a[class='btn btn-beta']").click();
  //await page.waitForTimeout(2000);
  //page.locator("label[for='male']").click();
   // await page.waitForTimeout(2000);
  //page.locator("label[for='nonsmoker']").click();
  //await page.waitForTimeout(2000);
  // page.locator("#dob").fill("19/05/1990");
  //await page.waitForTimeout(2000);
}

async function login(page: Page, username: string, password: string): Promise<void> {
  await page.waitForTimeout(2000);
  await page.locator("//input[@placeholder='Username']").fill(username);
  await page.locator("//input[@placeholder='Password']").fill(password);
   console.log(`username in login is ${username}`);
  console.log(`pass in login is ${password}`);
  await page.waitForTimeout(2000);
  //await page.locator("//button[@fdprocessedid='0qs6df']").click();
  await page.locator("//button[@type='submit']").click();
  await page.waitForTimeout(2000);
}

async function logout(page: Page): Promise<void> {
await page.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click();
await page.waitForTimeout(2000);
await page.locator("//a[text()='Logout']").click();
await page.waitForTimeout(2000);
console.log("User has been logged out");
}

async function closeBrowser(page: Page): Promise<void> {
  console.log("Closing the browser");
  await page.close();
  console.log("Browser has been closed");
}
//makeiing a test scenarion step by steps
//steps 1

async function clickPersonalDetails(page: Page): Promise<void> {
  await page.waitForTimeout(2000);
  //await page.locator("//span[text()='My Info']").click();
       await page.locator("//span[normalize-space()='My Info']").click();
  //await page.locator("//a[text()='Personal Details']").click();
            await page.locator("//a[text()='Job']").click();
  //const passText = await page.locator("//p[text()='Password : admin123']").innerText();
  //console.log(`admintext is ${userText}`);
  //console.log(`passtext is ${passText}`);
  //const username = userText.split(":")[1].trim();
  //const password = passText.split(":")[1].trim();
  //console.log(`admin is ${username}`);
  //console.log(`pass is ${password}`);
  await page.waitForTimeout(2000);
}

async function fillPersonalDetails(page: Page): Promise<void> {
  await page.waitForTimeout(2000);
  await page.locator("//input[@placeholder='First Name']").clear();
  await page.locator("//input[@placeholder='First Name']").fill("Manda");
    await page.waitForTimeout(1000);
  //await page.locator("//button[@fdprocessedid='ciiisp']").scrollIntoViewIfNeeded();
 await page.evaluate(() => window.scrollBy(0, 1000));
     await page.waitForTimeout(2000);
  //await page.locator("//button[@fdprocessedid='ciiisp']").click();
  await page.locator("button[data-v-6653c066][type='submit']").click();
  //await page.locator("//input[@placeholder='Password']").fill(password);
       await page.waitForTimeout(7000);
        const firstName = await page.locator("//input[@placeholder='First Name']").innerText();
  console.log("firstname is in function first" + firstName);
}

async function extractPersonalDetails(page: Page): Promise<string[]> {
  //const firstName = await page.locator("//input[@placeholder='First Name']").innerText();
   const firstName = await page.locator("//div[text()='HR Manager']").innerText();
   console.log("firstname is in function" + firstName);
  return [firstName!]; 
}

(async () => {
   //steps 1
  const {browser,page}  = await Launch_browser(false);
//step 2
  await launch_website(page,"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//step 3
const [username, password] = await extract_credentials(page);
 console.log(`calling function admin is ${username}`);
  console.log(`calling function pass is ${password}`);
  await login(page,username, password);
  await clickPersonalDetails(page);
  //await fillPersonalDetails(page);
  const firstName = await extractPersonalDetails(page);
  console.log("firstname is" + firstName);
  await logout(page);
  await closeBrowser(page);
})();









  
  
  


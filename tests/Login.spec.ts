import { chromium,Browser,Page, BrowserContext } from "@playwright/test";
import{test} from '@playwright/test';

test('Login Test', async () => {
    const browser: Browser = await chromium.launch();
    const context: BrowserContext = await browser.newContext();
    const page: Page = await browser.newPage();
    
    await page.goto("http://playwright.dev");

    await page.waitForTimeout(3000);

    await browser.close();
})
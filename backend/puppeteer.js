const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://stockx.com/fr-fr/sneakers/most-popular');
    await page.screenshot({ path: 'example.png' });
    dsfdsf
//test
   // await browser.close();
})();

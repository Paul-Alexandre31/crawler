const puppeteer = require('puppeteer');

(async () => {
<<<<<<< HEAD
    const browser = await puppeteer.launch({headless:false});
=======
    const browser = await puppeteer.launch({headless:false);
>>>>>>> 79c16e2d445057304ddeb971311a19ccfd0db7a7
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({ path: 'example.png' });
//test
    await browser.close();
})();

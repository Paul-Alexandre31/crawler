const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://stockx.com/fr-fr/sneakers/most-popular');
    let list = await page.$$eval('[data-testid="product-tile"]', (tiles)=> {
        let products = [];
        tiles.forEach((tile)=>{
            product.push()
        })
    });
    console.log(list)
//test
   // await browser.close();
})();

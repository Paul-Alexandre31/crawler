const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://stockx.com/fr-fr/sneakers/most-popular');
    let list = await page.$$eval('[data-testid="product-tile"]', (tiles)=> {
        let products = [];
        tiles.forEach((tile)=>{
            products.push({
                url: tile.querySelector('a').href,
                price: parseInt(tile.querySelector('.price-line-div div:nth-child(2)').innerText),
               //photo: tile.querySelector('img').src, #recup img quand html fonctionel
                name: tile.querySelector('a div:nth-child(2) div').innerText,
                nbrSell : tile.querySelector('a div:nth-child(2) div:nth-child(3)').innerText.slice(14)
            })
        });
        return products
    });
    console.log(list)
//test
   // await browser.close();
})();

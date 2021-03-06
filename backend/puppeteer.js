const puppeteer = require('puppeteer');

module.exports = async function(){



    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://stockx.com/fr-fr/sneakers/most-popular');
    let list = await page.$$eval('[data-testid="product-tile"]', async (tiles)=> {
        let products = [];

        function delay(s){
            return new Promise((resolve)=>setTimeout(resolve, s));
        }

        for (const tile of tiles) {
            tile.scrollIntoView();
            await delay(10);
            products.push({
                url: tile.querySelector('a').href,
                price: parseInt(tile.querySelector('.price-line-div div:nth-child(2)').innerText),
                photo: tile.querySelector('img').src, //#recup img quand html fonctionel
                name: tile.querySelector('a div:nth-child(2) div').innerText,
                nbrSell : tile.querySelector('a div:nth-child(2) div:nth-child(3)').innerText.slice(14)
            })
        }

        return products
    });

    browser.close();

    return list;
}
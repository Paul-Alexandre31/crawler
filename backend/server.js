const express = require('express');
const app = express();
const scanner = require('./puppeteer');

(async ()=>{
   const list = await scanner();

   app.set('view engine', 'ejs');
   app.set('views', 'pages/');
   app.use(express.static('public'));

   app.get('/', function (req, res) {
      res.render('index', {
         name: 'RomAinlexandre',
         list: list,
      });
   });

   app.get('/main.css', ((req, res) => {
      res.sendFile("C:\\Users\\fourc\\OneDrive\\Bureau\\crawler\\backend\\public\\css\\main.css", {
         type: 'text/css'
      })
   }))

   app.listen(3000, ()=>{
      console.log('Ca roule sur le port :3000')
   })
})()
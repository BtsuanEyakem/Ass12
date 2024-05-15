const express = require('express');

const product = express();
const bodyParser = require('body-parser');
const path = require('path');



product.use(bodyParser.urlencoded({extended: true}));
const path1 = path.join(__dirname,'..','public');
console.log(path1);
product.use( express.static(path1));

product.get('/product',(req, res, next)=>{
    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="/mycss3.css">
</head>
<body>
<div> 
<form method="POST">
    <h1> Product page!</h1>
   <input name="name" placeholder ='product1' value ="Product1"/><br>
   <input name="name2" placeholder ='product2' value ="Product1"/><br>
   <input name="name3" placeholder ='product3' value ="Product1"/><br>
   <input name="name4" placeholder ='product4' value ="Product1"/><br>
   <input name="name5" placeholder ='product5' value ="Product1"/><br>
   <button>Submit</button>
</form>
</div>
</body>
</html>
    `);
    
});
product.post('/product', (req,res)=>{
    console.log(req.body);
    res.send(` 
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="/mycss2.css">
</head>
<body>
    <div>
       <form>
          <h1 style="colore:blue"> Good Jop</h1>
       </form>
    </div>
</body>
</html>
    `)
});



module.exports = product;

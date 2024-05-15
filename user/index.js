const express = require('express');

const user = express();
const bodyParser = require('body-parser');
const path = require('path');



user.use(bodyParser.urlencoded({extended: true}));
const path1 = path.join(__dirname,'..','public');
console.log(path1);
user.use( express.static(path1));

user.get('/user/signup',(req, res, next)=>{
    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="/mycss.css">
</head>
<body>
<div> 
<form method="POST">
    <h1> Welcome To the users page!</h1>
   <input name="name" placeholder ='UserName'/><br>
   <input name="email" placeholder ='email' type="email" /></br>
   <input name="password" placeholder ='password'/ ><br>
   <button>Sign In</button>
</form>
</div>
</body>
</html>
    `);
    
});
user.post('/user/signup', (req,res)=>{
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
          <h1 style="colore:blue"> Sign In sucessfully</h1>
       </form>
    </div>
</body>
</html>
    `)
});



module.exports = user;

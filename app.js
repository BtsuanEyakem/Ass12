const express = require('express');
const path = require('path');
const app = express();


const user = require(path.join(__dirname,'..','Ass12','user','user.js'));
const product = require(path.join(__dirname,'..','Ass12','product','product.js'))

app.use(user);
app.use(product);
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'..','Ass12','error','error.html'))
});

app.listen(3000, console.log('Listening'));
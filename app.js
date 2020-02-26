/*jshint esversion: 6 */ 

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine','ejs');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.use('/admin',adminRoutes);
app.use(shopRoutes);



app.use(errorController.get404);

app.listen(3000,()=>{
    console.log('Server Started at 3000!');
})
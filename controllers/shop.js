const Product = require('../models/products');

exports.getProducts  = (req,res,next)=>{
    Product.fetchAll(products=>{
        res.render('shop/product-list',{
            prods:products, 
            docTitle:'Shop',
            path:'/products'
        });
    });
    
};

exports.getIndex = (req,res,next)=>{
    Product.fetchAll(products=>{
        res.render('shop/index',{
            prods:products, 
            docTitle:'Shop',
            path:'/'
        });
});
};

exports.getCart = (req,res,next)=>{
    res.render('shop/cart',{
        path:'/cart',
        docTitle:'Cart'
    });
};

exports.getCheckout = (req,res,next)=>{
    res.render('shop/checkout',{
        path:'/checkout',
        docTitle:'checkout'
    });
};

exports.getOrders = (req,res,next)=>{
    res.render('shop/orders',{
        path:'/orders',
        docTitle:'orders'
    });
};
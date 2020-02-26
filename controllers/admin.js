const Product = require('../models/products');

exports.getAddProduct = (req,res,next)=>{
    res.render('admin/add-product',{
        docTitle:'Add Product',
        path:'/admin/add-product'
    })
};

exports.postAddProducts = (req,res,next) =>{  
    const {title, imageUrl, description, price} = req.body;
    const product = new Product(title,imageUrl,description,price);
    product.save();  
    res.redirect('/');
};

exports.getProducts = (req,res,next)=>{
    Product.fetchAll(products=>{
        res.render('admin/products',{
            prods:products, 
            docTitle:'Admin Products',
            path:'/admin/products'
        });
    });
    
};
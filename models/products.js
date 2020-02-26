const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
    );

const getproductsFromFile = cb =>{
    
    fs.readFile(p,(err,fileContent)=>{
        if(err){
            return cb([]);
        }else{

            cb(JSON.parse(fileContent));

        }
    });
}

module.exports = class Product{
    constructor(title,imageUrl,description,Price){
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.Price = Price;
    }

    save(){
        getproductsFromFile(products=>{
            products.push(this);
            fs.writeFile(p,JSON.stringify(products), (err)=>{
                console.log(err);
            });
        });
        
    }

    static fetchAll(cb){
        getproductsFromFile(cb);
    }
}
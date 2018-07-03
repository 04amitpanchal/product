var product=require('../model/product');
var express=require('express');
var route=express.Router();


route.get('/:item',function(req,res,next){
    product.getgentsware(req.params.item,function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });    
});

module.exports=route;

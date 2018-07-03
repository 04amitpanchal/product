var product=require('../model/product');
var express=require('express');
var route=express.Router();

route.get('',function(req,res,next){
    product.getnames(function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports=route;
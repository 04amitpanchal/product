var product=require('../model/product');
var express=require('express');
var route=express.Router();

route.get('/:name',function(req,res,next){
    product.getMobile(req.params.name,function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports=route;
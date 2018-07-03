var product=require('../model/product');
var express=require('express');
var route=express.Router();

route.get('/:id?',function(req,res,next){
    if (req.params.id) {
        product.getById(req.params.id,function(err,rows){
            if (err) {
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else{
        product.getAllData(function(err,rows){
            if (err) {
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
});


module.exports=route;
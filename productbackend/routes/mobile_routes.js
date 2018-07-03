var login=require('../model/login');
var express=require('express');
var route=express.Router();

route.get('',function(req,res,next){
    login.showmobile(req.body,function(err,rows){
        if (err) {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


module.exports=route;
var login=require('../model/login');
var express=require('express');
var route=express.Router();


// route.post('',function(req,res,next){
//     if (req.params.id) {
//         login.LoginChecked(req.params.id,function(err,rows){
//             if (err) {
//                 res.json(err);
//             }
//             else{
//                 res.json(rows);
//             }
//         });
//     }
//     else{
//         login.getAllData(function(err,rows){
//             if (err) {
//                 res.json(err);
//             }
//             else{
//                 res.json(rows);
//             }
//         });
//     }
// });
route.post('',function(req,res,next){
    login.LoginChecked(req.body,function(err,rows){
        if (err) {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

module.exports=route;
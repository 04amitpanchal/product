var db=require('../dbconnection');
var product={
    getAllData:function(callback){
        return db.query('select * from product',callback);
    },
    getById:function(id,callback){
        return db.query('select * from product where pro_id=?',[id],callback);
    },
//    getgentsware:function(item,callback){
//        return db.query('select * from product where pro_name=?',[item],callback);
//    }
getgentsware:function(name,callback){
    // alert(item);
    return db.query('select * from category c,product p where c.c_id=p.c_id and p.c_id=?',[name],callback);
},
getMobile:function(name,callback){
    return db.query('select * from category c,product p where c.c_id=p.c_id and p.pro_name=? ',[name],callback);
},
getnames:function(callback)
{
    return db.query('select pro_name from product',callback);
}
}

module.exports=product;
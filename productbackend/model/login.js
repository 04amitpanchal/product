var db=require('../dbconnection');
var login={
    getAllData:function(callback){
        return db.query('select * from login',callback);
    },
    LoginChecked:function(item,callback){
        return db.query('select * from login where l_id=? and password=?',[item.l_id,item.password],callback);
    },
    
}

module.exports=login;
var connection=require('../../config/db.config.js');
var express=require('express');

 

var Contactus=function(contactus){
    this.contactId=contactus.contactId;
    this.name=contactus.name;
    this.email=contactus.email;
    this.message=contactus.message;
    this.subject=contactus.subject;
    this.phone=contactus.phone;   
};

//Add contactus
Contactus.addContactus=async function(contactus,result){
    await connection.query('insert into contact set ?',contactus,(err,res)=>{
        if(err){
            console.log('error: ',err);
            result(err,null);
        }
        else{
            result(null,res);
        }
    });
}

//get contactus by contactId
Contactus.getContactusById=async function(contactId,result){
    await connection.query('SELECT * FROM contact WHERE contactId=?',contactId,function(err,res){
        if(err){
            result(err,null);
        }
        else{
            result(null,res);
        }
    });
}

//get all contactus
Contactus.getAllContactus=async function(result){
    await connection.query('SELECT * FROM contact order by inserted desc',function(err,res){
        if(err){
            console.log('error: ',err);
            result(err,null);
        }
        else{
            result(null,res);
        }
    });
}



module.exports=Contactus;
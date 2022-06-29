var connection=require('../../config/db.config.js');
var express=require('express');

 

var Users=function(user){
    this.UserId=user.UserId;
    this.FirstName=user.FirstName;
    this.LastName=user.LastName;
    this.Email=user.Email;
    this.Mobile=user.Mobile;
    this.Address=user.Address;
    this.username=user.username;
    this.password=user.password;
    this.userTypeId=user.userTypeId;
};


///get user by userid
Users.getUserById=async function(userId,result){
    await connection.query('SELECT * FROM user WHERE UserId=?',userId,function(err,res){
        if(err){
            result(err,null);
        }
        else{
            result(null,res);
        }
    });
};


//get all users
Users.getAllUsers=async function(result){
    await connection.query('SELECT * FROM user',function(err,res){
        if(err){
            console.log('error: ',err);
            result(err,null);
        }
        else{
            result(null,res);
        }
    });

};

Users.Registration=async function (userData, result){
    await connection.query('insert into user set ?',userData,(err,res)=>{
        if(err){
            console.log('error: ',err);
            result(err,null);
        }
        else{
            result(null,res);
        }
    });

};




module.exports=Users;


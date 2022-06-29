var connection=require('../../config/db.config.js');
var express=require('express');
var jwt=require('jsonwebtoken'); 
var env=require('dotenv').config();

var login=(login)=>{
    this.userName=login.userName;
    this.password=user.password;
};

login.getLogininformation=async function(username,password,result){
    await connection.query('SELECT * FROM user WHERE userName=? AND password=?',[username,password],function(err,rows){
        if(err){
            console.log(err);
        }
        else{
            if(rows.length>0){
                const username=rows[0].username;
                const email=rows[0].Email;
                const userTypeId=rows[0].userTypeId;
                const userId=rows[0].UserId;

                const userData={
                    username:username,
                    email:email,
                    userTypeId:userTypeId,
                    userId:userId
                };

                ////jwt token
                var token=jwt.sign(userData,process.env.ACCESS_TOKEN_SECRET,{
                    expiresIn:60*60*24
                });

                result(null,{
                    "status":200,
                    success:true,
                    "message":"Login Successfully",
                    data:{
                        token:token,
                        userData:userData
                    }
                });
                   
            }

            else{
                result(null,{
                    "status":400,
                    success:false,
                    "message":"Invalid Username or Password"
                });
            }
        }
    });
};

 


module.exports=login;


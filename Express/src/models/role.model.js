var connection=require('../../config/db.config.js');
var express=require('express');
const { json } = require('express/lib/response');

 

var Roles=function(role){
    this.roleid=role.roleid;
    this.rolename=role.rolename;    
    this.isActive=role.isActive;
};



//get all roles
Roles.getAllRoles=async function(result){
    await connection.query('SELECT * FROM role',function(err,res){
        if(err){
            console.log('error: ',err);
            result(err,null);
        }
        else{
            result(null,res);
        }
    });

};

//add role
Roles.AddRole=async function (roleData, result){
    console.log(JSON.stringify(roleData));
    await connection.query('insert into role set ?',roleData,(err,res)=>{
        if(err){
            console.log('error: ',err);
            result(err,null);
        }
        else{
            result(null,res);
        }
    });

   

};

//delete role
Roles.DeleteRole=async function (roleData, result){
    console.log('jsonData='+JSON.stringify(roleData));
    await connection.query('DELETE FROM role WHERE rolename=?',roleData.rolename,(err,res)=>{
        if(err){
            console.log('error: ',err);
            result(err,null);
        }
        else{
            result(null,res);
        }
    }
    );
}

//get role by id
Roles.getRoleById=async function (roleData, result){
    console.log('jsonData='+JSON.stringify(roleData));
    await connection.query('SELECT * FROM role WHERE roleid=?',roleData,(err,res)=>{
        if(err){
            console.log('error: ',err);
            result(err,null);
        }
        else{
            result(null,res);
        }
    }
    );
}


module.exports=Roles;
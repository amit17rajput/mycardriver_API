var connection=require('../../config/db.config.js');
var express=require('express');
const { json } = require('express/lib/response');

 

var PageDetail=function(pagedetail){
    this.PageDetailId=pagedetail.PageDetailId;
    this.PageName=pagedetail.PageName;    
    this.url=pagedetail.url;

    this.icon=pagedetail.icon;
    this.class=pagedetail.class;
    this.parentid=pagedetail.parentid;
    this.isActive=pagedetail.isActive;
};



//get all pages
PageDetail.getAllpages=async function(result){
    await connection.query('SELECT * FROM PageDetails',function(err,res){
        if(err){
            console.log('error: ',err);
            result(err,null);
        }
        else{
            result(null,res);
        }
    });

};

//add Page
PageDetail.AddPage=async function (pageData, result){
    console.log(JSON.stringify(pageData));
    await connection.query('insert into PageDetails set ?',pageData,(err,res)=>{
        if(err){
            console.log('error: ',err);
            result(err,null);
        }
        else{
            result(null,res);
        }
    });  

};

//delete page
PageDetail.DeletePage=async function (pageData, result){
    console.log('jsonData='+JSON.stringify(pageData));
    await connection.query('DELETE FROM PageDetails WHERE PageName=?',pageData.PageName,(err,res)=>{
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


//update page
PageDetail.UpdatePage=async function (pageData, result){
    console.log('jsonData='+JSON.stringify(pageData));
    await connection.query('UPDATE PageDetails SET PageName=?,url=?,icon=?,class=?,parentid=?,isActive=? WHERE PageDetailId=?',[pageData.PageName,pageData.url,pageData.icon,pageData.class,pageData.parentid,pageData.isActive,pageData.PageDetailId],(err,res)=>{
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


 

//get Page by id
PageDetail.getPageById=async function (pageData, result){
    console.log('jsonData='+JSON.stringify(pageData));
    await connection.query('SELECT * FROM PageDetails WHERE PageDetailId=?',pageData.PageDetailId,(err,res)=>{
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


module.exports=PageDetail;
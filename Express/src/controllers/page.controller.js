const { json } = require('express/lib/response');
const pageModel=require('../models/page.model');

///get all page list
exports.getAllPages=(req,res)=>{
    pageModel.getAllpages(function(err,result){
        if(err){
            res.status(500).send({
                message:err.message
            });
        }
        else{
            res.status(200).send({
                message:'success',
                data:result
            });
        }
    });
}

    // if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    //     res.send({
    //         "status":400,
    //         success:false,
    //         "message": err

    //     });
    // }
    // else{
    //     pageModel.getAllpages(req.body,(err,result)=>{
    //         if(err){
    //             res.send({
    //                 "status":400,
    //                 success:false,
    //                 "message":err
    //             });
    //         }
    //         else{
    //             res.send({
    //                 "status":200,
    //                 success:true,
    //                 "message":"Page list",
    //                 "data":result
    //             });
    //         }
    //     }
    //     );
 //   }

    


//delete Page
exports.DeletePage=(req,res)=>{
    console.log('jsonData='+req);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send({
            "status":400,
            success:false,
            "message": err
        });
    }
    else{
        const pageData= new pageModel(req.body);
        console.log('pageData='+pageData);
        pageModel.DeletePage(pageData,(err,result)=>{
            if(err){
                res.send({
                    "status":400,
                    success:false,
                    "message":err
                });
            }
            else{
                res.send({
                    "status":200,
                    success:true,
                    "message":"Page deleted successfully"
                });
            }
        });
    }
}
    

////Add page
exports.AddPage=(req,res)=>{
    console.log('jsonData='+req);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send({
            "status":400,
            success:false,
            "message": err
        });
    }
    else{
        const pageData= new pageModel(req.body);
        console.log('pageData='+pageData);
        pageModel.AddPage(pageData,(err,result)=>{
            if(err){
                res.send({
                    "status":400,
                    success:false,
                    "message":err
                });
            }
            else{
                res.send({
                    "status":200,
                    success:true,
                    "message":"Page added successfully"
                });
            }
        });
    }
}


////get page by id
exports.getPageById=(req,res)=>{
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send('Please provide pageid');
    }
    else{
        pageModel.getPageById(req.body,(err,result)=>{
            if(err){
                res.send(err);
            }
            else{
                res.send(result);
            }
        }
        );
    }
};

////update page
exports.UpdatePage=(req,res)=>{
    console.log('jsonData='+req);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send({
            "status":400,
            success:false,
            "message": err
        });
    }
    else{
        const pageData= new pageModel(req.body);
        console.log('pageData='+pageData);
        pageModel.UpdatePage(pageData,(err,result)=>{
            if(err){
                res.send({
                    "status":400,
                    success:false,
                    "message":err
                });
            }
            else{
                res.send({
                    "status":200,
                    success:true,
                    "message":"Page updated successfully"
                });
            }
        });
    }
};

////get page by id
exports.getPageByRoleId=(req,res)=>{
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send('Please provide roleid');
    }
    else{
        pageModel.getPageByRoleId(req.body,(err,result)=>{
            if(err){
                res.send(err);
            }
            else{
                res.send(result);
            }
        }
        );
    }
}


 

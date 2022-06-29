const { json } = require('express/lib/response');
const roleModel=require('../models/role.model');

///get all role list
exports.getAllroles=(req,res)=>{
    //roleModel.getAllRoles((err,result)=>{
        roleModel.getAllRoles((err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    });
};

//delete role
exports.DeleteRole=(req,res)=>{
    console.log('jsonData='+req);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send({
            "status":400,
            success:false,
            "message": err
        });
    }
    else{
    const roleData= new roleModel(req.body);
    console.log('roleData='+roleData);
    roleModel.DeleteRole(roleData,(err,result)=>{
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
                "message":"Role deleted successfully"
            });
        }
    });
}
};

    
//get role by id
exports.getRoleById=(req,res)=>{
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send('Please provide roleid');
    }
    else{
        roleModel.getRoleById(req.body,(err,result)=>{
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

////Add role
exports.AddRole=(req,res)=>{
    
    console.log('jsonData='+req);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send({
            "status":400,
            success:false,
            "message":"Bad Request"
        });
    }
    else{
    const roleData= new roleModel(req.body);
    roleModel.AddRole(roleData,(err,result)=>{
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
                "message":"Role Added Successfully",data:result
                });
        }
    });
}
};



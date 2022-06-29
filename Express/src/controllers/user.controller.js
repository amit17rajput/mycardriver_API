//const userModel=require('../models/user.model');

 
const userModel=require('../models/user.model');


exports.getuserbyId=(req,res)=>{
    userModel.getUserById(req.params.id,(err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    }
    );
};   

///get all user list
exports.getAllUsers=(req,res)=>{
    userModel.getAllUsers((err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    });
};

///get all user list
exports.Registration=(req,res)=>{
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send({
            "status":400,
            success:false,
            "message":"Bad Request"
        });
    }
    else{

    const userData= new userModel(req.body);
    userModel.Registration(userData,(err,result)=>{
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
                "message":"User Registration Successfully",data:result
                });
        }
    });
}
     
};

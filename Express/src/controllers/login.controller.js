const loginModel=require('../models/login.model');



///get user login information   
exports.login=(req,res)=>{
    
    loginModel.getLogininformation(req.body.username,req.body.password,(err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    });    
};


 



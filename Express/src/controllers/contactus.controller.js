const contactusModel=require('../models/contactus.model');


//get contactus by contactId
exports.getcontactusbyId=(req,res)=>{
    contactusModel.getContactusById(req.params.id,(err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    }
    );
}

//get all contactus
exports.getAllcontactus=(req,res)=>{
    contactusModel.getAllContactus((err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    });
}

//Add contactus
exports.addcontactus=(req,res)=>{
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send({
            "status":400,
            success:false,
            "message":"Bad Request"
        });
    }
    else{
        const contactusData= new contactusModel(req.body);
        contactusModel.addContactus(contactusData,(err,result)=>{
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
                    "message":"Contactus Added Successfully",data:result
                    });
            }
        });
    }
}


 
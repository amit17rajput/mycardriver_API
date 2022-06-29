// exports.authenticateToken(req,res,next)
// {
//     const authHeader=req.headers['authorization'];
//     const token=authHeader && authHeader.split(' ')[1];
//     if(token==null) 
//     {
//         return res.sendStatus(401);
    
//     jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
//         if(err) return res.sendStatus(403);
//         req.user=user;
//         next();
//     });  
//     }
// }

const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.ACCESS_TOKEN_SECRET);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
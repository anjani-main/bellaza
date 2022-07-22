const jwt = require('jsonwebtoken');

export default generateToken=async(payload)=>{
    try{
        jwt.sign(payload, 'AURA_IT',{algorithm: 'HS256',expiresIn:60000}, (err,token)=>{
            if(!err){
                return "Bearer " + token
           }
       })
    }catch(err){
        console.log("Error: ",err);
        return 'error'
    }
   
  }
const jwt = require('jsonwebtoken');

const SECRET = '5d7665f6-def2-5621-8e95-32e7208351a5';

const JWT = {
    generate(value,expires){
        return jwt.sign(value,SECRET,{ expiresIn: expires });
    },
    verify(token){
        try{
            return jwt.verify(token,SECRET);
        }catch(err){
            return false;
        }
    }
}

module.exports = JWT;
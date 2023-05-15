const jwt = require('jsonwebtoken');

const SECRET = 'f2339f48-eb24-237b-f9ab-ddd4bdeaa2d6';

const JWT = {
  generate(value, expires){
    return jwt.sign(value, SECRET, { expiresIn: expires });
  },
  verify(token){
    try {
      return jwt.verify(token, SECRET);
    } catch (err) {
      return false;
    }
  }
};

module.exports = JWT;
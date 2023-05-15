const express = require('express');
const router = express.Router();
const users = require('../data');
const JWT = require('../utils/JWT');

router.post('/login', (req, res) => {
  const account = req.body.account;
  const password = req.body.password;

  const user = users.filter(item => {
    return item.account === account && item.password === password;
  });

  if (user.length) {
    res.send({
      ok: 1,
      username: user[0].username,
      token: JWT.generate({
        id: user[0].id,
        username: user[0].username
      }, '1h')
    });
  } else {
    res.send({
      ok: 0
    });
  }
});

module.exports = router;
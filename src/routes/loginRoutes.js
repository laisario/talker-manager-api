const express = require('express');
// const randomToken = require('crypto-random-string');

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  const token = Math.random().toString().substring(2);
  console.log(token);
  
  if (email && password) {
    return res.status(200).json({ token });
  }
});

module.exports = router;
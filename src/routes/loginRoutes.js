const express = require('express');

const router = express.Router();
const validateLogin = require('../middlewares/loginVerification');

router.post('/', validateLogin, async (req, res) => {
  const { email, password } = req.body;
  const token = Math.random().toString().substring(2);
  console.log(token);
  
  if (email && password) {
    return res.status(200).json({ token });
  }
});

module.exports = router;
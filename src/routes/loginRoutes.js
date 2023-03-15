const express = require('express');

const router = express.Router();
const { validateEmail, validatePassword } = require('../middlewares/loginVerification');

router.post('/', validateEmail, validatePassword, async (req, res) => {
  const { email, password } = req.body;
  const generateToken = Math.random().toString(36).substring(2);
  const token = (generateToken + generateToken).slice(1, 17);
  
  if (email && password) {
    return res.status(200).json({ token });
  }
});

module.exports = router;

const validateEmail = (email, res) => {
  const emailOK = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
  if (!email) return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  if (!emailOK) return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
};

const validatePassword = (password, res) => {
  const passwordOK = password && password.length >= 6;
  
  if (!password) return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  if (!passwordOK) return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres'});
};

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  validateEmail(email, res);
  validatePassword(password, res);
  next(); 
};
module.exports = validateLogin;
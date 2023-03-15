const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const emailOK = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
  
  if (!email) return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  if (!emailOK) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  const passwordOK = password && password.length >= 6;
  if (!password) return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  if (!passwordOK) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  next(); 
};

module.exports = { validateEmail, validatePassword };
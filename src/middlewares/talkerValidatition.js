const validateName = (req, res, next) => {
  const { name } = req.body;
  const isNameOk = name && name.length >= 3;
  if (!name) {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' }); 
  }
  if (!isNameOk) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' }); 
  }
  next();
};

const validateAge = (req, res, next) => {
  const { age } = req.body;
  const isAgeOk = age && Number.isInteger(age) && age >= 18;
  if (!age) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' }); 
  }
  if (!isAgeOk) {
    return res.status(400)
      .json({ message: 'O campo "age" deve ser um número inteiro igual ou maior que 18' }); 
  }
  next();
};

const validateTalk = (req, res, next) => {
  const { talk } = req.body;
  const isTalkOk = talk && typeof talk === 'object';
  if (!isTalkOk) {
    return res.status(400).json({ message: 'O campo "talk" é obrigatório' }); 
  }
  next();
};

const validateWatchedAt = (req, res, next) => {
  const { talk: { watchedAt } } = req.body;
  const isWatchedAtOk = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/.test(watchedAt);
  if (!watchedAt) {
    return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' }); 
  }
  if (!isWatchedAtOk) {
    return res.status(400)
      .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' }); 
  }
  next();
};

const validateRate = (req, res, next) => {
  const { talk: { rate } } = req.body;
  const isRateNumberRight = rate < 1 || rate > 5;
  if (isRateNumberRight) {
    return res.status(400)
      .json({ message: 'O campo "rate" deve ser um número inteiro entre 1 e 5' }); 
  }
  if (!rate) {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' }); 
  }

  next();
};

const validateRate2 = (req, res, next) => {
  const { talk: { rate } } = req.body;
  const isRateInt = Number.isInteger(rate);

  if (!isRateInt) {
    return res.status(400)
      .json({ message: 'O campo "rate" deve ser um número inteiro entre 1 e 5' }); 
  }
  next();
};

module.exports = { 
  validateName, 
  validateAge,
  validateTalk, 
  validateWatchedAt, 
  validateRate, 
  validateRate2,
 };
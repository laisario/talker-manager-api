const express = require('express');
const path = require('path');
const readFile = require('../utills/readFile');
const writeFile = require('../utills/writeFile');
const { 
  validateName,
  validateAge, 
  validateTalk, 
  validateWatchedAt,
  validateRate,
  validateRate2,
  validateId,
} = require('../middlewares/talkerValidatition');
const validateToken = require('../middlewares/tokenValidatition');

const TALKER_FILE = path.join(__dirname, '..', 'talker.json');

const router = express.Router();

router.get('/', async (req, res) => {
  const talkers = await readFile(TALKER_FILE);
  if (!talkers) return res.status(200).json([]);
  return res.status(200).json(talkers);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const talkers = await readFile(TALKER_FILE);
  const talkerById = talkers.find((talker) => Number(talker.id) === Number(id));
  if (!talkerById) {
    return res.status(404).json({
      message: 'Pessoa palestrante não encontrada',
    }); 
  }
  return res.status(200).json(talkerById);
});

router.post('/',
  validateToken,
  validateName,
  validateAge,
  validateTalk, 
  validateWatchedAt, 
  validateRate,
  validateRate2,
  async (req, res) => {
  const { name, age, talk } = req.body;
  const talkers = await readFile(TALKER_FILE);
  if (!talkers) return res.status(200).json([]);
  
  const newTalker = { id: talkers.length + 1, name, age, talk };
  talkers.push(newTalker);

  await writeFile(TALKER_FILE, talkers);
      
  return res.status(201).json(newTalker);
});

router.put('/:id',
  validateToken,
  validateName,
  validateAge,
  validateTalk, 
  validateWatchedAt, 
  validateRate,
  validateRate2,
  validateId,
  async (req, res) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;
  const talkers = await readFile(TALKER_FILE);
  const indexOfTalker = talkers.findIndex((talker) => talker.id === Number(id));
  // o + na frente do id é pra transformar em número
  talkers[indexOfTalker] = { id: +id, name, age, talk };
  await writeFile(TALKER_FILE, talkers);
  return res.status(200).json(talkers[indexOfTalker]);
});

module.exports = router;
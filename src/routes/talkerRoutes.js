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
} = require('../middlewares/talkerVerification');

// const talkersJSON = `${__dirname}/./talker.json`;
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
    // validateName,
    // validateAge, 
    // validateTalk, 
    // validateWatchedAt, 
    // validateRate, 
    async (req, res) => {
       // const { authorization } = req.header;
      const data = req.body;
      const newTalkerId = data.id;
      await writeFile(TALKER_FILE, data);
      const talkers = await readFile(TALKER_FILE);
      const newTalker = talkers.find(({ id }) => id === newTalkerId);
      
      return res.status(201).json(newTalker);
});

module.exports = router;
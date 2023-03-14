const express = require('express');
const path = require('path');
const readFile = require('../utills/readFile');

// const talkersJSON = `${__dirname}/./talker.json`;
const TALKER_FILE = path.join(__dirname, '..', 'talker.json');

const router = express.Router();

router.get('/', async (req, res) => {
  const talkers = await readFile(TALKER_FILE);
  if (!talkers) return res.status(200).json([]);
  return res.status(200).json(talkers);
});

module.exports = router;
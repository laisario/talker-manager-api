const fs = require('fs').promises;

// const talkersJSON = '../talker.json';

const readFile = async (file) => {
  try {
    const data = await fs.readFile(file);
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
  }
};

// console.log(readFile(talkersJSON))
module.exports = readFile;
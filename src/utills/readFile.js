const fs = require('fs').promises;

const readFile = async (file) => {
  try {
    const data = await fs.readFile(file);
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
  }
};

module.exports = readFile;
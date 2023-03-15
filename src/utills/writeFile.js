const fs = require('fs').promises;

const writeFile = async (file, data) => {
  try {
    await fs.writeFile(file, data);
  } catch (error) {
    console.error(error);
  }
};

module.exports = writeFile;
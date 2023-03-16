const fs = require('fs').promises;

const writeFile = async (file, data) => {
  try {
    await fs.writeFile(file, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error(error);
  }
};

module.exports = writeFile;
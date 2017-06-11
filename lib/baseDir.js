const fs = require('fs');
const path = require('path');

module.exports = {
  getCurrentDirectoryBase() {
    return path.basename(process.cwd());
  },

  getCurrentWorkingDir() {
    return process.cwd();
  },

  directoryExists(filePath) {
    try {
      return fs.statSync(filePath).isDirectory() || fs.statSync(filePath).isFile();
    } catch (err) {
      return false;
    }
  }
};
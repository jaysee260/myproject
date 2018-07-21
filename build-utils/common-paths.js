const path = require('path');

module.exports = {
  appEntry: path.resolve(__dirname, "../", "client", "src"),
  outputPath: path.resolve(__dirname, "../", "dist"),
  templatePath: path.resolve(__dirname, "../", "client", "src", "index.html")
};
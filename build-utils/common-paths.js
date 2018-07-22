const path = require('path');

module.exports = {
  appEntry: path.resolve(__dirname, "../", "client", "src"),
  outputPath: path.resolve(__dirname, "../", "dist"),
  templatePath: path.resolve(__dirname, "../", "client", "src", "index.html"),
  clientPath: path.resolve(__dirname, "../", "client"),
  serverPath: path.resolve(__dirname, "../", "server"),
  configPath: path.resolve(__dirname, "../", "config")
};
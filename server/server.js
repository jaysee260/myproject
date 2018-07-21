const express = require('express');
const app = express();
const { PORT = 3000 } = process.env;

app.get('/webpack', (req, res) => {
  res.send('hello from express.js');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World with Jenkins and Docker! and more optimized');
});

app.listen(port, () => {
  console.log(`Server running at the http://localhost:${port}/`);
});

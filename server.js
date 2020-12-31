const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.use((reg,res) => {
  res.send('Hello, all!');
});

const PORT = 8050;
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
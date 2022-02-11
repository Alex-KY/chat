// server.js
const express = require('express');
const PORT = 3000;

const app = express();

app.use('/', express.static(__dirname));

app.use('/404', express.static(`${__dirname}/views/404/404.html`));

app.get(/\/*/, express.static(`${__dirname}/views/404/404.html`));

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/deploymentku'));

app.all('*', (req, res) => {
  res.status(200).sendFile(__dirname + '/deploymentku/index.html');
});

app.listen(process.env.PORT || 8080);
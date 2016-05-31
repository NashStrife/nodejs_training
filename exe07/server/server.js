let express = require('express');

let app = express();

let root = process.cwd();

app.get('/', function (req, res) {
	res.status(200);
  	res.sendFile(`${root}/data/friends.json`);
});

module.exports = app;

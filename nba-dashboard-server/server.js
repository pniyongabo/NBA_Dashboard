const express = require('express')
const app = express();
const port = 8000;

var mockDataController = require('./mockDataController');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/teams/league/standard', mockDataController.getTeamsLeagueStandard);

app.get('/players/league/standard', mockDataController.getPlayersLeagueStandard);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});


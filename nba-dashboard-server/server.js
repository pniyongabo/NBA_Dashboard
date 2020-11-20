const express = require('express')
const fetch = require('node-fetch');
const cheerio = require("cheerio");
// const path = require("path");
cors = require('cors');

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

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

app.get('/team_stats', (req, res) => {

  fetch('https://basketball.realgm.com/nba/team-stats')
    .then((res)=>res.text())
    .then((html) => {
      // console.log(html);
      const $ = cheerio.load(html);
      let all_data = {};
      let header_arr = [];

      $(".tablesaw").find("thead").first().find("th").each((i, col_header) => {
        header_arr.push($(col_header).text());
      })

      $(".tablesaw").find("tbody").first().find("tr").each((i, row) => {
        let team_arr = {};
        $(row).find('td').each((i, item) => {
          team_arr[header_arr[i]] = $(item).text();
        })
        all_data[team_arr['Team']] = team_arr;
      })

      res.json(all_data);
    })
    .catch((err) => console.log("Request failed", err));
    
}); 

app.get('/teams/league/standard', mockDataController.getTeamsLeagueStandard);

app.get('/players/league/standard', mockDataController.getPlayersLeagueStandard);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});


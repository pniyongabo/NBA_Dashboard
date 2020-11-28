const express = require('express')
const fetch = require('node-fetch');
const cheerio = require("cheerio");
// const path = require("path");
cors = require('cors');

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

var mockDataController = require('./mockDataController');
var helperDataController = require('./helperDataController');

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
      let team_stats = [];

      $(".tablesaw").find("thead").first().find("th").each((i, col_header) => {
        header_arr.push($(col_header).text());
      })

      let glossary = {'#': 'Rank', 
      'Team': 'Team', 
      'GP': 'Games Played',
      'MPG': 'Minutes Per Game', 
      'FGM': 'Field Goals Made', 
      'FGA': 'Field Goals Attempted', 
      'FG%': 'Field Goal Percentage', 
      '3PM': 'Three-Point Field Goals Made', 
      '3PA': 'Three-Point Field Goals Attempted', 
      '3P%': 'Three-Point Field Goal Percentage', 
      'FTM': 'Free Throws Made', 
      'FTA' : 'Free Throws Attempted',
      'FT%': 'Free Throw Percentage', 
      'TOV': 'Turnovers', 
      'PF': 'Personal Fouls',
      'ORB': 'Offensive Rebounds', 
      'DRB': 'Defensive Rebounds', 
      'RPG': 'Rebounds Per Game', 
      'APG': 'Assists Per Game', 
      'SPG' : 'Steals Per Game', 
      'BPG': 'Blocks Per Game', 
      'PPG': 'Points Per Game',
      };
      
      all_data['glossary'] = glossary;

      $(".tablesaw").find("tbody").first().find("tr").each((i, row) => {
        
        let team_arr = {};
        
        $(row).find('td').each((i, item) => {
          team_arr[header_arr[i]] = $(item).text();
        })
        team_stats.push(team_arr);
      })
      all_data['team_stats'] = team_stats;

      res.json(all_data);
    })
    .catch((err) => console.log("Request failed", err));
    
}); 

app.get('/teams/league/standard', mockDataController.getTeamsLeagueStandard);

app.get('/players/league/standard', mockDataController.getPlayersLeagueStandard);

app.get('/teams/mappings', mockDataController.getTeamsMappings);

app.get('/games/live', mockDataController.getLiveGames);

app.get('/games/league/standard/2019', mockDataController.getSchedulesAndResults);

app.get('/standings/league/standard/2019', mockDataController.getStandings);

app.get('/players/playerId/216', mockDataController.getPlayerById);

app.get('/teams/mappings/:teamId', function (req, res) {
    return res.send(helperDataController.getTeamFullName(req.params.teamId));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});


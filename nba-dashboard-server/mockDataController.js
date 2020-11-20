const path = require('path');
const fs = require('fs');

const basePathToData = path.join(__dirname, 'mockdata');

const getJsonData = function (basePathToData, filename) {
  var filename = path.join(basePathToData, filename);
  return JSON.parse(fs.readFileSync(filename, 'utf-8'));
};

exports.getTeamsLeagueStandard = function (request, response) {
  var data = getJsonData(basePathToData, 'teams_league_standard.json');
  return response.send(data);
};

exports.getPlayersLeagueStandard = function (request, response) {
  var data = getJsonData(basePathToData, 'players_league_standard.json');
  return response.send(data);
};
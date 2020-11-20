const express = require('express')
const fetch = require('node-fetch');
const cheerio = require("cheerio");
// const path = require("path");
cors = require('cors');

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/team_stats', (req, res) => {
  // fetch('https://store.steampowered.com/stats/')
  //   .then((res) => res.text())
  //   .then((html) => {
  //     console.log(html);
  //     const $ = cheerio.load(html);

  //     const data = { updated: $(".statsTopSmall").text(), apps: [] };

  //     $(".player_count_row").each((i, elem) => {
  //       const current = $(elem).find(".currentServers").first().text();
  //       const peak = $(elem).find(".currentServers").last().text();
  //       const appid = $(elem).find(".gameLink").attr("href").split("/")[4];
  //       const name = $(elem).find(".gameLink").text();

  //       const obj = {
  //         current,
  //         peak,
  //         appid,
  //         name,
  //       };

  //       data.apps.push(obj);
  //     });

  //     res.json(data);

  //   })
  //   .catch((err) => console.log("Request failed", err));
////////////////////////////////////////////////////////////////////////////////////////////

  fetch('https://basketball.realgm.com/nba/team-stats')
    .then((res)=>res.text())
    .then((html) => {
      // console.log(html);
      const $ = cheerio.load(html);
      let all_data = [];
      let header_arr = [];

      $(".tablesaw").find("thead").first().find("th").each((i, col_header) => {
        header_arr.push($(col_header).text());
      })
      all_data.push(header_arr);

      $(".tablesaw").find("tbody").first().find("tr").each((i, row) => {
        let team_arr = [];
        $(row).find('td').each((i, item) => {
          team_arr.push($(item).text());
        })
        all_data.push(team_arr);
      })
      console.log(all_data);

      res.json(all_data);
    })
    .catch((err) => console.log("Request failed", err));
    
}); 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
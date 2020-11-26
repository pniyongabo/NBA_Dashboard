import React, { Component } from 'react';
// import {Doughnut} from 'react-chartjs-2';
// require("dotenv").config();

export default class Standing extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      standingsWest: {},
      standingsEast: {},
      teamsMappings: {}
    }
  }
  

  componentDidMount() {
    
    this.getStandings()
      .then(res1 => this.setState({ 
        standingsEast: res1.api.standings.filter((team) => team.conference.name === "east"),
        standingsWest: res1.api.standings.filter((team) => team.conference.name === "west")
      }))
      .then(this.getTeamsMappings()
        .then(res2 => this.setState({ 
          teamsMappings: res2,
          isLoaded: true,
        })))
      .catch(err => console.log(err));
    
  }


getStandings = async () => {
    // direct url: 'https://api-nba-v1.p.rapidapi.com/standings/league/standard/2019';
    const response = await fetch('http://localhost:8000/standings/league/standard/2019', 
      {"method": "GET",
       "headers":
       {
        "x-rapidapi-host": process.env.REACT_APP_NONFREE_API_URL,
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        }
      });
      
      const body = await response.json();
      
      if (response.status !== 200) {
        return {}; 
      }
      
      return body;

}

getTeamsMappings = async () => {
    // direct url: 'https://api-nba-v1.p.rapidapi.com/games/live';
    const response = await fetch('http://localhost:8000/teams/mappings', 
      {"method": "GET",
       "headers":
       {
        "x-rapidapi-host": process.env.REACT_APP_NONFREE_API_URL,
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        }
      });
      
      const body = await response.json();
      
      if (response.status !== 200) {
        return {}; 
      }
      
      return body;

}


load_data = (standings) => {
  console.log(standings);
  const sortedStandings = standings.sort((a, b) => (parseInt(a.conference.rank) > parseInt(b.conference.rank)) ? 1 : -1);
  return(
       <table className="large-tables standings">
         <thead>
            <tr>
               <th>Rank</th>
               <th>Team</th>
               <th>Win Pct</th>
               <th>Win Streak</th>
               <th>Div Name</th>
               <th>Div Rank</th>
            </tr>
         </thead>
         <tbody>
         {sortedStandings.map((item, i) => {
           const teamName = this.state.teamsMappings[item.teamId];
            return (
            <tr key={i}>
              <td>{item.conference.rank}</td>
              <td>{teamName}</td>
              <td>{item.winPercentage}</td>
              <td>{item.winStreak}</td>
              <td>{item.division.name}</td>
              <td>{item.division.rank}</td>
            </tr>
            )
       })}
         </tbody>
       </table>
     )

}
    
  render() {
    if(!this.state.isLoaded){
      return (
        <div>
            <h1>
              Loading Live Games Data ...
            </h1>
        </div>
      )
    }

    return (
      <div className="align-center">
          <h1>
            Standings
          </h1>
          
          <div>
            <div>
              <h3>East Conference Standings</h3>
              {this.load_data(this.state.standingsEast)}
            </div>
            <div>
              <h3>West Conference Standings</h3>
              {this.load_data(this.state.standingsWest)}
            </div>
          </div>
          
      </div>
    );
  }

}

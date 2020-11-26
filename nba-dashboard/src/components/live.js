import React, { Component } from 'react';
import './live.css';
// import {Doughnut} from 'react-chartjs-2';
// require("dotenv").config();

export default class Live extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      liveGames: {},
      teamsMappings: {}
    }
  }
  

  componentDidMount() {
    
    this.getLiveGames()
      .then(res1 => this.setState({ 
        liveGames: res1
      }))
      .then(this.getTeamsMappings()
        .then(res2 => this.setState({ 
          teamsMappings: res2,
          isLoaded: true,
        })))
      .catch(err => console.log(err));
    
  }


getLiveGames = async () => {
    // direct url: 'https://api-nba-v1.p.rapidapi.com/games/live';
    const response = await fetch('http://localhost:8000/games/live', 
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


load_data = () => {
  return(
      //  <table className="large-tables" id="liveGames">
      //    <thead>
      //       <tr>
      //          <th>Current Score</th>
      //          <th>Arena</th>
      //          <th>City</th>
      //       </tr>
      //    </thead>
      //    <tbody>
      //    {this.state.liveGames.api.games.map((item, i) => {
      //      const homeTeamId = item.hTeam.teamId;
      //      const awayTeamId = item.vTeam.teamId;
      //      const homeTeamScore = item.hTeam.score.points;
      //      const awayTeamScore = item.vTeam.score.points;
      //      const homeTeamName = this.state.teamsMappings[homeTeamId];
      //      const awayTeamName = this.state.teamsMappings[awayTeamId];
      //       return (
      //       <tr key={i}>
      //         <td>{awayTeamName} {awayTeamScore} - {homeTeamScore} {homeTeamName}</td>
      //         <td>{item.arena}</td>
      //         <td>{item.city}</td>
      //       </tr>
      //       )
      //  })}
      //    </tbody>
      //  </table>
////////////////////////////////////////////////////////////////////////////////////////////
        <div className="container live_games" id="liveGames">
          <div class='row header' >
            <div class='col-6 '>
                <h4>HOME</h4>
            </div>
            <div class='col-6 '>
              <h4>AWAY</h4>
            </div>
          </div>

         {this.state.liveGames.api.games.map((item, i) => {
           const homeTeamId = item.hTeam.teamId;
           const awayTeamId = item.vTeam.teamId;
           const homeTeamScore = item.hTeam.score.points;
           const awayTeamScore = item.vTeam.score.points;
           const homeTeamName = this.state.teamsMappings[homeTeamId];
           const awayTeamName = this.state.teamsMappings[awayTeamId];
            return (
            <div className="single_game">
              <div class='row' >
                <div class='col-6'>
                    <h4>{homeTeamName}</h4>
                </div>
                <div class='col-6'>
                  <h4>{awayTeamName}</h4>
                </div>
              </div>
              <div class='row'>
                <div class='col-6'>
                <h3>{homeTeamScore}</h3>
                </div>
                <div class='col-6'>
                <h3>{awayTeamScore}</h3>
                </div>

              </div>

            </div>
              
            )
        })}
       </div>

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
            Live Games
          </h1>
          <p>There are no live games in progress. This is a proof-of-concept of how it would look.</p>
          

          {this.load_data(this.state.data)}

      </div>
    );
  }

}

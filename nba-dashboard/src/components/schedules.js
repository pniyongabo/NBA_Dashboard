import React, { Component } from 'react';
// import {Doughnut} from 'react-chartjs-2';
// require("dotenv").config();

export default class Schedules extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: {},
    }
  }
  

  componentDidMount(){

    // const url = 'https://api-nba-v1.p.rapidapi.com/games/league/standard/2019';
    const url = 'http://localhost:8000/games/league/standard/2019';


    // async function that gets teams list and header info from api
    let loadResponse = async () => {
        let response = await fetch(url, 
          {"method": "GET",
           "headers":
           {
            "x-rapidapi-host": process.env.REACT_APP_NONFREE_API_URL,
            "x-rapidapi-key": process.env.REACT_APP_API_KEY,
            }
          }).then(response=>response.json())
            .then(json=>{
            console.log(json);
            this.setState({data: json, isLoaded: true})
          }).catch(err=>{
            console.log(err);
          })

    }

    loadResponse();
}


load_data = () => {
  return(
       <table className="large-tables" id="schedules">
         <thead>
            <tr>
               <th>Game</th>
               <th>Status</th>
               <th>Date</th>
               <th>Arena</th>
               <th>City</th>
            </tr>
         </thead>
         <tbody>
         {this.state.data.api.games.map((item, i) => {
           const homeTeamShortName = item.hTeam.shortName;
           const awayTeamShortName = item.vTeam.shortName;
           const homeTeamScore = item.hTeam.score.points;
           const awayTeamScore = item.vTeam.score.points;
           //const homeTeamName = this.state.teamsMappings[homeTeamId];
           //const awayTeamName = this.state.teamsMappings[awayTeamId];
            return (
            <tr key={i}>
              <td>{awayTeamShortName} {awayTeamScore} - {homeTeamScore} {homeTeamShortName}</td>
              <td>{item.statusGame}</td>
              <td>{item.startTimeUTC}</td>
              <td>{item.arena}</td>
              <td>{item.city}</td>
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
              Loading schedules and results ...
            </h1>
        </div>
      )
    }

    return (
      <div className="align-center">
          <h1>
            Schedules and Results
          </h1>
          

          {this.load_data(this.state.data)}

      </div>
    );
  }

}

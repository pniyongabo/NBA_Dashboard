import React, { Component } from 'react';
// import {Doughnut} from 'react-chartjs-2';
import Sidebar from './sidebar';
import Header from './header';


export default class Player extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      playerDetailsLoaded: false,
      teamsMappingsLoaded: false,
      playerDetails: {},
      teamsMappings: {}
    }
  }
  
  componentDidMount() {
      
      this.getPlayerDetails(this.props.match.params.id)
        .then(res1 => this.setState({ 
          playerDetails: res1.api.players[0],
          playerDetailsLoaded: true
        }))
        .then(this.getTeamsMappings()
          .then(res2 => this.setState({ 
            teamsMappings: res2,
            teamsMappingsLoaded: true,
          })))
        .catch(err => console.log(err));
        
  }
  
  getPlayerDetails = async (id) => {
      const playerId = "216"; // REMOVE BEFORE SUBMISSION
      //const response = await fetch('https://api-nba-v1.p.rapidapi.com/players/playerId/' + id,
      const response = await fetch('http://localhost:8000/players/playerId/' + playerId, 
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
  
  // getTeamFullName = async (teamId) => {
  //   const response = await fetch('http://localhost:8000/teams/mappings/' + teamId);
  //   const body = await response.text();
  // 
  //   if (response.status !== 200) {
  //     return ""; 
  //   }
  // 
  //   return body;
  // };
  

  
  load_data = () => {
    const playerImageURL = "https://nba-players.herokuapp.com/players/" + this.state.playerDetails.lastName + "/" + this.state.playerDetails.firstName;
    const playerImageALT = "Headshot image of Nba Player " + this.state.playerDetails.lastName + " " + this.state.playerDetails.firstName;
    return(
      <div>
        <div>
        <img src={playerImageURL} alt={playerImageALT}/>
        </div>
        <div>
           <h1>{this.state.playerDetails.firstName} {this.state.playerDetails.lastName}</h1>
           <h5>{this.state.teamsMappings[this.state.playerDetails.teamId]} | No. {this.state.playerDetails.leagues.standard.jersey}</h5>
           <p>Weight (kg) : {this.state.playerDetails.weightInKilograms}</p>
           <p>Height (m): {this.state.playerDetails.heightInMeters}</p>
           <p>Born: {this.state.playerDetails.dateOfBirth}</p>
           <p>College Team: {this.state.playerDetails.collegeName}</p>
           <p>Born: {this.state.playerDetails.dateOfBirth}</p>
           <p>Position: {this.state.playerDetails.leagues.standard.position}</p>
           <p>Affiliation: {this.state.playerDetails.affiliation}</p>
        </div>
      </div>
       )
       

  }
    
  render() {
    if(!this.state.playerDetailsLoaded || !this.state.teamsMappingsLoaded){
      return (
        <div>
            <h1>
              Loading player details data ...
            </h1>
        </div>
      )
    }

    return (
      <div>
      <Header />
      <div className="align-center">
          {this.load_data(this.state.data)}
          <Sidebar />
      </div>
      </div>
    );
  }

}
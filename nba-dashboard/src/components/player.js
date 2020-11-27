import React, { Component } from 'react';
// import {Doughnut} from 'react-chartjs-2';
import Sidebar from './sidebar';


export default class Player extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    }
  }
  
  componentDidMount() {
    // console.log(this.props);
    
    this.getTeamFullName(this.props.location.state.data.teamId)
      .then(res => this.setState({ 
        data: this.props.location.state.data, 
        playerId: this.props.match.params.id, 
        isLoaded: true,
        teamFullName: res
      }))
      .catch(err => console.log(err));
    
  }
  
  getTeamFullName = async (teamId) => {
    const response = await fetch('http://localhost:8000/teams/mappings/' + teamId);
    const body = await response.text();

    if (response.status !== 200) {
      return ""; 
    }
    
    return body;
  };
  

  
  load_data = () => {
    const playerImageURL = "https://nba-players.herokuapp.com/players/" + this.state.data.lastName + "/" + this.state.data.firstName;
    const playerImageALT = "Headshot image of Nba Player " + this.state.data.lastName + " " + this.state.data.firstName;
    return(
      <div>
        <div>
        <img src={playerImageURL} alt={playerImageALT}/>
        </div>
        <div>
           <h1>{this.state.data.firstName} {this.state.data.lastName}</h1>
           <p>Weight (kg) : {this.state.data.weightInKilograms}</p>
           <p>Height (m): {this.state.data.heightInMeters}</p>
           <p>Born: {this.state.data.dateOfBirth}</p>
           <p>College Team: {this.state.data.collegeName}</p>
           <p>Current Team: {this.state.teamFullName}</p>
        </div>
      </div>
       )
       

  }
    
  render() {
    if(!this.state.isLoaded){
      return (
        <div>
            <h1>
              Loading player data ...
            </h1>
        </div>
      )
    }

    return (
      <div className="align-center">
          {this.load_data(this.state.data)}
          <Sidebar />
      </div>
    );
  }

}
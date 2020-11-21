import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';


export default class Player extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    }
  }
  
  componentDidMount() {
    console.log(this.props);
    
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
    console.log(this.state.data);
    console.log(this.state.playerId);
    return(
        <div>
           <h1>{this.state.data.firstName} {this.state.data.lastName}</h1>
           <p>Weight (kg) : {this.state.data.weightInKilograms}</p>
           <p>Height (m): {this.state.data.heightInMeters}</p>
           <p>Born: {this.state.data.dateOfBirth}</p>
           <p>College Team: {this.state.data.collegeName}</p>
           <p>Current Team: {this.state.teamFullName}</p>
        </div>
        /*
        1. add profile photo from external API
        2. fetch team name from local id-name mapping json file : DONE
        */
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
      <div className="center-align">
          {this.load_data(this.state.data)}
      </div>
    );
  }

}
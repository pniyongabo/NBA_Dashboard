import React, { Component } from 'react';
import Sidebar from './sidebar';
import Header from './header';

import './team.css';


export default class Team extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    }
  }
  
  componentDidMount() {
    // console.log(this.props);
    
    //this.getTeamFullName(this.props.location.state.data.teamId)
      //.then(res => 
      this.setState({ 
        team: this.props.location.state.data, 
        teamShortName: this.props.match.params.id, 
        isLoaded: true
      })
      //)
      //.catch(err => console.log(err));
    
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
    const teamLogoALT = "Logo image of " + this.state.team.fullName;
    return(
      <div>
        <div>
        <img className="team-logo" src={this.state.team.logo} alt={teamLogoALT}/>
        </div>
        <div>
           <h1>{this.state.team.fullName}</h1>
           <p>ShortName: {this.state.team.shortName}</p>
           <p>NickName: {this.state.team.nickname}</p>
           <p>Conference: {this.state.team.leagues.standard.confName}</p>
           <p>Divison: {this.state.team.leagues.standard.divName}</p>
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
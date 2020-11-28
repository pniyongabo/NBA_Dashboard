import React, { Component } from 'react';
import {Radar} from 'react-chartjs-2';
import Sidebar from './sidebar';
import Header from './header';

import './team.css';

export default class Team extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      team: {}
    }
  }
  
  componentDidMount() {
      this.setState({ 
        team: this.props.location.state.data, 
        // teamCityForMapping: this.getTeamCityForMapping(this.props.location.state.data.city),
        // teamShortName: this.props.match.params.id, 
        isLoaded: true
      })
  }
  
  // getTeamCityForMapping = (city) => {
  //     if (city === "LA") {
  //       return "L.A. Clippers";
  //     } else if (city === "Los Angeles") {
  //       return "L.A. Lakers";
  //     } else {
  //       return city;
  //     }
  //  };
  
  getTeamData = (city) => {
    var all_teams_data = this.props.all_data;
    console.log(all_teams_data);
    var teamData = {};
    
    all_teams_data.team_stats.forEach(function (item) {
      if (item.Team === city){
        // create array for Label
        // create array for data
        const teamMetrics = [
          item["GP"],
          item["MPG"],
          item["FGM"],
          item["3PM"],
          item["PF"],
          item["RPG"],
          item["APF"],
          item["PPG"]          
        ];
        const teamLabels = [
          all_teams_data.glossary["GP"],
          all_teams_data.glossary["MPG"],
          all_teams_data.glossary["FGM"],
          all_teams_data.glossary["3PM"],
          all_teams_data.glossary["PF"],
          all_teams_data.glossary["RPG"],
          all_teams_data.glossary["APF"],
          all_teams_data.glossary["PPG"]
        ];
        
        teamData["metrics"] = teamMetrics;
        teamData["labels"] = teamLabels;
      }
       
    });
    delete teamData['#'];
    delete teamData['Team'];
    console.log(teamData);
    return teamData;
   };
  
  load_graph = () => {
      const teamData = this.getTeamData(this.state.team.city);
      const data = {
        datasets: [
          {
            data: teamData.metrics,
            backgroundColor: "rgba(220,220,220,0.2)",
            pointBackgroundColor: "rgba(220,220,220,1)",
          },
        ],
        labels: teamData.labels,
      };
    
      const options = {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'Team Stats'
        },
        scale: {
          reverse: false,
          gridLines: {
            color: [
              'black',
              'red',
              'orange',
              'yellow',
              'green',
              'blue',
              'indigo',
              'violet'
            ]
          },
          ticks: {
            beginAtZero: true
          }
        }
      };
    
    return(
      <Radar data={data} options={options}/>
    )
  }
  

  
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
        <div className='container align-center'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-12 col-lg-4'>
              {this.load_data(this.state.data)}
            </div>
            <div className='col-12 col-sm-12 col-md-12 col-lg-8'>
              {this.load_graph(this.props.allData)}
            </div>
          </div>
          </div>
        <Sidebar />
        </div>
    );
  }

}
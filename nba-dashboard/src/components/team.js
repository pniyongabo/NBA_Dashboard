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
        isLoaded: true
      })
  }
  
  getTeamData = (city) => {
    var all_teams_data = this.props.all_data;
    console.log(all_teams_data);
    var teamData = {};
    var averageMetrics = [0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0];
    
    all_teams_data.team_stats.forEach(function (item) {
      
      averageMetrics[0] += parseFloat(item["GP"]);
      averageMetrics[1] += parseFloat(item["MPG"]);
      averageMetrics[2] += parseFloat(item["FGM"]);
      averageMetrics[3] += parseFloat(item["3PM"]);
      averageMetrics[4] += parseFloat(item["PF"]);
      averageMetrics[5] += parseFloat(item["RPG"]);
      averageMetrics[6] += parseFloat(item["APG"]);
      averageMetrics[7] += parseFloat(item["PPG"]);
      
      
      if (item.city === city){
        const teamMetrics = [
          item["GP"],
          item["MPG"],
          item["FGM"],
          item["3PM"],
          item["PF"],
          item["RPG"],
          item["APG"],
          item["PPG"]          
        ];
        const teamLabels = [
          all_teams_data.glossary["GP"],
          all_teams_data.glossary["MPG"],
          all_teams_data.glossary["FGM"],
          all_teams_data.glossary["3PM"],
          all_teams_data.glossary["PF"],
          all_teams_data.glossary["RPG"],
          all_teams_data.glossary["APG"],
          all_teams_data.glossary["PPG"]
        ];
        
        teamData["teamMetrics"] = teamMetrics;
        teamData["labels"] = teamLabels;
      }
       
    });
    
    console.log(averageMetrics);
    teamData["averageMetrics"] = averageMetrics.map(x => (x/all_teams_data.team_stats.length).toFixed(2));
    console.log(teamData);
    return teamData;
   };
  
  load_graph = () => {
      const teamData = this.getTeamData(this.state.team.city);
      const data = {
        datasets: [
          {
            data: teamData.averageMetrics,
            backgroundColor: "rgba(220,220,220,0.2)",
            pointBackgroundColor: "rgba(220,220,220,1)",
            borderColor: "rgba(1220,220,220,0.5)",
            pointHighlightStroke: "rgba(220,220,220,1)",
            label: "Avg NBA Team",
          },
          {
            data: teamData.teamMetrics,
            backgroundColor: "rgba(9,112,84,0.2)",
            pointBackgroundColor: "rgba(9,112,84,1)",
            borderColor: "rgba(9,112,84,0.5)",
            pointHighlightStroke: "rgba(9,112,84,1)",
            label: this.state.team.fullName,
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
        <div className="team-info">
           <h1>{this.state.team.fullName}</h1>
           <h5>Abbreviation: {this.state.team.shortName}</h5>
           <h5>Nickname: {this.state.team.nickname}</h5>
           <h5>Conference: {this.state.team.leagues.standard.confName}</h5>
           <h5>Divison: {this.state.team.leagues.standard.divName}</h5>
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
        <div className='align-center'>
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
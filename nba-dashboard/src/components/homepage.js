import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
import { Tab, Tabs } from 'react-bootstrap';
import './homepage.css';
import ball_logo from '../assets/basketball_logo_t.png';

import { getMainColor, getFullName, getSecondaryColor } from 'nba-color';
// import { LineChart, Line } from 'recharts';


// import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList, Label
} from 'recharts';
import GraphCreation from './graphCreation';
import Live from './live';
import Sidebar from './sidebar';

require("dotenv").config();



export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: {},
    }
  }
  

  componentDidMount(){

    // const url = 'https://free-nba.p.rapidapi.com/teams/25';
    // const url = 'https://api-nba-v1.p.rapidapi.com/teams/league/standard';


    //async function that gets page info from api
    let loadResponse = async () => {

        // let response = await fetch(url, 
        //   {"method": "GET",
        //    "headers":
        //    {
        //     "x-rapidapi-host": process.env.REACT_APP_NONFREE_API_URL,
        //     "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        //     }
        //   }).then(response=>response.json())
        //     .then(json=>{
        //     console.log(json);
        //     this.setState({data: json, isLoaded: true})
        //   }).catch(err=>{
        //     console.log(err);
        //   })

    // }

    // loadResponse();

    await fetch("/team_stats")
      .then((res) => res.json())
      .then((team_data) => {

        function compare_team_names(a, b){
          let comparison = 0;
          if(a.Team > b.Team){
            comparison = 1;
          } else if(a.Team < b.Team) {
            comparison = -1;
          }
          return comparison;
        }

        team_data.team_stats.sort(compare_team_names);

        this.setState({ isLoaded: false, data: team_data })
        console.log(this.state.data);
    })
      .catch((err) => console.log("Request failed", err));

    await fetch("/teams/league/standard")
      .then((res) => res.json())
      .then((team_names) => {
        let temp_data = this.state.data;
        team_names.api.teams.forEach(api_team => {
          //check if api_team name exists in temp data, then put it there if it does
          let found_city = temp_data.team_stats.find(e => {
            if(e.Team === api_team.city){ return true}
            if(e.Team === "L.A. Clippers" && api_team.city === "LA"){return true}
            if(e.Team === "L.A. Lakers" && api_team.city === "Los Angeles"){return true}
          });
          if(found_city !== undefined){
            // found_city['team_info'] = api_team;
            //loop through api_team info and add each field individually into found city data
            for(const property in api_team) {
              found_city[property] = api_team[property];
            }
          }
        })

        this.setState({ isLoaded: true, data: temp_data })
      })

    }
    loadResponse();

}


  render() {
    if(!this.state.isLoaded){
      return (
        <div>
            <h1>
              Loading...
            </h1>
        </div>
      )
    }

    return (
      <div>
        <div className="title">
          <div className='jumbotron'>
            
              <h1 className='d-inline-block display-2 title_text'> NBA DASH</h1>
              <img class="d-inline-block img-fluid logo" src={ball_logo} alt='logo' height='auto' width='13%'/>
              
              

          </div>
        </div>
          <div class='row'>
            <div class="col-3" >
              {/* style={{marginTop: '7rem'}} > */}

              <Live />

            </div>
            <div class="col-8" >
              {/* style={{marginTop: '20rem'}} > */}

              <Tabs className='tabs' defaultActiveKey="" id="uncontrolled-tab-example">

                <Tab.Pane className='tab' eventKey="ppg" title="Points Per Game">
                  <GraphCreation 
                    all_team_data={this.state.data} 
                    type_of_graph={"bar"} 
                    stat_to_graph={"PPG"}
                  />
                </Tab.Pane>

                <Tab className='tab' eventKey="fg" title="Field Goals">
                  <GraphCreation 
                    all_team_data={this.state.data} 
                    type_of_graph={"doublebar"} 
                    stat_to_graph={"FGA FGM FG%"}
                  />
                </Tab>

                <Tab className='tab' eventKey="3p" title="Three Pointers">
                  <GraphCreation 
                    all_team_data={this.state.data} 
                    type_of_graph={"doublebar"} 
                    stat_to_graph={"3PA 3PM 3P%"}
                  />
                </Tab>

                <Tab className='tab' eventKey="ft" title="Free Throws">
                  <GraphCreation 
                    all_team_data={this.state.data} 
                    type_of_graph={"doublebar"} 
                    stat_to_graph={"FTA FTM FT%"}
                  />
                </Tab>

                <Tab className='tab' eventKey="apg" title="Assists Per Game">
                  <GraphCreation 
                    all_team_data={this.state.data} 
                    type_of_graph={"bar"} 
                    stat_to_graph={"APG"}
                  />
                </Tab>

                <Tab className='tab' eventKey="bpg" title="Blocks Per Game">
                  <GraphCreation 
                    all_team_data={this.state.data} 
                    type_of_graph={"bar"} 
                    stat_to_graph={"BPG"}
                  />
                </Tab>

                <Tab className='tab' eventKey="orb" title="Offensive Rebounds">
                  <GraphCreation 
                    all_team_data={this.state.data} 
                    type_of_graph={"bar"} 
                    stat_to_graph={"ORB"}
                  />
                </Tab>

                <Tab className='tab' eventKey="drb" title="Defensive Rebounds">
                  <GraphCreation 
                    all_team_data={this.state.data} 
                    type_of_graph={"bar"} 
                    stat_to_graph={"DRB"}
                  />
                </Tab>

                <Tab className='tab' eventKey="pf" title="Personal Fouls">
                  <GraphCreation 
                    all_team_data={this.state.data} 
                    type_of_graph={"bar"} 
                    stat_to_graph={"PF"}
                  />
                </Tab>

                <Tab className='tab' eventKey="gp" title="Games Played">
                  <GraphCreation 
                    all_team_data={this.state.data} 
                    type_of_graph={"bar"} 
                    stat_to_graph={"GP"}
                  />
                </Tab>

                <Tab className='tab' eventKey="rpg" title="Rebounds Per Game">
                  <GraphCreation 
                    all_team_data={this.state.data} 
                    type_of_graph={"bar"} 
                    stat_to_graph={"RPG"}
                  />
                </Tab>

                <Tab className='tab' eventKey="spg" title="Steals Per Game">
                  <GraphCreation 
                    all_team_data={this.state.data} 
                    type_of_graph={"bar"} 
                    stat_to_graph={"SPG"}
                  />
                </Tab>

                <Tab className='tab' eventKey="tov" title="Turnovers">
                  <GraphCreation 
                    all_team_data={this.state.data} 
                    type_of_graph={"bar"} 
                    stat_to_graph={"TOV"}
                  />
                </Tab>
                
              </Tabs>

            </div>
            
            <div class="col-2"  >
              <Sidebar />
            </div>
          </div>

          
          

          
          

      </div>
    );
  }
}
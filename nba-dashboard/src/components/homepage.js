import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';

import GraphCreation from './graphCreation';
import Live from './live';
import Sidebar from './sidebar';
import Header from './header';

import './homepage.css';

require("dotenv").config();



export default class Homepage extends Component {
  
  render() {

    return (
      <div>
          <Header />
        
          <div className='row'>
            <div className="col-3" >

              <Live all_data={this.props.all_data}/>

            </div>
            <div className="col-8" >

              <Tabs className='tabs' defaultActiveKey="ppg" id="uncontrolled-tab-example" >

                <Tab className='tab' eventKey="ppg" title="Points Per Game">
                  <GraphCreation 
                    all_team_data={this.props.all_data} 
                    type_of_graph={"bar"} 
                    stat_to_graph={"PPG"}
                  />
                </Tab>

                <Tab className='tab' eventKey="fg" title="Field Goals">
                  <GraphCreation 
                    all_team_data={this.props.all_data} 
                    type_of_graph={"doublebar"} 
                    stat_to_graph={"FGA FGM FG%"}
                  />
                </Tab>

                <Tab className='tab' eventKey="3p" title="Three Pointers">
                  <GraphCreation 
                    all_team_data={this.props.all_data} 
                    type_of_graph={"doublebar"} 
                    stat_to_graph={"3PA 3PM 3P%"}
                  />
                </Tab>

                <Tab className='tab' eventKey="ft" title="Free Throws">
                  <GraphCreation 
                    all_team_data={this.props.all_data} 
                    type_of_graph={"doublebar"} 
                    stat_to_graph={"FTA FTM FT%"}
                  />
                </Tab>

                <Tab className='tab' eventKey="apg" title="Assists Per Game">
                  <GraphCreation 
                    all_team_data={this.props.all_data} 
                    type_of_graph={"bar"} 
                    stat_to_graph={"APG"}
                  />
                </Tab>

                <Tab className='tab' eventKey="bpg" title="Blocks Per Game">
                  <GraphCreation 
                    all_team_data={this.props.all_data} 
                    type_of_graph={"bar"} 
                    stat_to_graph={"BPG"}
                  />
                </Tab>

                <Tab className='tab' eventKey="orb" title="Offensive Rebounds">
                  <GraphCreation 
                    all_team_data={this.props.all_data} 
                    type_of_graph={"bar"} 
                    stat_to_graph={"ORB"}
                  />
                </Tab>

                <Tab className='tab' eventKey="drb" title="Defensive Rebounds" >
                  <GraphCreation 
                    all_team_data={this.props.all_data} 
                    type_of_graph={"bar"} 
                    stat_to_graph={"DRB"}
                  />
                  


                </Tab>

                <Tab className='tab' eventKey="pf" title="Personal Fouls">
                  <GraphCreation 
                    all_team_data={this.props.all_data} 
                    type_of_graph={"bar"} 
                    stat_to_graph={"PF"}
                  />
                </Tab>

                <Tab className='tab' eventKey="gp" title="Games Played">
                  <GraphCreation 
                    all_team_data={this.props.all_data} 
                    type_of_graph={"bar"} 
                    stat_to_graph={"GP"}
                  />
                </Tab>

                <Tab className='tab' eventKey="rpg" title="Rebounds Per Game">
                  <GraphCreation 
                    all_team_data={this.props.all_data} 
                    type_of_graph={"bar"} 
                    stat_to_graph={"RPG"}
                  />
                </Tab>

                <Tab className='tab' eventKey="spg" title="Steals Per Game">
                  <GraphCreation 
                    all_team_data={this.props.all_data} 
                    type_of_graph={"bar"} 
                    stat_to_graph={"SPG"}
                  />
                </Tab>

                <Tab className='tab' eventKey="tov" title="Turnovers">
                  <GraphCreation 
                    all_team_data={this.props.all_data} 
                    type_of_graph={"bar"} 
                    stat_to_graph={"TOV"}
                  />
                </Tab>
                
              </Tabs>

            </div>
            
            <div className="col-2"  >
              <Sidebar />
            </div>
          </div>

          
          

          
          

      </div>
    );
  }
}
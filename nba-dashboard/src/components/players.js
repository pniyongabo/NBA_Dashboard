import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
// import {Doughnut} from 'react-chartjs-2';
import {Link} from 'react-router-dom';
import Sidebar from './sidebar';


export default class Players extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: {},
      teamsMappings: {}
    }
  }
  
  componentDidMount() {
    this.getAllPlayers()
      .then(res1 => this.load_data(res1)
        .then(res3 => this.setState({
          data: res3
        }))
      )
      .then(this.getTeamsMappings().then(res2 => this.setState({
        teamsMappings: res2,
        isLoaded: true
      })))
      .catch(err => console.log(err));
  }
  

  getAllPlayers = async () => {
    const response = await fetch('http://localhost:8000/players/league/standard', 
    //const response = await fetch('https://api-nba-v1.p.rapidapi.com/players/league/standard',
      {"method": "GET",
       "headers":
       {
        "x-rapidapi-host": process.env.REACT_APP_NONFREE_API_URL,
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        }
      });
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };
  
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
  
  

  
  load_data = async (rawData) => {
  
    
    console.log(rawData.api.players.length)
    const dataRows = rawData.api.players.map((item, i) => {
      var currentRow = {};
      
      currentRow["id"] = item.playerId;
      currentRow["name"] = item.firstName + " " + item.lastName;
      currentRow["team"] = this.state.teamsMappings[item.teamId];
      currentRow["joined"] = item.startNba;
      
      return currentRow; 
    });
    
    const dataColumns = [
            {
              label: 'Id',
              field: 'id',
              sort: 'asc',
              width: 150
            },
            {
              label: 'Player Name',
              field: 'name',
              sort: 'asc',
              width: 270
            },
            {
              label: 'Current Team',
              field: 'team',
              sort: 'asc',
              width: 200
            },
            {
              label: 'Joined NBA',
              field: 'joined',
              sort: 'asc',
              width: 100
            }
          ];
  
    const data = {
      columns: dataColumns,
      rows: dataRows
    };
    
    /*
    return(
         <table className="large-tables" id="players">
           <thead>
              <tr>
                 <th>Id</th>
                 <th>Name</th> 
                 <th>Team</th>
                 <th>Joined NBA</th>
              </tr>
           </thead>
           <tbody>
           {this.state.data.api.players.map((item, i) => {
              return (
              <tr key={i}>
                <td>{item.playerId}</td>
                <td><Link to={{
                  pathname: '/players/playerId/' + item.playerId,
                  state: {
                    data: item
                  }
                }}> {item.firstName} {item.lastName}</Link></td>
                <td>{this.state.teamsMappings[item.teamId]}</td>
                <td>{item.startNba}</td>
              </tr>
              )
           })}
           </tbody>
         </table>
       )*/
       
       return data;
    


  }
    
  render() {
    if(!this.state.isLoaded){
      return (
        <div>
            <h1>
              Loading players data ...
            </h1>
        </div>
      )
    }

    return (
      <div className="align-center">
          <h1>
            NBA Players
          </h1>
          
          <MDBDataTable
             striped
             bordered
             small
             data={this.state.data}
          />

          <Sidebar />
      </div>
    );
  }

}
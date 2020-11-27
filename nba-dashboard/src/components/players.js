import React, { Component } from 'react';
// import {Doughnut} from 'react-chartjs-2';
import {Link} from 'react-router-dom';
import Sidebar from './sidebar';



export default class Players extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: {},
    }
  }
  
  componentDidMount() {
    this.getAllPlayers()
      .then(res => this.setState({ 
        data: res
      }))
      .then(this.getTeamsMappings().then(res2 => this.setState({
        teamsMappings: res2,  isLoaded: true
      })))
      .catch(err => console.log(err));
  }
  

  getAllPlayers = async () => {
    // direct url: 'https://api-nba-v1.p.rapidapi.com/games/live';
    const response = await fetch('http://localhost:8000/players/league/standard', 
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
  
  load_data = () => {
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
       )

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
          

          {this.load_data(this.state.data)}
          <Sidebar />
      </div>
    );
  }

}
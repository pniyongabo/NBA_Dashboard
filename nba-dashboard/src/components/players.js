import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
import {Link} from 'react-router-dom';


export default class Players extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: {},
    }
  }
  
  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res, isLoaded: true}))
      .catch(err => console.log(err));
  }
  

  callBackendAPI = async () => {
    const response = await fetch('http://localhost:8000/players/league/standard');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };
  
  load_data = () => {
    return(
         <table id="players">
           <thead>
              <tr>
                 <th>Id</th>
                 <th>First Name</th> 
                 <th>Last Name</th>
                 <th>Team Id</th>
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
                }}> {item.firstName} </Link></td>
                <td>{item.lastName}</td>
                <td>{item.teamId}</td>
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
      <div className="center-align">
          <h1>
            NBA Players
          </h1>
          

          {this.load_data(this.state.data)}

      </div>
    );
  }

}
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './sidebar';
import Header from './header';

import './teams.css';

export default class Teams extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: {},
    }
  }
  

  componentDidMount(){

    const url = 'https://api-nba-v1.p.rapidapi.com/teams/league/standard';
    // const url = '/api/teams/league/standard';

    let loadResponse = async () => {
        await fetch(url, 
          {"method": "GET",
           "headers":
           {
            "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_API_KEY,
            }
          }).then(response=>response.json())
            .then(json=>{
            // console.log(json);
            this.setState({data: json, isLoaded: true})
          }).catch(err=>{
            console.log(err);
          })

    }

    loadResponse();
}


load_data = () => {
  return(

      <div className='container'>
        <div className='d-flex flex-wrap justify-content-around'>
        {this.state.data.api.teams.map((item, i) => {
           if (item.nbaFranchise === "1" && item.city !== "Home" && item.city !== "Away"){ // only dispaly NBA Teams
            return (
            <div key={i}>
              <Link to={{
                pathname: '/teams/teamId/' + item.teamId,
                state: {
                  data: item
                }
              }}
              className= 'team_link'
              > 
              <div className='team_choice '>
                <img className='img-fluid team_logo' src={item.logo} alt={(item.fullName)+' logo'} width={130} height='auto' />
                <div className='team_text'>
                {item.fullName}
                </div>
              </div>
               </Link>
              
            </div>
            )
          } else {
            return (null)
          }
        })}
        </div>



      </div>


     )

}
    
  render() {
    if(!this.state.isLoaded){
      return (
        <div>
            <h1>
              Loading teams data ...
            </h1>
        </div>
      )
    }

    return (
      <div className="align-center">
          <Header />
          <h1>
            NBA Teams
          </h1>
          
          {this.load_data(this.state.data)}

          <Sidebar />

      </div>
    );
  }

}

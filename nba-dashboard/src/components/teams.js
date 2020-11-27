import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './sidebar';
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

    // const url = 'https://api-nba-v1.p.rapidapi.com/teams/league/standard';
    const url = 'http://localhost:8000/teams/league/standard';


    // async function that gets teams list and header info from api
    let loadResponse = async () => {
        let response = await fetch(url, 
          {"method": "GET",
           "headers":
           {
            "x-rapidapi-host": process.env.REACT_APP_NONFREE_API_URL,
            "x-rapidapi-key": process.env.REACT_APP_API_KEY,
            }
          }).then(response=>response.json())
            .then(json=>{
            console.log(json);
            this.setState({data: json, isLoaded: true})
          }).catch(err=>{
            console.log(err);
          })

    }

    loadResponse();
}


load_data = () => {
  return(
      //  <table className="large-tables" id="teams">
      //    <thead>
      //       <tr>
      //          <th>Name</th> 
      //          <th>Abbr</th>
      //          <th>Division</th>
      //          <th>Conference</th>
      //       </tr>
      //    </thead>
      //    <tbody>
      //    {this.state.data.api.teams.map((item, i) => {
      //      if (item.nbaFranchise === "1" && item.city !== "Home" && item.city !== "Away"){ // only dispaly NBA Teams
      //       return (
      //       <tr key={i}>
      //         <td><Link to={{
      //           pathname: '/teams/teamId/' + item.teamId,
      //           state: {
      //             data: item
      //           }
      //         }}> {item.fullName} </Link></td>
      //         <td>{item.shortName}</td>
      //         <td>{item.leagues.standard.divName}</td>
      //         <td>{item.leagues.standard.confName}</td>
      //       </tr>
      //       )
      //    }
      //  })}
      //    </tbody>
      //  </table>
      //////////////////////////////////////////////////////////////////////

      <div className='container'>
        <div className='d-flex flex-wrap justify-content-around'>
        {this.state.data.api.teams.map((item, i) => {
           if (item.nbaFranchise === "1" && item.city !== "Home" && item.city !== "Away"){ // only dispaly NBA Teams
            return (
            <div>
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
          <h1>
            NBA Teams
          </h1>
          
          {this.load_data(this.state.data)}

          <Sidebar />

      </div>
    );
  }

}

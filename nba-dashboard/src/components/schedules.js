import React, { Component } from 'react';
import Sidebar from './sidebar';
import Header from './header';
import './schedules.css'

export default class Schedules extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: {},
    }
  }
  

  componentDidMount(){

    const url = 'https://api-nba-v1.p.rapidapi.com/games/league/standard/2019';
    //const url = '/api/games/league/standard/2019';

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
       <table className="large-tables table table-responsive" id="schedules">
         <thead>
            <tr>
               <th>Game</th>
               <th>Status</th>
               <th>Date</th>
               <th>Arena</th>
               <th>City</th>
            </tr>
         </thead>
         <tbody>
         {this.state.data.api.games.map((item, i) => {
          //  let curr_status;
          //  if(item.statusGame === 'Scheduled'){curr_status = <td style={{color: '#2048fa', fontWeight: 'bolder'}}>{item.statusGame}</td>}
          //  else{curr_status = <td style={{color: 'black'}}>{item.statusGame}</td>}

           const homeTeamShortName = item.hTeam.shortName;
           const awayTeamShortName = item.vTeam.shortName;
           const homeTeamScore = item.hTeam.score.points;
           const awayTeamScore = item.vTeam.score.points;

           var options = {
            timeZone: "America/Los_Angeles",
            year: 'numeric', month: 'short', day: 'numeric',
            hour: 'numeric', minute: 'numeric', timeZoneName: 'short'
            };
        
            var formatter = new Intl.DateTimeFormat([], options);
            
            // var UTCTime = "2017-09-03T02:00:00Z";
            var localTime = formatter.format(new Date(item.startTimeUTC));
            // var currentTime = formatter.format(new Date()); console.log(currentTime, localTime);

            // let temp_data = 
            // <div>
            //   <td>{awayTeamShortName} {awayTeamScore} - {homeTeamScore} {homeTeamShortName}</td>
            //   <td>{item.statusGame}</td>
            //   <td>{localTime}</td>
            //   <td>{item.arena}</td>
            //   <td>{item.city}</td>
            // </div>

            let curr_row;
            if(item.statusGame === 'Scheduled'){
              curr_row=
              <tr key={i} className='scheduled'>
                <td>{awayTeamShortName} {awayTeamScore} - {homeTeamScore} {homeTeamShortName}</td>
                <td>{item.statusGame}</td>
                <td>{localTime}</td>
                <td>{item.arena}</td>
                <td>{item.city}</td>
              </tr>
            }
            else{
              curr_row=
              <tr key={i} className='finished'>
                <td>{awayTeamShortName} {awayTeamScore} - {homeTeamScore} {homeTeamShortName}</td>
                <td>{item.statusGame}</td>
                <td>{localTime}</td>
                <td>{item.arena}</td>
                <td>{item.city}</td>
              </tr>}

            return (
              curr_row
            // <tr key={i}>
            //   <td>{awayTeamShortName} {awayTeamScore} - {homeTeamScore} {homeTeamShortName}</td>
            //   <td>{item.statusGame}</td>
            //   <td>{localTime}</td>
            //   <td>{item.arena}</td>
            //   <td>{item.city}</td>
            // </tr>
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
              Loading schedules and results ...
            </h1>
        </div>
      )
    }

    return (
      <div className="align-center">
          <Header />
          <h1>
            Schedules and Results
          </h1>
          <div class="row justify-content-center">
            <div class="col-auto" style={{maxWidth: '90%'}}>
              {this.load_data(this.state.data)}
            </div>
          </div>
          <Sidebar />
      </div>
    );
  }

}

import React, { Component } from 'react';
import GraphCreation from './graphCreation';
import Sidebar from './sidebar';
import Header from './header';

export default class Standing extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      teamsMappingsLoaded: false,
      standingsLoaded: false,
      standingsWest: {},
      standingsEast: {},
      teamsMappings: {}
    }
  }
  

  componentDidMount() {
    
    this.getStandings()
      .then(res1 => this.setState({ 
        standingsEast: res1.api.standings.filter((team) => team.conference.name === "east"),
        standingsWest: res1.api.standings.filter((team) => team.conference.name === "west"),
        standingsLoaded: true
      }))
      .then(this.getTeamsMappings()
        .then(res2 => this.setState({ 
          teamsMappings: res2,
          teamsMappingsLoaded: true,
        })))
      .catch(err => console.log(err));
    
  }


getStandings = async () => {
    // direct url: 'https://api-nba-v1.p.rapidapi.com/standings/league/standard/2019';
    const response = await fetch('http://localhost:8000/standings/league/standard/2019', 
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

getTeamsMappings = async () => {
    // direct url: 'https://api-nba-v1.p.rapidapi.com/games/live';
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


load_data = (standings) => {
 
  
  const sortedStandings = standings.sort((a, b) => (parseInt(a.conference.rank) > parseInt(b.conference.rank)) ? 1 : -1);
  console.log(sortedStandings);
  console.log(this.props.all_data);

  let comp_data = sortedStandings;
  comp_data.forEach(new_stats => {
    let found_teamid = this.props.all_data.team_stats.find(e => {
      if(e.teamId === new_stats.teamId){return true}
      return false;
    })
    if(found_teamid !== undefined){
      // old_stats['standings'] = found_teamid;
      for(const property in found_teamid) {
        new_stats[property] = found_teamid[property];
      }
    }
  })
  console.log('final', comp_data);

  
  return(
      <GraphCreation
      all_team_data={comp_data}
      type_of_graph={"singlebar"}
      stat_to_graph={"winPercentage"}
      />
     )

}
    
  render() {
    if(!this.state.teamsMappingsLoaded || !this.state.standingsLoaded){
      return (
        <div>
            <h1>
              Loading Live Games Data ...
            </h1>
        </div>
      )
    }

    return (
      <div className="align-center">
          <Header />
          <h1>
            Standings
          </h1>
          
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                <h3>East Conference Standings</h3>
                {this.load_data(this.state.standingsEast)}
              </div>
              <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                <h3>West Conference Standings</h3>
                {this.load_data(this.state.standingsWest)}
              </div>
            </div>
          </div>
          <Sidebar />
      </div>
    );
  }

}

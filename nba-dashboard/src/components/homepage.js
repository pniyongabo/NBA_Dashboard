import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
import { Tab, Tabs } from 'react-bootstrap';

import { getMainColor, getFullName, getSecondaryColor } from 'nba-color';
// import { LineChart, Line } from 'recharts';


// import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList, Label
} from 'recharts';
import GraphCreation from './graphCreation';

require("dotenv").config();




const renderCustomizedLabel = (props) => {
  const {
    x, y, width, height, value,
  } = props;
  const radius = 10;

  return (
    <img src={value}  />
    // <g>
    //   <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
    //   <text x={x + width / 2} y={y - radius} fill="#FF2243" textAnchor="middle" dominantBaseline="middle">
    //     {value}
    //   </text> 
    //   <img src={value}  />
    // </g>
  );
};




const getCorrectColor = (team_shortName) => {
  return getMainColor(team_shortName).hex;
}






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
          // let team_a = a.Team;
          // let team_b = b.Team;
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
          <h1>
            NBA Dashboard
          </h1>


          <Tabs defaultActiveKey="ppg" id="uncontrolled-tab-example">

            <Tab eventKey="ppg" title="Points Per Game">
          
            {/* </Tab>
            </Tabs> */}

            <BarChart
              width={1700}
              height={400}
              data={this.state.data.team_stats}

            >
              {/* <XAxis type="category" dataKey={"city"} tickLine={false} /> */}
              <XAxis type="category" interval={0} dataKey={"fullName"} tickLine={false} hide/>
              <YAxis domain={[dataMin => (Math.floor(dataMin)), dataMax => (Math.ceil(dataMax))]} />
              {/* <YAxis domain={['dataMin', 'dataMax']} /> */}
              <Tooltip />
              <Legend />
              <Bar dataKey="PPG" >
              {
                this.state.data.team_stats.map((entry, index) => {

                  //sets the background color of each bar to the main team color, and secondary color to font and border color
                  return <Cell fill={getMainColor(entry.shortName).hex} stroke={getSecondaryColor(entry.shortName).hex}/>;
                })
              }
              
                <LabelList dataKey="shortName" />
                
              </Bar>

            </BarChart>

            </Tab>
            <Tab eventKey="fg" title="Field Goals">
              <GraphCreation all_team_data={this.state.data}/>
            </Tab>
            <Tab eventKey="3p" title="Three Pointers">

            </Tab>
            <Tab eventKey="ft" title="Free Throws">

            </Tab>
            
          </Tabs>
          

      </div>
    );
  }
}
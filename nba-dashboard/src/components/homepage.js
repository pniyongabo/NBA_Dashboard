import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
// import { LineChart, Line } from 'recharts';


// import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

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
    // let loadResponse = async () => {

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

    fetch("/team_stats")
      .then((res) => res.json())
      .then((team_data) => {

        function compare_team_names(a, b){
          let team_a = a.Team;
          let team_b = b.Team;
          let comparison = 0;
          if(a.Team > b.Team){
            comparison = 1;
          } else if(a.Team < b.Team) {
            comparison = -1;
          }
          return comparison;
        }

        team_data.team_stats.sort(compare_team_names);

        this.setState({ isLoaded: true, data: team_data })
        console.log(this.state.data);




    })
      .catch((err) => console.log("Request failed", err));


}

  load_data = () => {

    return Object.keys(this.state.data.api.teams).map((obj, i) => {
      if(this.state.data.api.teams[obj].allStar === "0" && this.state.data.api.teams[obj].leagues.standard.divName !== ""){
        return (
            <div key={obj}>
                <p>id is: {this.state.data.api.teams[obj].teamId}</p>
                <p>name is: {this.state.data.api.teams[obj].fullName}</p>
            </div>
        )
      }
    })

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
          {/* <LineChart width={500} height={500} data={this.state.data.team_stats}>
            <Line type="monotone" dataKey="PPG" stroke="#8884d8" />
          </LineChart> */}

          <BarChart
            width={700}
            height={300}
            data={this.state.data.team_stats}
          >
            <XAxis dataKey={"Team"} />
            <YAxis domain={[dataMin => (Math.floor(dataMin)), dataMax => (Math.ceil(dataMax))]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="PPG" fill="#8884d8" />

          </BarChart>

          {/* {this.load_data(this.state.data)} */}

      </div>
    );
  }
}
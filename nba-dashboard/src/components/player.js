import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
import {Link} from 'react-router-dom';


export default class Player extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    }
  }
  
  componentDidMount() {
    console.log(this.props);
    //console.log(this.props.location.state);
    //console.log(this.props.state.location);
  }
  

  
  load_data = () => {
    return(
         <h1>it is working huzzah</h1>
       )

  }
    
  render() {
    if(!this.state.isLoaded){
      return (
        <div>
            <h1>
              Loading player data ...
            </h1>
        </div>
      )
    }

    return (
      <div id="title">
          <h1>
            NBA Player Details
          </h1>
          

          {this.load_data(this.state.data)}

      </div>
    );
  }

}
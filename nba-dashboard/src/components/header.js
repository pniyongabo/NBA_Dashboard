import React, { Component } from 'react';
import './header.css';

import ball_logo from '../assets/basketball_logo_t.png';

export default class Sidebar extends Component {


    render() {
        return(
          <div className="title">
            <div className='jumbotron'>
                <img className="d-inline-block img-fluid logo" src={ball_logo} alt='logo' height='auto' width='13%'/>
                <h1 className='d-inline-block display-2 title_text'>NBA DASHBOARD</h1>
            </div>
          </div>

        )
    }

}
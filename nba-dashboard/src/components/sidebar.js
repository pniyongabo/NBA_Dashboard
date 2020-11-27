import React, { Component } from 'react';
import './sidebar.css';

export default class Sidebar extends Component {



  
 
    render() {
        return(
            <div class="sidebar ">
                
                <div class='row'>
                    <div class='col-2 menu_icon'>☰</div>
                </div>    
            
                <div class='row'>
                    <div class='col-2'></div>
                    <div class='col-3'>
                        <a href="/teams">Teams</a>
                    </div>
                </div>
                <div class='row'>
                <div class='col-2'></div>
                    <div class='col-3'>
                        <a href="/players">Players</a>
                    </div>
                </div>
                <div class='row'>
                <div class='col-2'></div>
                    <div class='col-3'>
                        <a href="/standings">Standings</a>
                    </div>
                </div>
                <div class='row'>
                <div class='col-2'></div>
                    <div class='col-3'>
                        <a href="/schedules">Schedules</a>
                    </div>
                </div>


            </div>

        )
    }

}
import React, { Component } from 'react';
import './sidebar.css';

export default class Sidebar extends Component {


    render() {
        return(
            <div className="sidebar ">
                
                <div className='row'>
                    <div className='col-2 menu_icon'>☰</div>
                </div>

                <div className='row'>
                    <div className='col-2'></div>
                    <div className='col-3'>
                        <a href="/">Home</a>
                    </div>
                </div>
            
                <div className='row'>
                    <div className='col-2'></div>
                    <div className='col-3'>
                        <a href="/teams">Teams</a>
                    </div>
                </div>

                <div className='row'>
                <div className='col-2'></div>
                    <div className='col-3'>
                        <a href="/players">Players</a>
                    </div>
                </div>

                <div className='row'>
                <div className='col-2'></div>
                    <div className='col-3'>
                        <a href="/standings">Standings</a>
                    </div>
                </div>

                <div className='row'>
                <div className='col-2'></div>
                    <div className='col-3'>
                        <a href="/schedules">Schedules</a>
                    </div>
                </div>


            </div>

        )
    }

}
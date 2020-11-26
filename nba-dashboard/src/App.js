import logo from './logo.svg';
import './App.css';
import Homepage from './components/homepage';
import Teams from './components/teams';
import Players from './components/players';
import Player from './components/player';
import Live from './components/live';
import Standings from './components/standings';
import Schedules from './components/schedules';
import Team from './components/team';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';


function App() {
  return (
    <Router>
      {/* <li>
        <Link to="/about">About</Link>
      </li> */}
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => <Homepage /> }
        />
        <Route
          path="/teams"
          exact
          render={(props) => <Teams /> }
        />
        <Route
          path="/teams/teamId/:id"
          exact
          render={(props) => (
            <Team {...props} />
          )}
        />
        <Route
          path="/players"
          exact
          render={(props) => <Players /> }
        />
        <Route
          path="/players/playerId/:id"
          exact
          render={(props) => (
            <Player {...props} />
          )}
        />
        <Route
          path="/live"
          exact
          render={(props) => <Live /> }
        />
        <Route
          path="/standings"
          exact
          render={(props) => <Standings /> }
        />
        <Route
          path="/schedules"
          exact
          render={(props) => <Schedules /> }
        />

        <Route render={()=> <Redirect to="/" />} />
      </Switch>
    </Router>  
  );
}

export default App;

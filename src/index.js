import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import {BrowserRouter as Router} from "react-router-dom";
import { WorkoutStateProvider } from './Workout'

ReactDOM.render(
    <Router>
      <WorkoutStateProvider>
        {workout => (<App workout={workout} />)}
      </WorkoutStateProvider>
    </Router>
  , document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import App from './App/App';
import { WorkoutStateProvider } from './Workout';
import './index.css';

ReactDOM.render(
    <Router>
      <WorkoutStateProvider>
        {workout => (<App workout={workout} />)}
      </WorkoutStateProvider>
    </Router>
  , document.getElementById('root')
);

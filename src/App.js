import React, { Component } from 'react';
import css from './App.module.scss';
import { Switch, Route, withRouter } from 'react-router-dom'
import Dashboard from './Dashboard';
import EntertainmentSelect from './EntertainmentSelect';
import EntertainmentView from './EntertainmentView';
import Tabs from './Tabs';
import routes from './routes';
import Workout from './Workout';

class App extends Component {
  state = {
    workout: {}
  }

  componentDidMount() {
    this.workout = new Workout({
      maxDurationSeconds: 60*60/9/10,
      onTick: (workout) => {
        this.setState({ workout })
      }
    });
    this.workout.start();
  }

  render() {
    return (
      <div className={css.app}>
        <div className={css.innerLayout}>
          <div className={css.content}>
            <Switch>
              <Route exact path={routes.dashboard.path}>
                {() => {
                  return (
                    <Dashboard workout={this.state.workout}/>
                  )
                }}
              </Route>
              <Route path={routes.select.path} component={EntertainmentSelect}/>
              <Route path={routes.view.path} component={EntertainmentView}/>
            </Switch>
          </div>
          <div className={css.tabs}>
            <Tabs />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);

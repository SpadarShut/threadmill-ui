import React, { Component } from 'react';
import css from './App.module.scss';
import { Switch, Route, withRouter } from 'react-router-dom';
import UIShell from './UIShell/UIShell';
import Dashboard from './Dashboard/Dashboard';
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
      maxDurationSeconds: 30 * 60,
      onTick: workout => {
        this.setState({ workout })
      }
    });
    this.workout.start();
  }

  render() {
    return (
      <UIShell
        width={1024}
        height={600}
      >
        <div className={css.app}>
          <div className={css.content}>
            <Switch>
              <Route exact path={routes.dashboard.path}>
                {() => (
                  <Dashboard {...this.state.workout} />
                )}
              </Route>
              <Route path={routes.select.path} component={EntertainmentSelect}/>
              <Route path={routes.view.path} component={EntertainmentView}/>
            </Switch>
          </div>
          <div className={css.tabs}>
            <Tabs
              size="large"
              fullWidth
            />
          </div>
        </div>
      </UIShell>
    );
  }
}

export default withRouter(App);

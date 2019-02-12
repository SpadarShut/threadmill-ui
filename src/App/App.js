import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import UIShell from '../UIShell/UIShell';
import Dashboard from '../Dashboard/Dashboard';
import { VideoScreen, viewModes } from '../Video/';
import Tabs from '../Tabs';
import routes from '../routes';
import css from './App.module.css';

class App extends Component {
  componentDidMount(props) {
    this.props.workout.start();
  }

  render() {
    return (
      <UIShell
        width={1024}
        height={600}
        className={css.app}
      >
        <div className={css.content}>
          <Route
            exact
            path={routes.dashboard.path}
            render={() => (
              <Dashboard />
            )}
          />
          <Route path={routes.select.path}>
            {({match}) => (
              <VideoScreen
                viewMode={
                  !match
                    ? viewModes.HIDDEN
                    : match.isExact ? viewModes.SELECT : viewModes.VIEW
                }
              />
            )}
          </Route>
        </div>
        <div className={css.tabs}>
          <Tabs
            size="large"
            fullWidth
          />
        </div>
      </UIShell>
    );
  }
}

export default withRouter(App);

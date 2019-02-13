import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import UIShell from '../UIShell/UIShell';
import Dashboard from '../Dashboard/Dashboard';
import {VideoScreen, viewModes} from '../Video/';
import Tabs from '../Tabs';
import routes from '../routes';
import css from './App.module.css';

const LOCATION_STORAGE_KEY = 'lastLocation';
class App extends Component {
  componentDidMount() {
    this.syncLocation();
    this.props.workout.start();
  }
  componentWillUnmount() {
    window.removeEventListener('storage', this.storageListener);
    this.unlistenHistoryChange();
  }

  syncLocation = () => {
    const { history } = this.props;
    const savedLocation = localStorage.getItem(LOCATION_STORAGE_KEY);
    if (savedLocation) {
      history.replace(savedLocation);
    }
    window.addEventListener('storage', this.storageListener);
    this.unlistenHistoryChange = history.listen(this.navigateListener)
  }

  navigateListener = (location) => {
    localStorage.setItem(LOCATION_STORAGE_KEY, location.pathname)
  }

  storageListener = (e) => {
    if (e.key === LOCATION_STORAGE_KEY) {
      this.props.history.push(e.newValue);
    }
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
        <Tabs className={css.tabs} />
      </UIShell>
    );
  }
}

export default withRouter(App);

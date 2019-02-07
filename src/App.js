import React, { Component } from 'react';
import css from './App.module.scss';
import { Switch, BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import Dashboard from './Dashboard';
import EntertainmentSelect from './EntertainmentSelect';
import EntertainmentView from './EntertainmentView';
import Tabs from './Tabs';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className={css.app}>
          <div className={css.innerLayout}>
            <div className={css.content}>
              <Switch>
                <Route exact path={routes.dashboard.path} component={Dashboard}/>
                <Route path={routes.select.path} component={EntertainmentSelect}/>
                <Route path={routes.view.path} component={EntertainmentView}/>
              </Switch>
            </div>
            <div className={css.tabs}>
              <Tabs />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default withRouter(App);

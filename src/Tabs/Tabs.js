import React, { PureComponent } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import routes from '../routes'
import css from './Tabs.module.scss'

class Tabs extends PureComponent {
  render() {
    return (
      <ul className={css.tabs}>
        {
          Object.keys(routes).map(key => {
            const route = routes[key];
            return (
              <li
                className={css.li}
                key={key}
              >
                <NavLink
                  exact
                  to={route.path}
                  className={css.button}
                  activeClassName={css.active}
                >
                  {route.label}
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    );
  }
}

export default withRouter(Tabs);

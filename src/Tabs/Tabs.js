import React, { PureComponent } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import cn from 'classnames'
import routes from '../routes';
import css from './Tabs.module.css';

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
                  className={cn('button button--large', css.button)}
                  activeClassName={cn('button--branded', css.active)}
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

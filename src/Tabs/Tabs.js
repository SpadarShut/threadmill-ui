import React from 'react';
import propTypes from 'prop-types';
import {NavLink, withRouter} from 'react-router-dom';
import cn from 'classnames';
import routes from '../routes';
import css from './Tabs.module.css';

function Tabs(props) {
  return (
    <ul className={cn(css.tabs, props.className)}>
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

Tabs.propTypes = {
  className: propTypes.string,
}

export default withRouter(Tabs);

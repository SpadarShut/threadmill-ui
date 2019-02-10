import React, { PureComponent } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import routes from '../routes';
import css from './Tabs.module.css';
import propTypes from 'prop-types';
import cn from 'classnames'

class Tabs extends PureComponent {
  static propTypes = {
    fullWidth: propTypes.bool,
    size: propTypes.oneOf(['small', 'large'])
  }
  static defaultProps = {
    fullWidth: false,
    size: 'sm',
  }
  render() {
    const rootClass = cn(
      css.tabs,
      css[`size_${this.props.size}`],
      {[css.fullWidth]: this.props.fullWidth}
    );

    return (
      <ul className={rootClass}>
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

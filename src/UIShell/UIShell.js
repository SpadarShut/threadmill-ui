import React, {PureComponent} from 'react';
import {contain} from 'intrinsic-scale';
import propTypes from 'prop-types';
import css from './UIShell.module.css';
import cn from 'classnames';

const UIShell = class UIShell extends PureComponent {
  static propTypes = {
    width: propTypes.number,
    height: propTypes.number,
    children: propTypes.node,
    className: propTypes.string,
  }
  constructor(props) {
    super(props);
    this.state = {
      width: props.width,
      height: props.height,
    }
  }
  componentWillMount() {
    this.calculateShellSize();
    window.addEventListener('resize', this.calculateShellSize)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.calculateShellSize)
  }
  calculateShellSize = () => {
    const { width, height } = contain(
      window.innerWidth,
      window.innerHeight,
      this.props.width,
      this.props.height
    );
    this.setState({ width, height })
  }

  getRemSize() {
    const { width, height } = this.state;
    const diagonal = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2))
    return diagonal * 0.02;
  }

  render() {
    const { width, height } = this.state;
    const { children, className } = this.props;
    return (
      <div
        className={cn(css.uishell, className)}
        style={{ width, height }}
      >
        {children}
        <style>
          {`:root { font-size: ${this.getRemSize()}px; }`}
        </style>
      </div>
    );
  }
}

export default UIShell;

import React from 'react';
import cn from 'classnames';
import css from './Switch.module.css';

const Switch = ({options, value, onChange}) => {
  return (
    <div className={css.switch}>
      {
        options.map(option => {
          const active = value === option.value;
          return (
          <button
            disabled={active}
            key={option.value}
            className={cn('button', {'button--branded': active})}
            children={option.label}
            onClick={onChange}
          />
        )})
      }
    </div>
  )
}

export default Switch

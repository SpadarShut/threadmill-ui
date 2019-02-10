import React from 'react';
import css from './DashboardCell.module.css';

const DashboardCell = ({value, label}) => {
  return (
    <div className={css.cell}>
      <div className={css.value}>{value}</div>
      <div className={css.label}>{label}</div>
    </div>
  )
}

export default DashboardCell

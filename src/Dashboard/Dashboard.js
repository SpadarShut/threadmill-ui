import React, {PureComponent} from 'react';
import propTypes from 'prop-types';
import { formatTime, formatSpeed, formatDistance, formatPace } from '../utils';
import { WorkoutStateConsumer } from '../Workout';
import Switch from '../Switch/Switch';
import DashboardCell from './DashboardCell';
import css from './Dashboard.module.css';

const measurements = {
  METRIC: 0,
  IMPERIAL: 1
}

class Dashboard extends PureComponent {
  static propTypes = {
    duration: propTypes.number,
    duration_countdown: propTypes.number,
    calories: propTypes.number,
    speed: propTypes.number,
    grade: propTypes.number,
    heart_rate: propTypes.number,
    pace: propTypes.number,
    distance: propTypes.number,
  }
  static defaultProps = {
    duration: 0,
    duration_countdown: 0,
    calories: 0,
    speed: 0,
    grade: 0,
    heart_rate: 0,
    pace: 0,
    distance: 0,
  }
  state = {
    measurements: measurements.METRIC
  }

  toggleMeasurements = () => {
    this.setState({
      measurements: this.state.measurements === measurements.METRIC ? measurements.IMPERIAL : measurements.METRIC
    })
  }

  getSwitchOptions = () => {
    return [
      {label: 'Metric', value: measurements.METRIC},
      {label: 'Imperial', value: measurements.IMPERIAL},
    ]
  }

  render() {
    let imperial = this.state.measurements === measurements.IMPERIAL;

    return (
      <WorkoutStateConsumer>
        {({
            duration,
            duration_countdown,
            calories,
            speed,
            grade,
            heart_rate,
            pace,
            distance
        }) => (
          <div className={css.dashboard}>
            <div className={css.header}>
              <Switch
                value={this.state.measurements}
                options={this.getSwitchOptions()}
                onChange={this.toggleMeasurements}
              />
            </div>
            <div className={css.grid}>
              <DashboardCell
                value={formatTime(duration/1000, 'hh:mm:ss')}
                label="Duration"
              />
              <DashboardCell
                value={formatTime(duration_countdown/1000, 'hh:mm:ss')}
                label="Time left"
              />
              <DashboardCell
                value={Math.floor(calories)}
                label="Calories"
              />
              <DashboardCell
                value={`${Math.floor(heart_rate)} bpm`}
                label="Heart rate"
              />
              <DashboardCell
                value={formatSpeed(speed, 1, imperial)}
                label="Speed"
              />
              <DashboardCell
                value={`${grade.toFixed(1)} %`}
                label="Grade"
              />
              <DashboardCell
                value={formatPace(pace, 'mm:ss', imperial)}
                label="Pace"
              />
              <DashboardCell
                value={formatDistance(distance, 2, imperial)}
                label="Distance"
              />
            </div>
          </div>
        )}
      </WorkoutStateConsumer>
    );
  }
}

export default Dashboard;

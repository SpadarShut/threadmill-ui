import React, { createContext, PureComponent } from 'react';
import {Workout} from "./index"

const {Provider, Consumer} = createContext();

class WorkoutStateProvider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {}
    this.workout = new Workout({
      maxDurationSeconds: 30 * 60,
      onTick: workout => {
        this.setState(workout)
      }
    })
  }

  render() {
    return (
      <Provider value={this.state}>
        {this.props.children(this.workout)}
      </Provider>
    )
  }
}

export {
  WorkoutStateProvider,
  Consumer as WorkoutStateConsumer,
}
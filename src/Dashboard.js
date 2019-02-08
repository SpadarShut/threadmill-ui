import React, {PureComponent} from 'react'

class Dashboard extends PureComponent {
  render() {
    let {workout} = this.props
    return (
      <ul>
        {
          Object.keys(workout).map((key) => {
            return (
              <li key={key}>
                <strong>{key}:</strong> {workout[key]}
              </li>
            )
          })
        }
      </ul>
    );
  }
}

export default Dashboard;

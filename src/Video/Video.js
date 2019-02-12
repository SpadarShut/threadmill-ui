import React, {Component} from 'react';
import mediaData from '../mediaSources';

class Video extends Component {
  constructor(props) {
    super(props);
    const savedVideo = localStorage.getItem('videoSource');
    this.state = {
      sources: mediaData,
      videoSource: savedVideo || '',
      setSelected: (videoSource) => {
        this.setState({ videoSource }, () => {
          localStorage.setItem('videoSource', videoSource);
        })
      },
    }
  }
  render() {
    return (
      this.props.children(this.state)
    )
  }
}

export default Video
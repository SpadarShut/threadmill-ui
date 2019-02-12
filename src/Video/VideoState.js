import React, {PureComponent} from 'react';
import mediaData from '../mediaSources';

const VIDEO_STORAGE_KEY = 'videoSource';

class VideoState extends PureComponent {
  constructor(props) {
    super(props);
    const savedVideo = localStorage.getItem(VIDEO_STORAGE_KEY);
    this.state = {
      sources: mediaData,
      videoSource: savedVideo || '',
      setSelected: this.setSelected,
    }
    window.addEventListener('storage', this.storageListener);
  }

  componentWillUnmount() {
    window.removeEventListener('storage', this.storageListener);
  }

  storageListener = (e) => {
    if (e.key === VIDEO_STORAGE_KEY) {
      this.setSelected(e.newValue);
    }
  }

  setSelected = (videoSource) => {
    this.setState({ videoSource }, () => {
      localStorage.setItem(VIDEO_STORAGE_KEY, videoSource);
    })
  }

  render() {
    return this.props.children(this.state);
  }
}

export default VideoState
import React, { PureComponent, createRef } from 'react';
import propTypes from 'prop-types';
import cn from 'classnames';
import { withRouter } from 'react-router-dom';
import routes from '../routes';
import VideoState from './VideoState';
import viewModes from './viewModes';
import VideoSelect from './VideoSelect';
import css from './VideoScreen.module.css';

class VideoScreen extends PureComponent {
  static propTypes = {
    viewMode: propTypes.oneOf(Object.values(viewModes))
  }
  constructor(props) {
    super(props);
    this.video = createRef();
  }
  playVideo = (e) => {
    e.preventDefault();
    this.video.current.play();
    this.props.history.push(routes.view.path);
  }
  onVideoClick = (e) => {
    const video = this.video.current
    if (this.props.viewMode === viewModes.VIEW) {
      video.paused ? video.play() : video.pause()
    } else {
      this.props.history.push(routes.view.path);
    }
  }

  render() {
    const { viewMode } = this.props;

    return (
      <VideoState>
        {({ videoSource, setSelected, sources }) => (
          <div className={cn(css.screen, css[`mode_${viewMode}`])}>
            <VideoSelect
              className={cn(css.header, {[css.headerVisible]: viewMode === viewModes.SELECT})}
              onSubmit={this.playVideo}
              value={videoSource}
              onChange={setSelected}
              values={sources}
            />
            <div className={css.preview}>
              <video
                ref={this.video}
                className={cn(css.video, css[`video_mode-${viewMode}`])}
                src={videoSource}
                controls={false}
                loop
                onClick={this.onVideoClick}
              />
            </div>
          </div>
        )}
      </VideoState>
    );
  }
}

export default withRouter(VideoScreen);

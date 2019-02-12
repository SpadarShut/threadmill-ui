import React, { PureComponent, createRef } from 'react';
import propTypes from 'prop-types';
import cn from 'classnames';
import { Link } from 'react-router-dom';
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
  }
  onVideoClick = (e) => {
    const video = this.video.current
    if (this.props.viewMode === viewModes.VIEW) {
      video.paused ? video.play() : video.pause()
    }
  }

  render() {
    const { viewMode } = this.props;

    return (
      <VideoState>
        {({ videoSource, setSelected, sources }) => (
          <div className={cn(css.screen, css[`mode_${viewMode}`])}>
            {
              viewMode === viewModes.SELECT &&
                <VideoSelect
                  className={css.header}
                  onSubmit={this.playVideo}
                  value={videoSource}
                  onChange={setSelected}
                  values={sources}
                />
            }
            <div className={css.preview}>
              <Link
                to={routes.view.path}
                className={cn(css.videoWrapper, {[css.videoWrapper_viewMode]: viewMode === viewModes.VIEW})}
              >
                <video
                  ref={this.video}
                  className={css.video}
                  src={videoSource}
                  controls={false}
                  loop
                  onClick={this.onVideoClick}
                />
              </Link>
            </div>
          </div>
        )}
      </VideoState>
    );
  }
}

export default VideoScreen;

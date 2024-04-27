// VideoPlayer.js
import React from 'react';
import YouTube from 'react-youtube';
import './Videoplayer.css'; // Import CSS file for styling

class VideoPlayer extends React.Component {
  render() {
    const { videoId, width, height } = this.props;
    const opts = {
      width: '500', // Default width if not provided
      height: '300', // Default height if not provided
      playerVars: {
        autoplay: 0,
      },
    };

    return (
      <div className="video-wrapper">
        <YouTube videoId={videoId} opts={opts} className="react-youtube" />
      </div>
    );
  }
}

export default VideoPlayer;

import React from 'react';
import SearchResultNav from '../SearchResultNav';
import { Link } from 'react-router';

const VideoComponent = ({ video }) => {
  return (
    <>
      <div className="video-component">
        <div className="video-component-nav">
          <Link
            to={`https://youtu.be/${video.videoLinkId}`}
            className="text-deco"
          >
            <p className="video-component-titleLink">{video.titleLink}</p>
            <p className="video-component-heading">
              {video.heading.slice(0, 52)}
              {video.heading.length > 52 ? '...' : null}
            </p>
          </Link>
        </div>
        <div className="video-component-body">
          <Link to={`https://youtu.be/${video.videoLinkId}`}>
            <div className="video-preview">
              <img
                src={`https://img.youtube.com/vi/${video.videoLinkId}/maxresdefault.jpg`}
                alt="Thumbnail"
              ></img>

              <div className="play-button-circle">
                <i class="ri-play-large-fill play-button"></i>
              </div>
              <div className="time-box">
                <p>{video.time}</p>
              </div>
            </div>
          </Link>
          <div className="video-content-para">
            <p className="video-content-paraline1">
              {video.description.slice(0, 140)}...
            </p>
            <p className="video-content-paraline2">{video.channel}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoComponent;

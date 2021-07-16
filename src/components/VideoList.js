import React from "react";
import VideoItem from "./VideoItem";

// reference prop name through destructuring using {}
const VideoList = ({ videos, onVideoSelect }) => {
  /* for each video in the video array, render a VideoItem component */
  const renderList = videos.map(video => {
    
    return <VideoItem video={video} onVideoSelect={onVideoSelect} key={video.id.videoId}/>;
  });

  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default VideoList;

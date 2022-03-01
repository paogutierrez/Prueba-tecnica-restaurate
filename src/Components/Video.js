import React from "react";
import '../styles/videoStyles.css';

const Video = () => {
  return (
    <div>
      <video className="video" src="https://res.cloudinary.com/do2ijjhfn/video/upload/v1645923342/Shots_of_Different_Food_tb46ib.mp4"  controls="controls" autoplay="autoplay" loop="loop" width="100%" height="400"></video> 
    </div>
  );
};

export default Video;

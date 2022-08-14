import React from "react";
import "../Styles/view-video.css";
import { Navbar } from '../componets/Navbar'
import myVideo from "../assets/myVideo.mp4";
const ViewVideo = () => {
  return (
    <>
    <Navbar/>
    <div className="view-video">
      <video width="720" height="400" controls autoPlay="true">
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </>
  );
};

export default ViewVideo;

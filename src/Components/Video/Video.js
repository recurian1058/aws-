import React, { Component } from "react";
import "./Video.scss";

class Video extends Component {
  render() {
    const { src, description } = this.props.videos;
    return (
      <div className="Video">
        <div className="videoContainer">
          <iframe title="mainVideo" src={src} allowFullScreen="true" />
          <div className="description">
            <div className="descriptionHeader"></div>
            <div className="descriptionMain">
              {description.split("\n").map((el) => (
                <div>{el}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Video;

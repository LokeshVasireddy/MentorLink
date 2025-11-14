import React from "react";
import "../index.css";
const MentorCard = ({ mentor }) => {
  return (
    <div className="recommendation-card">
      <div className="mentor-avatar" style={{backgroundImage: `url(${mentor.avatar})`}}></div>
      <p className="mentor-name">{mentor.name}</p>
      <p className="mentor-specialty">{mentor.specialty}</p>
      <button className="connect-button">Connect</button>
    </div>
  );
};

export default MentorCard;
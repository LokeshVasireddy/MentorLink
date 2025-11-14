import React from "react";
import "../index.css";
const SessionCard = ({ mentor, time }) => {
  return (
    <div className="session-item">
      <div className="mentor-avatar" style={{backgroundImage: `url(${mentor.avatar})`}}></div>
      <div className="session-details">
        <p className="mentor-name">{mentor.name}</p>
        <p className="session-time">{time}</p>
      </div>
      <button className="join-button">Join</button>
    </div>
  );
};

export default SessionCard;
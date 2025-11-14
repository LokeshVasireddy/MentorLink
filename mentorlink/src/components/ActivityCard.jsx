import React from "react";
import "../index.css";
const ActivityCard = ({ activity }) => {
  return (
    <div className="activity-item">
      <div className="activity-avatar" style={{backgroundImage: `url(${activity.avatar})`}}></div>
      <div>
        <p className="activity-description">{activity.description}</p>
        <p className="activity-time">{activity.time}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
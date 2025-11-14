import React from "react";
import "../index.css";


const Sidebar = () => {
  return (
    <aside>
      <nav>
        <a className="dashboard-link" href="#">Dashboard</a>
        <div className="nav-links">
          <a className="nav-link active" href="#">Current Mentorships</a>
          <a className="nav-link" href="#">Mailbox</a>
          <a className="nav-link" href="#">AI Roadmaps</a>
          <a className="nav-link" href="#">Find Mentors</a>
          <a className="nav-link" href="#">Resources</a>
        </div>
        <div className="settings-link-container">
          <a className="nav-link" href="#">Settings</a>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
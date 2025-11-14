import React from "react";
import "../index.css";

const Header = ({ user }) => {
  return (
    <header>
      <div className="logo-container">
        <div className="logo">
          <span>MentorLink</span>
        </div>
      </div>
      <div className="header-actions">
        <input placeholder="Search" />
        <div className="profile-picture" style={{backgroundImage: `url(${user.avatar})`}}></div>
      </div>
    </header>
  );
};

export default Header;
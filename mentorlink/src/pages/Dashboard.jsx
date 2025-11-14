import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import SessionCard from "../components/SessionCard";
import MentorCard from "../components/MentorCard";
import ActivityCard from "../components/ActivityCard";
import "../styles/Dashboard.css";
import "../index.css";

const Dashboard = () => {
  const user = { name: "Sarah", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCm..." };

  // dummy data
  const stats = [
    { title: "Mentors Connected", value: 12 },
    { title: "Sessions Scheduled", value: 25 },
    { title: "Mentorships Concluded", value: 3 }
  ];

  const sessions = [
    { mentor: { name: "Ethan Carter", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBV..." }, time: "July 15, 2024 · 2:00 PM" }
  ];

  const mentors = [
    { name: "Liam Harper", specialty: "Software Engineering", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPvK..." },
    { name: "Olivia Bennett", specialty: "Product Management", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBABK..." },
    { name: "Noah Foster", specialty: "Data Science", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpTbp..." }
  ];

  const activities = [
    { description: "Session with Liam Harper completed", time: "July 10, 2024", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDM7nDP..." },
    { description: "New message from Olivia Bennett", time: "July 8, 2024", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlpwB6..." }
  ];

  return (
    <div className="design-root">
      <Header user={user} />
      <div className="main-content">
        <Sidebar />
        <main>
          <div className="welcome-header">
            <h1>Welcome back, {user.name}</h1>
          </div>
          <div className="stats-grid">
            {stats.map((stat, idx) => <StatCard key={idx} {...stat} />)}
          </div>
          <div className="main-grid">
            <div className="sessions-container">
              <h2>Upcoming Sessions</h2>
              {sessions.map((s, idx) => <SessionCard key={idx} {...s} />)}
              <h2>Mentor Recommendations</h2>
              <div className="recommendations-grid">
                {mentors.map((m, idx) => <MentorCard key={idx} mentor={m} />)}
              </div>
            </div>
            <div className="activity-container">
              <h2>Recent Activity</h2>
              <div className="activity-card">
                {activities.map((a, idx) => <ActivityCard key={idx} activity={a} />)}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
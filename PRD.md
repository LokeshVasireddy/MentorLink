# MentorLink: Product Requirements Document (PRD)

### TL;DR

The MentorLink is a web-based networking and mentorship ecosystem designed for students across multiple colleges. It enables juniors to connect with seniors for guidance, mentorship, and collaboration through structured workflows, smart matching, and features—addressing the limitations of generic chat apps like WhatsApp. The platform targets students seeking meaningful academic and career support in a safe, organized environment.

---

## Problem Statement

Students across colleges lack structured mentorship and networking opportunities. Existing apps like WhatsApp are generic, with no role-based matching, privacy safeguards, dedicated chats, or mentorship workflows. MentorLink solves this by enabling secure mentor–mentee connections, real-time chatting, and personalized roadmaps — crafted by mentors or AI — to guide students toward their academic and career goals.

---

## Goals

### Business Goals

* Achieve 1,000+ registered users from at least 4 colleges within the first year.
* Maintain a monthly active user (MAU) rate of at least 50% of total signups.
* Build a scalable platform capable of supporting 5,000+ concurrent users.
* Lay the foundation for monetization via premium features or institutional subscriptions in future phases.

### User Goals

* Enable juniors to easily discover and connect with relevant seniors for mentorship and guidance.
* Provide seniors with a platform to share knowledge, build their network, and enhance their leadership profile.
* Deliver a seamless, intuitive user experience accessible on desktop devices.

### Non-Goals

* The platform will not support general-purpose, unmoderated group chats unrelated to academic or mentorship objectives.

---

## Functional Requirements

### Authentication & Profiles (Priority: Must-have)

* **User Registration & Login:** Email/OTP or Google sign-in for secure access.
* **Profile Management:** Fields for name, college, course, year, role, avatar, interests.
* **Role Selection:** Users select mentor or mentee during onboarding.

### User Discovery & Matching (Priority: Must-have)

* **Search & Filter:** Find users by college, course, year, or role.
* **Smart Recommendations:** Algorithm suggests relevant mentors to mentees based on profile data.

### Real-time Chat (Priority: Must-have)
* **1-on-1 Messaging:** Secure, private chat.
* **Interest/Topic Chat Rooms:** Join or create rooms based on shared interests.

### Mentorship Request System (Priority: Must-have)
* **Mentorship Requests:** Mentees can send requests; mentors can accept/decline.
* **Mentorship Status Tracking:** View active, pending, or completed mentorships.

### Moderation Tools (Priority: Must-have)
* **Report/Block Users:** Users can report or block inappropriate behavior.
* **Admin Moderation Panel:** Admins can review reports and manage users.

### Rating & Reviews (Priority: Must-have / Adds Credibility)
* **Mentor Ratings:** Mentees can rate their mentorship sessions.
* **Reviews & Feedback:** Written feedback for transparency and quality improvement.

### Personalized Roadmaps (Priority: Must-have / Phase 1.5)
* **Mentor-Created Roadmaps:** Mentors can design structured learning/career paths for their mentees.
* **AI-Suggested Roadmaps:** AI can generate personalized study/career plans based on user goals, background, and progress.
* **Progress Tracking:** Students can mark tasks as complete and visualize their journey.
* **Adaptive Recommendations:** Roadmaps update dynamically based on mentee’s performance and feedback.

### Leaderboards & Recognition (Priority: Phase 2)
* **Top Mentors by Category:** Highlight mentors with the best ratings in domains (e.g., placements, coding, design).
* **Monthly Leaderboards:** Recognize active mentors with badges or rankings.

### Knowledge Hub (Priority: Nice-to-have / Phase 2)
* **Q&A Board:** College-specific, searchable posts and answers.
* **Resource Sharing:** Upload and categorize study materials or guides.

### Event Announcements (Priority: Nice-to-have / Phase 2/3)
* **Event Posting:** Mentors can post events (fests, webinars).
* **Notifications:** Students can receive reminders.

---

## User Experience

**Core Experience**

* **Step 1:** User logs in and lands on personalized dashboard.
  * Clear navigation to search, chat, mentorship, and group features.

* **Step 2:** User searches for peers using filters (college, course, year, role).
  * Instant results with profile previews and smart recommendations.
  * Option to view full profile or initiate chat/mentorship request.

* **Step 3:** User sends mentorship request or starts a chat.
  * Mentorship requests trigger notifications for seniors.
  * Seniors can accept/decline; status updates shown to both parties.
  
* **Step 4:** User explores Personalized Roadmap.
  * Mentors can assign structured learning paths.
  * AI generates personalized study/career plans.
  * Students can mark tasks complete and track progress visually.

* **Step 5:** User joins group chats or topic rooms.
  * Easy discovery of active groups; join/leave with one click.
  * Real-time messaging with moderation tools.

* **Step 6:** User receives event announcements (Phase 2/3).
  * Events displayed in dashboard; calendar integration.

* **Step 7:** User accesses Knowledge Hub (Phase 2).
  * Browse/search Q&A, post questions, or share resources.

---

## Success Metrics

### User-Centric Metrics
* % of users who complete their profile within 7 days
* % of mentees who successfully connect with at least one mentors
* User retention rate after 30 and 90 days

### Technical Metrics
* Platform uptime (target: 99.9%)
* Average chat message delivery latency (<2s)
* Error rate (login failures, message delivery issues)
* Scalability (concurrent user support)

---

## Technical Considerations

### Technical Needs
* **Frontend:** Responsive web app with modern UI, accessible on mobile and desktop.
* **Backend:** Secure authentication, real-time messaging, user and group management, mentorship workflow logic.
* **APIs:** RESTful or Genrative Ai APIs for user, chat, mentorship, and event data.
* **Data Models:** Users, Profiles, Colleges, Chats, Mentorships, Events, Reports.

### Integration Points
* Google OAuth for authentication.
* Email/OTP service for sign-up/login.
* College SSO integration (future).
* Notification service (email, in-app).

### Potential Challenges
* Preventing spam and abuse in open group chats.
* Ensuring data privacy and security for minors.
* Handling user verification.

---

# MentorLink: Product Requirements Document (PRD)

### TL;DR

The MentorLink is a web-based networking and mentorship ecosystem designed for students who are in desprete need of upskilling through mentorship. It enables mentees to connect with mentors for guidance, mentorship, and collaboration through structured workflows, smart matching, and features—addressing the limitations of generic chat apps like WhatsApp, Topemate, etc.

---

## Problem Statement

Students across colleges lack structured mentorship and networking opportunities. Existing apps are generic, with no role-based matching, privacy safeguards, dedicated chats, or mentorship workflows. MentorLink solves this by enabling secure mentor–mentee connections, real-time chatting, and personalized roadmaps — crafted by mentors/AI — to guide students toward their academic and career goals also having a dedicated Materials Library.

---

## Goals

### Business Goals

* Achieve 1,000+ registered users from at least 4 colleges within the first year.
* Maintain a monthly active user (MAU) rate of at least 50% of total signups.
* Build a scalable platform capable of supporting 5,000+ concurrent users.

### User Goals

* Enable mentees to easily discover and connect with relevant mentors for mentorship and guidance.
* Provide Mentors with a platform to share knowledge, build their network, and enhance their leadership profile.
* Deliver a seamless, intuitive user experience accessible on desktop devices.

---

## Functional Requirements

### Authentication & Profiles (Priority: 1)

* **User Registration & Login:** Email/OTP or Google sign-in for secure access.
* **Profile Management:** Fields for name, college, course, year, role, avatar, interests.
* **Role Selection:** Users select mentor or mentee during onboarding.

### User Discovery & Matching (Priority: 1)

* **Search & Filter:** Find users by college, course, year, experience or role.
* **Smart Recommendations:** Algorithm suggests relevant mentors to mentees based on profile data.

### Mentorship Request System (Priority: 1)
* **Mentorship Requests:** Mentees can send requests; mentors can accept/decline.
* **Mentorship Status Tracking:** View active, pending, or completed mentorships.

### Real-time Chat (Priority: 1)
* **1-on-1 Messaging:** Secure, private chat.
* **Interest/Topic Chat Rooms:** Join or create rooms based on shared interests.

### Real-time Video Calls (Priority: 1)

* **1-on-1 Video Mentorship:** Secure video calls between mentor and mentee.    
* **Screen Sharing:** Share presentations, code, or documents in real-time.  

### Rating & Reviews (Priority: 1)
* **Mentor Ratings:** Mentees can rate their mentorship sessions.
* **Reviews:** Written feedback for transparency and quality improvement.

### Moderation Tools (Priority: 1)
* **Report/Block Users:** Users can report or block inappropriate behavior.
* **Admin Moderation Panel:** Admins can review reports and manage users.

### Materials Library (Priority: 1)
* **Resource Sharing:** Upload and categorize study materials or guides.
* **Download tracking** To see most relavent resources in each category.

### Personalized Roadmaps (Priority: 1)
* **Mentor-Created Roadmaps:** Mentors can design structured learning paths for their mentees.
* **AI-Suggested Roadmaps:** AI can generate personalized study plans based on user goals, background, and progress.
* **Progress Tracking:** Students can mark tasks as complete and visualize their journey.
* **Adaptive Recommendations:** Roadmaps update dynamically based on mentee’s performance and feedback.

### Leaderboards & Recognition (Priority: 2)
* **Top Mentors by Category:** Highlight mentors with the best ratings in domains (e.g., placements, coding, design).
* **Monthly Leaderboards:** Recognize active mentors with badges or rankings.

### Mentor Availability Calendar (Priority: 2)

* **Availability Setup:** Mentors define available time slots for mentorship sessions.   
* **Automated Reminders:** Notifications for upcoming sessions.  

---

## User Experience

**Core Experience**

**Step 1: Authentication & Onboarding**  
- User registers via email/OTP or Google sign-in.  
- Onboarding flow collects: name, college, course, year, avatar, role (mentor/mentee), interests.  
- User lands on personalized dashboard with navigation to search, mentorship, chats, and resources.  

**Step 2: Discovery & Matching**  
- Search using filters: college, course, year, role, expertise.  
- Smart recommendations highlight relevant mentors or mentees.

**Step 3: Mentorship Requests**  
- Mentee sends request; mentor receives notification.  
- Mentor accepts/declines; both see updated status (active, pending, completed).  
- Mentor availability calendar allows booking sessions.  
- Automated reminders notify users of scheduled mentorship calls.  

**Step 4: Mentorship Interaction**  
- 1-on-1 chat for ongoing discussions.  
- Option for real-time video calls with screen sharing. 
- Mentor ratings and written reviews follow completed mentorships.  

**Step 5: Personalized Roadmaps**  
- Mentors assign structured learning paths.  
- AI generates adaptive roadmaps based on profile and goals.  
- Students mark tasks as complete; progress visualized on dashboard.  
- Dynamic recommendations update as mentee progresses.  

**Step 6: Knowledge & Materials Library**  
- Upload and categorize study materials or guides.  
- Search and filter by subject, tags, or popularity.   

**Step 7: Recognition & Motivation**  
- Leaderboards highlight top mentors by domain and monthly activity.  
- Their Tier (New, Pro, GOAT) recognize consistent mentorship.  

---

## Success Metrics

### User-Centric Metrics
* % of mentees who successfully connect with at least one mentors
* User retention rate after 30 and 90 days

### Technical Metrics
* Platform uptime (target: 99.9%)
* Average chat message delivery latency (<2s)
* Seamless Video Calls
* Error rate (login failures, message delivery issues)
* Scalability (concurrent user support)

---

## Technical Considerations

### Technical Needs
* **Frontend:** Responsive web app with modern UI.
* **Backend:** Secure authentication, real-time messaging, video calling, mentorship workflow logic.
* **APIs:** RESTful or Genrative Ai APIs for user, chat, mentorship, and event data.

### Integration Points
* Google OAuth for authentication.
* Email/OTP service for sign-up/login.
* Notification service (email, in-app).

### Potential Challenges
* Preventing spam and abuse in open group chats.
* Ensuring data privacy and security for minors.
* Handling user verification.

---

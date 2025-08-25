# MentorLink: Product Requirements Document 🚀

## TL;DR ⚡  
MentorLink is a structured mentorship platform for Tier-2/3 Indian college students. Students book mentors through **tiered pricing (₹50–₹350/session)** with the platform taking a **15–20% commission**.
The platform combines **mentor expertise with AI-generated roadmaps** offering a  **secure chat and video mentoring**.

## Problem Statement ❗

In India, according to the reports

- **[IC³ Institute & CISCE Report](https://timesofindia.indiatimes.com/city/mumbai/late-night-screen-use-linked-sleep-loss-career-uncertainty-drive-mental-health-crisis-among-indian-students-says-report/articleshow/123459755.cms)**:
  - ~50% of Indian students report never receiving formal career guidance.
  - ~20% are unsure if they have received it.
- **[CareerPlanB](https://careerplanb.co/importance-of-career-counselling-in-tier-2-and-tier-3-cities-in-india/)**:  
  - Fewer than 10% of Tier-2 and Tier-3 schools have trained career counselors.
- **Additional Sources**: Reports from [India Today](https://www.indiatoday.in) and [Higher Education Digest](https://www.highereducationdigest.com) confirm that over 90% of Indian schools lack professional career guidance, with only ~5,000 certified counselors available for millions of students.

## Current tools:
* **WhatsApp** → Only chat, no structure/privacy
* **LinkedIn** → Networking-focused, not mentorship
* **Topmate** → Expensive, lacks roadmaps

## User Experience 🧑‍💻
* **Onboarding** → Google OAuth/Email → skills/goals → personalized dashboard.
* **Discovery** → Filters (domain, language, tier) + AI recs (MVP achieved 90% user satisfaction).
* **Booking Flow** → Request → mentor accepts → escrow payment → session unlocks roadmap.
* **Interaction** → Secure chat & video + roadmap updates + shared resources.
* **Tracking** → Progress dashboard + repeat booking nudges.

## Success Metrics 📊
* **Engagement:** >40% repeat bookings (MVP 40%).
* **Quality:** Avg. rating ≥4.5/5, <5% disputes.
* **Technical:** 99.9% uptime, <2s latency, <1% error rate.
* **Impact:** +15–20% job placement outcomes in Tier-2/3 colleges.

## Technical Design 🛠️
- **Frontend (React + Tailwind):** Lightweight, fast development, strong community, responsive UI.  
- **Backend (Node.js + Express):** Handles real-time chat, scalable APIs, async I/O for mentorship booking.  
- **Database (MongoDB):** Flexible schema for dynamic mentor/mentee profiles, session logs, and AI roadmap updates.  
- **AI Layer (Llama 3.1 / OpenAI):** Personalized career roadmaps, NLP-driven recommendations.  
- **Hosting (AWS ECS + S3 + CloudWatch):** Scalable, monitored, with autoscaling for peak usage.  
- **Payments (Razorpay Escrow):** Local integration, trusted in India, secure handling of tiered pricing.  

# 🚀 Milestones

## 🟢 Milestone 1 — Foundation & MVP Launch
- **Matching Engine** → Cosine similarity on skills, goals, and domain for smart mentor–mentee pairing.
- **Mentor Tiers & Payments** → Tiered session pricing (₹50–₹350), Razorpay escrow, fraud detection, and 15–20% commission.
- **Secure Chat (text)** → WebSocket + AES-256 encryption, spam filters, and rate-limiting for private conversations.

**Goal:** Launch a working marketplace with **booking + payments + safe chat**.

## 📘 Milestone 2 — Learning Experience Layer
- **AI Roadmaps** → Mentor-guided + fine-tuned model on 10k+ Indian profiles.
- **Ratings & Reviews** → 5-star + text feedback to ensure quality and accountability.
- **Resource Library** → Curated + mentor-uploaded content, searchable with tags.

**Goal:** Boost retention by making mentorship **outcome-oriented** instead of just transactional.

## 🎥 Milestone 3 — Full Mentorship Experience
- **Video Mentoring** → Real-time HD calls, screen sharing, and session recording for hands-on support.
- **Mentor Verification (ID + LinkedIn KYC)** → Builds trust and reduces fraud.
- **Progress Tracking** → Visual completion bars aligned with AI roadmaps for motivation.

**Goal:** Deliver **deeper, credible mentorship** with measurable progress.

## 📈 Milestone 4 — Scale & Optimization
- **Mentor Availability Calendars** → Smooth scheduling and reduced booking friction.
- **Enhanced Security & Anti-Abuse** → Advanced spam filters and anomaly detection for payments/usage.
- **Continuous Model Fine-Tuning** → Improve AI recommendations with data from roadmaps + sessions.

**Goal:** Optimize operations, improve AI accuracy, and **scale to thousands of students**.

## Risk & Solution ❗
- **Low Mentor Supply:** Risk of few mentors signing up.  
  **Solution:** Introduce tiered incentives, verification badges, and leaderboard recognition.  

- **Payment Failures/Disputes:** Escrow disputes or failed Razorpay transactions.  
  **Solution:** Build an admin dispute resolution system, retries, and backup PG integration.  

- **AI Inaccuracy in Roadmaps:** Risk of generic or irrelevant roadmaps.  
  **Solution:** Combine mentor-curated templates + AI fine-tuning with user feedback.  

- **Abuse / Inappropriate Behavior in Chat:**  
  **Solution:** Report/block feature, automated toxicity filters, and admin moderation tools.  

## Scalability, Distributed Systems & Edge Cases 📈
- **Scalability:** Horizontal scaling with load balancers (AWS ALB), stateless APIs, sharded MongoDB for heavy user growth.  
- **Distributed Systems:** Event queues for handling mentorship requests, chat delivery, and payment events without bottlenecks.  
- **Edge Cases:**  
  - Payment succeeds but mentor declines → auto-refund system.  
  - AI roadmap fails → fallback to mentor-curated roadmap.  
  - Chat spam/flooding → rate-limiters + auto-block.  
  - Session no-show → partial refund, automatic penalty to mentor/mentee.  
  - Network drops in video calls → automatic reconnect + session extension.  

## Competitor Matrix ⚔️

| Feature             | WhatsApp | LinkedIn | Topmate         | MentorLink               |
| ------------------- | -------- | -------- | --------------- | ------------------------ |
| AI Roadmaps         | ❌        | ❌        | ❌              | ✅ (custom)              |
| Payments            | ❌        | ❌        | ✅ (30%)        | ✅ (15–20%)              |
| Smart Matching      | ❌        | ❌        | ✅              | ✅                       |
| Privacy             | ❌        | ❌        | ❌              | ✅ (E2E)                 |
| Tiered Pricing      | ❌        | ❌        | ❌              | ✅                       |
| Video Mentoring     | ✅ (basic) | ❌        | ✅ (integrated) | ✅ (HD + screen sharing) |
| Networking          | ✅ (groups) | ✅ (core) | ❌              | ✅ (curated circles)     |

## Societal Impact 🌍
* MentorLink aims to **improve employability by 20%** for 50k+ underserved students within 5 years.
* Multilingual support (Hindi, Tamil in roadmap) expands access.
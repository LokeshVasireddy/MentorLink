# MentorLink: Product Requirements Document 🚀

---

## TL;DR ⚡  
MentorLink is a structured mentorship platform for Tier-2/3 Indian college students. Students book mentors through **tiered pricing (₹50–₹350/session)** with the platform taking a **15–20% commission**.
The platform combines **mentor expertise with AI-generated roadmaps** offering a  **secure chat and video mentoring**.

---

## Problem Statement ❗

In India, according to the reports

- **[IC³ Institute & CISCE Report](https://timesofindia.indiatimes.com/city/mumbai/late-night-screen-use-linked-sleep-loss-career-uncertainty-drive-mental-health-crisis-among-indian-students-says-report/articleshow/123459755.cms)**:
  - ~50% of Indian students report never receiving formal career guidance.
  - ~20% are unsure if they have received it.
- **[CareerPlanB](https://careerplanb.co/importance-of-career-counselling-in-tier-2-and-tier-3-cities-in-india/)**:  
  - Fewer than 10% of Tier-2 and Tier-3 schools have trained career counselors.
- **Additional Sources**: Reports from [India Today](https://www.indiatoday.in) and [Higher Education Digest](https://www.highereducationdigest.com) confirm that over 90% of Indian schools lack professional career guidance, with only ~5,000 certified counselors available for millions of students.

Current tools:
* **WhatsApp** → Only chat, no structure/privacy
* **LinkedIn** → Networking-focused, not mentorship
* **Topmate** → Expensive, lacks roadmaps

### MentorLink Differentiators
* 🎯 **Smart matching** (cosine similarity on skills/goals)
* 🔒 **E2E encrypted chat & calls + mentor verification**
* 🤖 **AI-driven roadmaps** (adaptive JSON outputs)
* 📚 **Curated + mentor-uploaded resources library**
* 💸 **Affordable tiered pricing**

---

## Goals 🎯

### User Goals
* **Mentees:** Access affordable mentors, gain structured guidance, boost employability (target +15–20% placement rates).
* **Mentors:** Monetize expertise, grow visibility, build professional reputation.
* **Platform:** Deliver scalable, secure mentorship-as-a-service.

---

## Functional Requirements ⚙️

### Must-Have
1. **Matching Engine** → Cosine similarity (skills, goals, domain).
2. **Mentor Tiers & Payments**
   * 🆕 New: ₹50/session
   * 🥈 Pro: ₹150/session
   * 🏆 GOAT: ₹350/session
   * 💳 Razorpay escrow + fraud detection
3. **AI Roadmaps** → Mentor input + fine-tuned model (10k+ Indian profiles) → adaptive JSON schema (e.g., `{ "Month 1": {"Skill": "SQL", "Task": "Build DB", "Resource": "coursera.org/sql"} }`).
4. **Secure Chat** → WebSocket, AES-256 encrypted, spam filters, rate-limiting.
5. **Video mentoring** -> Real-time video calls, screen sharing, session recording.
6. **Ratings & Reviews** → 5-star + text feedback.
7. **Resource Library** → Curated + mentor-uploaded, searchable with tags.

### Should-Have
* Mentor verification (ID + LinkedIn KYC).
* Progress tracking (visual completion bars).

### Could-Have
* Mentor availability calendars.

---

## User Experience 🧑‍💻
* **Onboarding** → Google OAuth/Email → skills/goals → personalized dashboard.
* **Discovery** → Filters (domain, language, tier) + AI recs (MVP achieved 90% user satisfaction).
* **Booking Flow** → Request → mentor accepts → escrow payment → session unlocks roadmap.
* **Interaction** → Secure chat & video + roadmap updates + shared resources.
* **Tracking** → Progress dashboard + repeat booking nudges.

---

## Success Metrics 📊
* **Engagement:** >40% repeat bookings (MVP 40%).
* **Conversion:** >5% free→paid (MVP 5%).
* **Quality:** Avg. rating ≥4.5/5, <5% disputes.
* **Financial:** CAC (₹400–₹500) < LTV (₹1500–₹1600).
* **Technical:** 99.9% uptime, <2s latency, <1% error rate.
* **Impact:** +15–20% job placement outcomes in Tier-2/3 colleges.

---

## Technical Design 🛠️

### Stack
* **Frontend:** React + Tailwind
* **Backend:** Node.js (Express)
* **Database:** MongoDB (profiles, sessions, chat, library)
* **AI:** Llama 3.1 / OpenAI API (fine-tuned dataset, JSON schema)
* **Hosting:** AWS ECS + S3 + CloudWatch
* **Payments:** Razorpay escrow

---

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

---

## Societal Impact 🌍
* MentorLink aims to **improve employability by 20%** for 50k+ underserved students within 5 years.
* Multilingual support (Hindi, Tamil in roadmap) expands access.
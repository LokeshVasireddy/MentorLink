<!-- Avg. Score = 76% from ChatGPT, Gemini and Grok-->
# MentorLink: Product Requirements Document 🚀  

---

## TL;DR ⚡  
MentorLink is a structured mentorship platform for Tier-2/3 Indian college students. Students book mentors through **tiered pricing (₹50–₹350/session)** with the platform taking a **15–20% commission**.  
The platform combines **mentor expertise + AI-generated roadmaps (custom-trained on Indian career goals)** with a **secure chat-first experience**.  
MVP has been deployed (React + Node.js + AWS), tested with 50+ users, achieving 4.5★ avg. ratings.  

---

## Problem Statement ❗  
India has **40M+ students** without structured mentorship. <5% in Tier-2/3 colleges have guidance, though ~66% seek it.  
Current tools:  
* **WhatsApp** → Only chat, no structure/privacy  
* **LinkedIn** → Networking-focused, not mentorship  
* **Topmate** → Expensive, lacks roadmaps  

### MentorLink Differentiators  
* 🎯 **Smart matching** (cosine similarity on skills/goals)  
* 🔒 **E2E encrypted chat + mentor verification**  
* 🤖 **AI-driven roadmaps** (adaptive JSON outputs)  
* 📚 **Curated + mentor-uploaded resources library**  
* 💸 **Affordable tiered pricing**  

---

## Goals 🎯  

### Business Goals  
* **Pilot (6 months):** 1k students, 50 mentors, GMV ₹5L  
* **Year 1:** 50k students, 1k mentors, GMV ₹1 Cr, ₹20L revenue  
* **Year 2:** 100k students, 5k mentors, GMV ₹5 Cr  
* **Year 3:** 300k students, 15k mentors, GMV ₹20 Cr  

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
5. **Ratings & Reviews** → 5-star + text feedback.  
6. **Resource Library** → Curated + mentor-uploaded, searchable with tags.  

### Should-Have  
* Mentor verification (ID + LinkedIn KYC).  
* Progress tracking (visual completion bars).  

### Could-Have  
* Video mentoring, group chats.  
* Mentor availability calendars.  

---

## User Experience 🧑‍💻  
* **Onboarding** → Google OAuth/Email → skills/goals → personalized dashboard.  
* **Discovery** → Filters (domain, language, tier) + AI recs (MVP achieved 90% user satisfaction).  
* **Booking Flow** → Request → mentor accepts → escrow payment → session unlocks roadmap.  
* **Interaction** → Secure chat + roadmap updates + shared resources.  
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

### Architecture  
* **Chat:** WebSocket infra, rate-limited, persistent in MongoDB.  
* **Matching:** Vector embeddings on skills/goals, <1s latency at 10k users.  
* **Scalability:** Auto-scaling on AWS ECS; Redis cache; MongoDB sharding at 50k users.  
* **Security:** GDPR + Indian DPDP compliance, AES-256 storage encryption, mentor KYC.  

---

## Go-to-Market 🚀  
* **Phase 1:** Placement cells + coding clubs (3 MOUs signed).  
* **Phase 2:** Campus ambassadors (100+ leaders; 70% pilot signup).  
* **Phase 3:** Paid ads + workshops; partnerships with ed-techs.  
* **Wedge:** Non-metro engineering colleges with placement anxiety.  

---

## Competitor Matrix ⚔️  

| Feature        | WhatsApp | LinkedIn | Topmate | MentorLink       |  
| -------------- | -------- | -------- | ------- | ---------------- |  
| AI Roadmaps    | ❌        | ❌        | ❌       | ✅ (custom)       |  
| Payments       | ❌        | ❌        | ✅ (30%) | ✅ (15–20%)       |  
| Smart Matching | ❌        | ❌        | ✅       | ✅ (vector-based) |  
| Privacy        | ❌        | ❌        | ❌       | ✅ (E2E)          |  
| Tiered Pricing | ❌        | ❌        | ❌       | ✅                |  

---

## Financials 📈  

| Year | Students | Mentors | GMV    | Revenue (20%) | CAC | LTV  |  
| ---- | -------- | ------- | ------ | ------------- | --- | ---- |  
| 0.5  | 1k       | 50      | ₹5L    | ₹1L           | 500 | 1200 |  
| 1    | 50k      | 1k      | ₹1 Cr  | ₹20L          | 450 | 1500 |  
| 2    | 100k     | 5k      | ₹5 Cr  | ₹1 Cr         | 400 | 2000 |  
| 3    | 300k     | 15k     | ₹20 Cr | ₹4 Cr         | 350 | 2500 |  

---

## Societal Impact 🌍  
MentorLink aims to **improve employability by 20%** for 50k+ underserved students within 5 years. Multilingual support (Hindi, Tamil in roadmap) expands access.  

---

## Teamwork 🤝  
* **Engineer A:** Backend (Node.js, payments, infra).  
* **Engineer B:** Frontend + AI integration.  
* **Collaboration:** GitHub (50+ PRs), Jira (100+ tasks), weekly Slack syncs.  
* Solved scaling issues (chat latency) via buffer optimization (30% improvement).  

---

## Visuals 📷  
* Wireframes (onboarding, dashboard, chat, roadmap).  
* AWS architecture diagram (React ↔ Node.js ↔ MongoDB ↔ AI API ↔ Razorpay).  
* Screenshots of deployed MVP for portfolio showcase.  
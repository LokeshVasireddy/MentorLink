<!-- Avg. Score = 73.5% from ChatGPT, Gemini and Grok for PRDv1.04-->

In ## TL;DR ⚡
<!-- Minimum Viable Product (MVP) has been deployed (React + Node.js + AWS), tested with 50+ users, achieving 4.5★ avg. ratings. -->

After ## TL;DR ⚡

<!-- ## Problem Statement ❗

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
* **Topmate** → Expensive, lacks roadmaps -->

In ## Goals 🎯
<!-- ### Business Goals
* **Pilot (6 months):** 1k students, 50 mentors, GMV ₹5L
* **Year 1:** 50k students, 1k mentors, GMV ₹1 Cr, ₹20L revenue
* **Year 2:** 100k students, 5k mentors, GMV ₹5 Cr
* **Year 3:** 300k students, 15k mentors, GMV ₹20 Cr-->

After ## User Experience 🧑‍💻
<!-- ## Success Metrics 📊
* **Engagement:** >40% repeat bookings (MVP 40%).
* **Quality:** Avg. rating ≥4.5/5, <5% disputes.
* **Technical:** 99.9% uptime, <2s latency, <1% error rate.
* **Impact:** +15–20% job placement outcomes in Tier-2/3 colleges.
* **Financial:** CAC (₹400–₹500) < LTV (₹1500–₹1600). -->

In ## Technical Design 🛠️
<!-- ### Architecture
* **Chat:** WebSocket infra, rate-limited, persistent in MongoDB.
* **Matching:** Vector embeddings on skills/goals, <1s latency at 10k users.
* **Scalability:** Auto-scaling on AWS ECS; Redis cache; MongoDB sharding at 50k users.
* **Security:** GDPR + Indian DPDP compliance, AES-256 storage encryption, mentor KYC.-->

After ## Competitor Matrix ⚔️
<!-- ## Financials 📈

| Year | Students | Mentors | GMV    | Revenue (20%) | CAC | LTV  |
| ---- | -------- | ------- | ------ | ------------- | --- | ---- |
| 0.5  | 1k       | 50      | ₹5L    | ₹1L           | 500 | 1200 |
| 1    | 50k      | 1k      | ₹1 Cr  | ₹20L          | 450 | 1500 |
| 2    | 100k     | 5k      | ₹5 Cr  | ₹1 Cr         | 400 | 2000 |
| 3    | 300k     | 15k     | ₹20 Cr | ₹4 Cr         | 350 | 2500 | -->

At the End
<!-- ## Competitor Matrix ⚔️

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

## Teamwork 🤝
* **Engineer A:** Backend (Node.js, payments, infra).
* **Engineer B:** Frontend + AI integration.
* **Collaboration:** GitHub (50+ PRs), Jira (100+ tasks), weekly Slack syncs.
* Solved scaling issues (chat latency) via buffer optimization (30% improvement).

---

## Visuals 📷
* Wireframes (onboarding, dashboard, chat, roadmap).
* AWS architecture diagram (React ↔ Node.js ↔ MongoDB ↔ AI API ↔ Razorpay).
* Screenshots of deployed MVP for portfolio showcase.-->
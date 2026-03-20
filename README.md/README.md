GigArmor – AI-Powered Income Protection for Delivery Partners

GigArmor is an AI-driven parametric income-protection platform designed for food delivery partners working with platforms like Swiggy and Zomato.  
Delivery riders depend on daily orders for income, but disruptions such as heavy rain, extreme heat, pollution alerts, traffic restrictions, or curfews can prevent them from working and cause sudden income loss.

GigArmor predicts disruption risk, calculates weekly protection plans, and automatically triggers payouts when verified events occur — without requiring manual claims.

The system follows a weekly protection cycle aligned with gig workers’ earning patterns.

---

## Problem

Delivery partners frequently lose income due to:

- Heavy rainfall / flooding
- Extreme temperature / heatwaves
- High AQI / pollution alerts
- Traffic restrictions / curfews
- City-level disruptions

Traditional insurance does not cover short-term income loss and requires manual claims.

We propose a parametric protection system that automatically compensates workers when disruption conditions are met.

---

## Target Users

Food delivery partners working with:

- Swiggy
- Zomato

The system is built for gig workers whose income depends on daily delivery activity.

---

## Solution Overview

GigArmor provides:

- Weekly risk prediction per zone
- AI-based premium calculation
- External API disruption verification
- Automatic parametric claims
- Mock payouts
- Fraud detection
- Worker dashboard
- Admin dashboard

---

## Parametric Protection Logic

Claim triggered when:

Worker Location  
+ Verified Disruption  
+ API Confirmation  
+ Risk Engine Approval  

Example triggers:

- Rainfall > threshold
- AQI > threshold
- Temperature > threshold
- Curfew alert
- Traffic shutdown

No manual claim required.

---

Core Features:
1. Worker-Centric Tools

Weekly Risk Score for each worker’s zone

Coverage Simulator predicting upcoming payouts

Real-Time Notifications (rain, AQI spikes, curfews)

Worker Dashboard with risk levels, active coverage, payout history

Safe Scheduling Suggestions based on hyperlocal risk AI

2. Disruption Forecasting Engine

Combined Weather + AQI + Traffic Index

Zone-Level Disruption Alerts

Simulated Government / Curfew Alerts

1–2 Day Hyperlocal Forecasting using external APIs

3. Automated Claims & Payouts

Parametric Auto-Claims triggered by verified disruptions

Partial-Day Compensation for hourly earnings loss

Mock Payout System (Razorpay/UPI sandbox – Phase 1)

Smart Prioritization by expected income loss type

4. AI Safety & Fraud Controls

GPS Geo-Fencing for zone validation

Multi-Source Event Verification

Crowd + Sensor Based Signals (Future)

AI Fraud Scoring (Optional)

5. Admin Analytics & Dashboards

Zone → Worker → Claim drilldown views

Predictive Claims Forecasting

Disruption Heatmaps (weather, traffic, AQI)

Weekly Fund Modeling: premiums vs. payout load

6. Worker Engagement

Gamified badges & progress system (non-risky, behavior-safe):

Phase-1 Prototype Scope (This Submission)

This repo includes the Phase-1 static prototype:

frontend/   → basic UI for worker registration & display
backend/    → simple Node.js mock backend + endpoints
ai/         → basic disruption risk & premium model (Python)
database/   → schema outline for users/policies/claims
docs/       → architecture overview
demo/       → prototype summary

Note:
APIs, real payments, and full authentication are planned for Phase-2.

Design Principles:

Income-loss only (no health/accident coverage)

Weekly cycle (premium + payout rhythm)

Safety-first (never incentivize risky work)

AI-driven prediction + automation

Transparent and worker-friendly dashboards

Roadmap:

Phase-2

Real API integrations

Weather + AQI + traffic API pipelines

Database (MongoDB)

Real claims engine

Admin dashboards

Authentication + JWT

Full UI redesign

Phase-3

Micro-insurance bundles

Incentive gamification

What-If payout simulator

Sensor-based disruption validation

Project Structure:

gigarmor/
│── frontend/
│── backend/
│── ai/
│── docs/
│── database/
│── demo/
└── README.md

## Adversarial Defense & Anti-Spoofing Strategy

GigArmor is designed to prevent coordinated fraud attacks where workers spoof GPS to trigger payouts.

### Differentiation

Claims require:

GPS  
+ Zone validation  
+ API confirmation  
+ Behavior check  
+ Fraud score  

### Data Used

- GPS history
- Speed pattern
- Zone mapping
- Weather API
- AQI API
- Traffic alerts
- Claim frequency
- Device/IP pattern
- Zone claim spikes

### Fraud Ring Detection

System detects:

- Same location claims
- Same time spikes
- API mismatch
- Large zone activity

Actions:

- Delay claims
- Increase risk score
- Require verification
- Admin alert

### AI Fraud Score

Low → auto payout  
Medium → delayed  
High → flagged  

### Trust Model

Each worker has trust score.

High trust → faster payout  
Low trust → extra check

### UX Balance

Flagged claims are not rejected immediately.

Steps:

Flag → verify → approve / review

Honest workers not punished.

### Liquidity Protection Mode

If many claims occur:

- Limit payouts
- Require stronger API proof
- Enable review mode

### Defense Flow

Worker → GPS → Zone  
→ API check  
→ Risk engine  
→ Fraud score  
→ Claim  
→ Payout / Flag

GigArmor stays stable even during mass spoofing attacks.

---

## Tech Stack

Frontend → HTML / CSS / JS  
Backend → Node.js  
AI → Python  
DB → MongoDB (Phase-2)  
APIs → Weather / AQI  
Payments → Sandbox

---

## Conclusion

GigArmor provides a scalable AI-based parametric protection system for delivery partners, ensuring fast payouts for genuine workers while preventing fraud and maintaining liquidity stability.

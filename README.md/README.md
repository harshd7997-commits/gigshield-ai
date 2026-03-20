GigArmor – AI-Powered Income Protection for Gig Workers

GigArmor is an AI-driven income protection platform designed for delivery workers and gig earners. It predicts weekly disruption risks (weather, pollution, traffic), automates parametric payouts, and gives workers hyperlocal insights to stay financially resilient — without requiring medical or accident coverage.

GigArmor follows a weekly protection cycle, aligning with gig workers’ earnings, routine, and risk patterns.

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
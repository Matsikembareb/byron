---
title: "My HIT 400 capstone: rebuilding family trees to predict hereditary disease"
seoTitle: "HIT 400 Capstone: Family Trees to Predict Hereditary Risk"
description: "Family Risk, my HIT 400 project, rebuilds family trees from medical-aid records to score hereditary risk of heart disease, diabetes and breast cancer."
date: 2026-11-11
category: build-log
tags: [flask, react, postgresql, healthcare]
source: blog
cover: /images/projects/hit400/cover.webp
coverAlt: "Family Risk, my HIT 400 capstone: a fictional patient's family tree rebuilt from medical-aid records, shown in the live dashboard"
coverWidth: 1200
coverHeight: 750
project: family-risk
---

HIT 400 is the final-year capstone for Computer Science at the Harare Institute of Technology: one project, built and researched over a semester, written up as a thesis and defended in a presentation. Mine is called **Family Risk**. It asks a simple question: can the family links already sitting in medical-aid records tell a clinic who is at higher risk of a hereditary disease, before that person gets sick?

You can [see the case study](/projects/family-risk), or read on for how it works.

![A fictional patient's family tree rebuilt from records: relatives with a condition shaded, and an uncertain link drawn dashed for the clinician to check](/images/projects/hit400/family-tree.webp)

## The problem: family history goes unused

Family history is one of the strongest signs of who will develop heart disease, type 2 diabetes or breast cancer. A father who had a heart attack before 55 roughly doubles the risk for his children. But in practice that history is rarely written down in a way a system can use, and it is almost never looked at between visits.

Wearables don't help either. A fitness band judges every heartbeat against the same generic limits, whether its owner is 25 and low risk or 50 with three relatives who had strokes.

## The idea: the family is already in the records

Medical aids already connect families. Dependants sit on a member's plan, and emergency contacts point to relatives. Family Risk uses those links to **rebuild each patient's family tree**, puts a confidence on every link, and flags the uncertain ones so a clinician can confirm them with the patient instead of trusting them blindly.

From the tree it **scores hereditary risk** for four conditions: heart disease, high blood pressure, type 2 diabetes and breast cancer. It doesn't invent new medicine. It builds on established models such as the WHO 2019 risk chart for southern sub-Saharan Africa, the FINDRISC diabetes score and the Claus and Gail breast cancer models, and adds what the family tree shows.

Each score then becomes **screening advice** a doctor can act on: a blood pressure check every year, a blood sugar test now, a conversation about lifestyle.

![A fictional patient's risk page: heart and diabetes risk split into age, things the patient can change and family, beside screening proposals](/images/projects/hit400/patient.webp)

## The wearable plan

For heart risk the design goes one step further. Instead of generic limits, a person's own heart-rate limits are worked out from their risk, digitally signed, and sent to a low-cost ESP32 wearable. The device only checks resting heart rate when the wearer is actually still, and it can raise an alert even with no internet. The hardware is still on order, so for now a simulator runs the same logic.

## How I built it

- **Back end:** Python and Flask, with an app factory, one blueprint per feature and the rules in a separate service layer, over PostgreSQL. (Yes, the same structure as [Flask-Setup](/projects/flask-setup).)
- **Dashboard:** React and TypeScript, with separate roles for clinicians, outside reviewers, researchers and admins. Every page opened is written to an audit log.
- **Quality:** automated tests run on GitHub Actions on every push.
- **Hosting:** it's deployed on Render, so doctors can try it from anywhere. Sign-in is by invitation, and they can leave feedback right inside the app.

## Privacy first

This is a research prototype, not a medical device. It runs on **synthetic families only**: fictional people generated for testing, with real data switched off and a banner on every page saying so. That lets me test how well the family trees are rebuilt, because I know the true answer for every fictional family, without touching anyone's real health records.

## What's next

Final results are frozen this month, then come the thesis and the final presentation. If you're a doctor or work in health insurance and would like to try Family Risk, or you just want to talk about it, [get in touch](/contact).

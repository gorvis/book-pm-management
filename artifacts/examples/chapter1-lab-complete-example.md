# Chapter Lab — Foundations (completed example)

> This is a completed example for reference. Do not copy this for your submission — your lab should reflect your own decision and reasoning.

---

## The decision

Should the first version of Pulse include a weekly summary view?

---

## Part 1 — The Venn

**Business:** A weekly summary gives users a reason to return to the app at the end of each week, increasing retention and the likelihood they recommend Pulse to others.

**Customer:** Users who log health data daily often can't see whether their habits are actually changing. A weekly summary makes progress visible without requiring them to interpret raw data themselves.

**Delivery:** A weekly summary is simple aggregation of data already being logged — steps, water, sleep, food. No new data infrastructure is required. It is a read-only view built on existing inputs, making it low effort to ship in a first version.

---

## Part 2 — Mission to Results stack

**Key result:** 40% of users open the weekly summary within 24 hours of it being available, measured at the end of week one post-launch.

**Objective:** Increase week-two retention — the percentage of users who return to Pulse after their first seven days.

**Strategy:** Make progress visible without extra work, so users feel the value of logging before they've built a habit.

**Vision:** Pulse is the health tracker that shows you your habits changing over time, without requiring you to be a data analyst to understand what you're seeing.

**Mission:** Pulse exists to help people build sustainable health habits through effortless, honest self-tracking.

> The line holds. A weekly summary directly serves the mission by making habit progress visible, which supports the vision, fits the strategy of reducing effort, drives the objective of week-two retention, and is measurable through the key result above.

---

## Part 3 — Discovery hypothesis

> We believe first-time health app users have a problem with understanding whether their daily logging is making a difference. We think a weekly summary view will increase the sense of progress and give users a reason to return to Pulse at the end of each week. We will know we are right when 40% of users open the weekly summary within 24 hours of it being available after their first week.

---

## Part 4 — The loop

The minimum build is a single read-only screen that aggregates the past seven days of logged data into simple totals and averages — average steps, total water logged, sleep average, and a one-line plain-language observation like "You logged 5 out of 7 days this week." No charts, no comparisons, no personalization in the first version. The metric to measure at day 7 is the open rate: did the user tap into the summary within 24 hours of it being available? A result above 35% tells us users find it valuable and we should invest in making it richer. A result below 20% tells us either the summary isn't surfaced clearly enough, or users don't find end-of-week reflection useful — both are worth investigating before building further.

---

## Acceptance criteria

- [x] The decision traces from key result to mission without a gap
- [x] All three Venn lenses are addressed in writing
- [x] The hypothesis names a specific user, a specific problem, and a measurable signal
- [x] The minimum build is described in plain language — no jargon, no wireframes required
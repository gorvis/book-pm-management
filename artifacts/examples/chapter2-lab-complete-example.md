# Chapter 2 Lab — Strategy (completed example)

> This is a completed example for reference. Do not copy this for your submission — your lab should reflect your own decision and reasoning.

---

## Part 1 — Product Vision Board

```mermaid
block-beta
    columns 4
    visionBlock["<b>VISION</b><br>Watch your habits change over time, without it feeling like work"]:4
    col1["<b>Target Group</b><br>People who keep starting over"]
    col2["<b>Needs</b><br>Low-friction logging<br>Visible progress<br>No guilt for missed days"]
    col3["<b>Product</b><br>Fast logging<br>Weekly trends<br>Consistency streaks"]
    col4["<b>Business Goals</b><br>Week-two retention above 40%<br>Organic referral"]
    style visionBlock fill:#FFFFFF,stroke:#8B5CF6,color:#000000,text-align:left
    classDef columns fill:#FFFFFF,stroke:#8B5CF6,color:#000000,text-align:left
    class col1,col2,col3,col4 columns
```

> Notice what's not in the product box: social features, nutrition analysis, wearable integrations. Those don't yet connect to the stated needs of the target group, so they stay out for now.

---

## Part 2 — Segmentation diagram and primary segment

```mermaid
quadrantChart
    title Segment Evaluation
    x-axis Low Market Size --> High Market Size
    y-axis Low Pain --> High Pain
    quadrant-1 Big but hard to win
    quadrant-2 Primary Segment
    quadrant-3 Avoid
    quadrant-4 Easy but low value
    "Athletes" : [0.65, 0.35]
    "Patients" : [0.45, 0.55]
    "Everyday people" : [0.35, 0.85]
```

**Primary segment:** Everyday people who have tried at least one other health app and stopped using it within a month.

**Why this segment first, and what makes them winnable?** This group has the smallest market of the three but the most acute pain. Athletes are well served by existing performance trackers, and patients need clinical-grade rigor that doesn't fit a first version. Everyday people who keep starting over have a recurring, unaddressed problem, and the bar for winning them is simplicity and consistency, both achievable in a first version.

---

## Part 3 — Positioning statement

> For people who want to build better health habits but keep losing momentum, Pulse is a health tracking app that makes daily logging fast and shows you your progress over weeks. Unlike fitness apps built for performance tracking, Pulse is designed for consistency, not optimization.

---

## Part 4 — Lifecycle diagram

```mermaid
---
config:
  themeVariables:
    xyChart:
      plotColorPalette: '#8B5CF6, #4C1D95'
---
xychart-beta
    title "Pulse Product Life Cycle"
    x-axis ["Intro", ".", "Growth", "..", "Maturity", "...", "Decline"]
    y-axis "Value" 0 --> 100
    line [10, 15, 45, 80, 90, 90, 70]
```

**What should Pulse be doing at this stage, and what should it be avoiding?** Pulse is in the introduction stage, with early signs of moving toward growth. The priority is proving the core hypothesis, that low-friction logging plus visible trends improves consistency, with a small group of users in the primary segment. Pulse should avoid scaling acquisition or broad marketing spend before that hypothesis is validated. Growth-stage tactics applied this early would amplify a product that hasn't yet proven what works.

---

## Part 5 — Use AI, then check it

I ran the positioning statement through an AI tool and asked it to challenge the wording.

**One thing the AI suggested that you kept, and why:** It suggested naming a specific competitor category ("fitness apps built for performance tracking") instead of the vaguer "other health apps" I originally wrote. I kept this because it makes the differentiation concrete and testable rather than generic.

**One thing you rejected, and why:** The AI suggested adding a claim that "73% of health app users abandon the app within the first month" to strengthen the positioning's urgency. I rejected this because I could not find a primary source for that statistic. It read as plausible but unverified, exactly the kind of confident, ungrounded number this chapter warns against. The positioning works without it.

---

## Acceptance criteria

- [x] All five Vision Board areas are filled and internally consistent
- [x] The segmentation diagram plots at least three segments and clearly marks the primary segment
- [x] The positioning statement names a specific alternative and a specific differentiator
- [x] The lifecycle diagram marks Pulse's current stage and connects to a stated strategic implication
- [x] The AI section names one suggestion kept and one rejected, with reasoning for each
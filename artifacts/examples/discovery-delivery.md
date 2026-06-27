### Framework 2 — Discovery ↔ Delivery

```mermaid
flowchart LR
    D1["DISCOVERY<br>Are we building<br>the right thing?"]
    D2["DELIVERY<br>Are we building<br>it well?"]

    %% The Infinity Loop Arcs
    D1 ==>|Validated decision| D2
    D2 ==>|What we learned| D1

    %% Invisible alignment constraint to help layout
    D1 ~~~ D2

    classDef discovery fill:#2D1B4E,stroke:#8B5CF6,color:#E2E8F0,rx:20px,ry:20px;
    classDef delivery  fill:#1A1A2E,stroke:#8B5CF6,color:#E2E8F0,rx:20px,ry:20px;

    class D1 discovery
    class D2 delivery
```

*Figure Discovery ↔ Delivery loop, adapted from Marty Cagan, SVPG.*

---

### Connecting the framework to Pulse

Pulse is considering adding a food logging feature. The team has heard users ask for it, but that's not enough to build on.

```mermaid
flowchart LR
    D1["DISCOVERY\nDo users actually\nlog food consistently?\nWill they trust Pulse\nfor nutrition data?"]
    D2["DELIVERY\nBuild food logging.\nShip to beta users.\nMeasure logging\nfrequency at day 7."]

    D1 -->|"Enough evidence\nto place the bet"| D2
    D2 -->|"Day 7 retention\nlow — revisit the\nlogging experience"| D1

    classDef discovery fill:#2D1B4E,stroke:#8B5CF6,color:#E2E8F0
    classDef delivery  fill:#1A1A2E,stroke:#8B5CF6,color:#E2E8F0

    class D1 discovery
    class D2 delivery
```

Discovery doesn't stop when delivery starts. The Pulse team ships to beta users and day 7 retention is low — users try it once and don't come back. That result feeds straight back into discovery: is the logging too slow? Too many fields? Wrong mental model of what a food log should feel like? Delivery produced the question. Discovery finds the answer.
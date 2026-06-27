### Visualizing the feedback loop

To avoid building a product nobody wants, we need a tight, iterative cycle. Below is the feedback loop that moves a team from initial assumptions to validated learning.

```mermaid
flowchart TD
    LEARN["LEARN\nIdeas and hypotheses"]
    BUILD["BUILD\nMinimum viable product"]
    MEASURE["MEASURE\nData and metrics"]

    IDEA["Artifact: Customer insight"]
    CODE["Artifact: Shipped feature"]
    DATA["Artifact: User analytics"]

    LEARN -->|Formulate hypothesis| IDEA
    IDEA --> BUILD
    BUILD -->|Ship| CODE
    CODE --> MEASURE
    MEASURE -->|Collect data| DATA
    DATA -->|Pivot or persevere| LEARN

    classDef core    fill:#2D1B4E,stroke:#8B5CF6,color:#E2E8F0
    classDef artifact fill:#1A1A2E,stroke:#8B5CF6,color:#E2E8F0,stroke-dasharray:4

    class LEARN,BUILD,MEASURE core
    class IDEA,CODE,DATA artifact
```

*Figure: The Learn → Build → Measure feedback loop, adapted from Eric Ries, The Lean Startup (Crown Business, 2011).*

---

### Connecting the framework to Pulse

The power of this loop is velocity. The faster a team moves through it, the faster the product finds what actually works.

Consider an early Pulse scenario: the team believes users want to log water intake to build a hydration habit. That's the hypothesis.

```mermaid
flowchart LR
    LEARN["LEARN\nHypothesis: users want\nto track hydration"]
    BUILD["BUILD\nShip basic water\nlogging feature"]
    MEASURE["MEASURE\nAre users logging?\nIs frequency increasing?"]

    LEARN --> BUILD
    BUILD --> MEASURE
    MEASURE -->|Users logging once,\nthen dropping off| LEARN

    classDef core fill:#2D1B4E,stroke:#8B5CF6,color:#E2E8F0

    class LEARN,BUILD,MEASURE core
```

The team ships the minimum version, measures logging frequency, and learns that users log once and stop. Most teams would call that a failed feature. A PM running this loop calls it the next hypothesis.
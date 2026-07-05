# Agile vs. Waterfall: Same Steps, Different Shape

Both processes use the same five steps for this example: requirements, design, build, test, release. Although your organization's steps may vary.

Agile runs them as a small loop that cycles back to the start; Waterfall runs them once, straight through.

```mermaid
flowchart LR
    subgraph Agile
        direction TB
        A1[Requirements] --> A2[Design] --> A3[Build] --> A4[Test] --> A5[Release] --> A1
    end
    subgraph Waterfall
        direction TB
        W1[Requirements] --> W2[Design] --> W3[Build] --> W4[Test] --> W5[Release]
    end

    classDef agile fill:#8B5CF6,stroke:#4C1D95,color:#fff
    classDef waterfall fill:#4C1D95,stroke:#2e1065,color:#fff
    class A1,A2,A3,A4,A5 agile
    class W1,W2,W3,W4,W5 waterfall
```
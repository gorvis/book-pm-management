### Career Ladder
The ladder below shows the two paths a PM career can take. Solid lines are the management track — each step adds people responsibility. Dashed lines are the IC track, which diverges at Senior PM for those who want to go deep on craft without moving into management. Both paths can reach the CPO level.

Not every organization has every rung. A startup may have one PM reporting directly to a founder. A large enterprise may have all of these levels plus more in between. Use the ladder to understand the shape of the career, not as a guarantee of what you'll find at any specific company.

```mermaid
flowchart BT
    APM["Associate Product Manager"] --> PM["Product Manager"]
    PM --> SPM["Senior Product Manager"]
    SPM --> GPM["Group Product Manager"]
    GPM --> DIR["Director, Product Management"]
    DIR --> VP["VP, Product"]
    VP --> CPO["Chief Product Officer"]
    SPM -.->|IC track| PPM["Principal Product Manager"]
    PPM -.->|IC track| CPO

    classDef ic fill:#1A1A2E,stroke:#8B5CF6,color:#E2E8F0
    classDef lead fill:#2D1B4E,stroke:#8B5CF6,color:#E2E8F0
    classDef mgmt fill:#4C1D95,stroke:#6D28D9,color:#F5F3FF
    classDef exec fill:#8B5CF6,stroke:#6D28D9,color:#FFFFFF

    class APM,PM,SPM ic
    class GPM,PPM lead
    class DIR,VP mgmt
    class CPO exec

    linkStyle 0,1,2,3,4,5 stroke:#8B5CF6,stroke-width:2px
    linkStyle 6,7 stroke:#6D28D9,stroke-width:1.5px,stroke-dasharray:5 3
```
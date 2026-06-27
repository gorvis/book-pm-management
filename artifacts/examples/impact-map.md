## IMPACT MAP

```mermaid
    graph LR
        Goal(["GOAL - WHY<br>Why are we doing this?<br>(Measurable Outcome)"])

        %% First Branch
        Actor1(["ACTOR - WHO<br>Who can help or hinder?"])
        Impact1_1(["IMPACT - HOW<br>What behavior change?"])
        Deliv1_1_1(["DELIVERABLE - WHAT<br>What could we build?"])
        Deliv1_1_2(["DELIVERABLE"])
        
        Impact1_2(["IMPACT"])
        Deliv1_2_1(["DELIVERABLE"])

        %% Second Branch
        Actor2(["ACTOR"])
        Impact2_1(["IMPACT"])
        Deliv2_1_1(["DELIVERABLE"])
        
        Impact2_2(["IMPACT"])
        Impact2_3(["IMPACT"])

        %% Connections
        Goal --> Actor1
        Goal --> Actor2

        Actor1 --> Impact1_1
        Actor1 --> Impact1_2

        Impact1_1 --> Deliv1_1_1
        Impact1_1 --> Deliv1_1_2
        Impact1_2 --> Deliv2_1_1

        Actor2 --> Impact2_1
        Actor2 --> Impact2_2
        Actor2 --> Impact2_3

        Impact2_1 --> Deliv1_2_1

        %% Styling (Deep Purple base, Darker Violet accents)
        classDef mainGoal fill:#2D1B4E,stroke:#6D28D9,stroke-width:3px,color:#FFFFFF;
        classDef mapNode fill:#2D1B4E,stroke:#6D28D9,stroke-width:1.5px,color:#FFFFFF;

        class Goal mainGoal;
        class Actor1,Actor2,Impact1_1,Impact1_2,Impact2_1,Impact2_2,Impact2_3,Deliv1_1_1,Deliv1_1_2,Deliv1_2_1,Deliv2_1_1 mapNode;
        
        %% Corrected line styling syntax
        linkStyle default stroke:#6D28D9,stroke-width:1.5px,fill:none;
  ```

  Adapted from the Impact Mapping framework by Gojko Adzic.
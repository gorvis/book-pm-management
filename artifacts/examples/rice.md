# RICE Priortiziation

The RICE score combines four inputs into a single number. The first three multiply together in the numerator, so each one raises the score. Effort sits underneath as the denominator, which means the more work something takes, the lower it scores. That structure is the whole idea: high reach, impact, and confidence push an item up, while high effort pulls it down.

RICE stands for:

R = Reach

I = Impact

C = Confidence

E = Effort

**RICE FORMULA**: R × I × C ÷ E

**RICE FORMULA VISUALIZED**

```mermaid
graph TD
    %% Define Nodes
    subgraph Numerator [" "]
        R["Reach"] 
        Times1["×"] 
        I["Impact"] 
        Times2["×"] 
        C["Confidence"]
    end

    DivLine["__________________________________________________"]

    subgraph Denominator [" "]
        E["Effort"]
    end

    %% Positioning without visible lines or arrows
    R ~~~ Times1 ~~~ I ~~~ Times2 ~~~ C
    Numerator ~~~ DivLine ~~~ Denominator

    %% Styling
    classDef formula fill:#2D1B4E,stroke:#8B5CF6,stroke-width:2px,color:#FFFFFF;
    classDef symbol fill:none,stroke:none,font-size:24px,font-weight:bold,color:#A78BFA;
    classDef line fill:none,stroke:none,font-weight:bold,color:#6D28D9;
    
    class R,I,C,E formula;
    class Times1,Times2 symbol;
    class DivLine line;

    %% Hide Subgraph Borders
    style Numerator fill:none,stroke:none;
    style Denominator fill:none,stroke:none;
```

*Figure: The RICE scoring formula, adapted from Intercom's RICE framework (2016).*
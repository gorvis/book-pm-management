graph LR
    %% Class Definitions for Styling
    classDef milestone fill:#ffffff,stroke:#1d273b,stroke-width:3px,font-weight:bold,shape:stadium;
    classDef process fill:none,stroke:none,font-weight:bold,color:#1d273b;
    classDef phase fill:none,stroke:#1d273b,stroke-width:1px,stroke-dasharray: 5 5;

    %% --- PROBLEM DIAMOND ---
    subgraph Problem ["<h3>PROBLEM</h3>"]
        direction LR
        
        Challenge([Challenge]) :::milestone
        
        %% Discover Phase (Diverge)
        Challenge -->|DIVERGE| Discover_Top[Discover]:::process
        Challenge -->|DIVERGE| Discover_Bottom[Understand & Define Loop]:::process
        
        Discover_Top --> Definition([Definition]) :::milestone
        Discover_Bottom --> Definition
    end

    %% --- SOLUTION DIAMOND ---
    subgraph Solution ["<h3>SOLUTION</h3>"]
        direction LR
        
        Definition -->|DIVERGE| Develop_Top[Develop]:::process
        Definition -->|DIVERGE| Develop_Bottom[Ideate, Prototype, Test Loop]:::process
        
        Develop_Top -->|CONVERGE| Solution_End([Solution]) :::milestone
        Develop_Bottom -->|CONVERGE| Solution_End
    end

    %% Specific adjustments for text inside the loops
    style Problem fill:#f8f9fa,stroke:#cbd5e1,stroke-width:1px;
    style Solution fill:#f8f9fa,stroke:#cbd5e1,stroke-width:1px;
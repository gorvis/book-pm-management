### TAM/SAM/SOM

Market sizing narrows from the broadest possible demand down to the share you can realistically win. Each layer sits inside the last: the whole market, the part you could serve, and the part you can actually capture soon.

```mermaid
graph TB
    classDef tamStyle fill:#1A1A2E,stroke:#8B5CF6,stroke-width:2px,color:#E2E8F0;
    classDef samStyle fill:#2D1B4E,stroke:#8B5CF6,stroke-width:2px,color:#E2E8F0;
    classDef somStyle fill:#8B5CF6,stroke:#6D28D9,stroke-width:2px,color:#FFFFFF;

    subgraph TAM ["● TAM: Total Addressable Market (Global Demand)"]
        
        subgraph SAM ["● SAM: Serviceable Addressable Market (Target Segment)"]
            
            subgraph SOM ["● SOM: Serviceable Obtainable Market (Short-term Share)"]
                SOM_Core["Your Immediate Market"]
            end
            
        end
        
    end

    class TAM tamStyle;
    class SAM samStyle;
    class SOM,SOM_Core somStyle;
```

The SOM is the number that should shape your near-term plans. A huge TAM looks exciting in a pitch, but the share you can realistically win this year is what you actually build and market against.
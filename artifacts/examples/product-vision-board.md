### Framework 1 — Product Vision Board

The vision board forces a single discipline: everything on the board has to justify itself against the vision at the top. Fill the vision first. If a feature in the product box doesn't connect to a stated need, it doesn't belong.

```mermaid
%%{init: { 'theme': 'base', 'themeVariables': { 'background': '#FFFFFF', 'canvasBackground': '#FFFFFF', 'mainBkg': '#FFFFFF' }}}%%
block-beta
    columns 4
    
    %% Top Banner spanning all 4 columns cleanly
    visionBlock["<strong>VISION</strong><br/>What is your motivation? What positive change should it create?"]:4
    
    %% Row below: 4 individual blocks locked perfectly underneath
    col1["<strong>TARGET GROUPS</strong><br/>Which market segment?<br/>Who are the users?"]
    col2["<strong>NEEDS</strong><br/>What problem is solved?<br/>Which benefit is created?"]
    col3["<strong>PRODUCT</strong><br/>What product is it?<br/>What makes it stand out?"]
    col4["<strong>BUSINESS GOALS</strong><br/>How does it benefit us?<br/>What are the goals?"]

    %% Pure White Backgrounds with Purple Outlines
    style visionBlock fill:#FFFFFF,stroke:#8B5CF6,stroke-width:2px
    classDef columns fill:#FFFFFF,stroke:#8B5CF6,stroke-width:2px
    class col1,col2,col3,col4 columns;
```

*Figure: Product Vision Board, adapted from Roman Pichler.*

---

### Connecting the framework to Pulse

Pulse's vision is a world where anyone can watch their health habits change over time, without it feeling like work. Run the board against that vision and it immediately rules things out — features that only show today's data don't serve "change over time," and anything that adds friction doesn't serve "without it feeling like work."

```mermaid
%%{init: { 'theme': 'base', 'themeVariables': { 'background': '#FFFFFF', 'canvasBackground': '#FFFFFF', 'mainBkg': '#FFFFFF' }}}%%
block-beta
    columns 4
    
    %% Top Banner: Vision
    visionBlock["<b>VISION</b><br>Watch your habits change over time, without it feeling like work"]:4
    
    %% Strategy Columns
    col1["<b>TARGET GROUP</b><br>People who keep starting over"]
    col2["<b>NEEDS</b><br>Low-friction logging<br>Visible progress<br>No guilt for missed days"]
    col3["<b>PRODUCT</b><br>Fast logging<br>Weekly trends<br>Consistency streaks"]
    col4["<b>BUSINESS GOALS</b><br>Week-two retention above 40%<br>Organic referral"]

    %% Absolute White & Purple Styles
    style visionBlock fill:#FFFFFF,stroke:#8B5CF6,stroke-width:2px
    classDef columns fill:#FFFFFF,stroke:#8B5CF6,stroke-width:2px
    class col1,col2,col3,col4 columns;
```

Notice what's not in the product box: social features, nutrition analysis, wearable integrations. Those aren't bad ideas — they're ideas that don't yet connect to the stated needs of the target group. If the vision or the target group changes, some of them may belong. For now, the board keeps them out.
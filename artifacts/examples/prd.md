<!-- Uncomment the line below once you've filled in the sections relevant to your project, then copy this whole file and paste it into your AI tool.

Instruction to AI: build the feature described below. Create the file, wire it in, and run the dev server so it can be viewed locally. -->

## Product Requirements Document (PRD)

A product requirements document (PRD) is the written specification for what you're building: the problem, who it's for, what to build, and how you'll know it worked.

Traditionally PRDs were long documents that few people read. In Agile they slimmed down. In an AI era where AI will do the prototyping, a PRD becomes something new again: a human-in-the-loop document for you and the AI to co-author, with clear instructions and limits.

An AI-ready PRD keeps everything a normal PRD has, plus what to prototype, brand guidelines, what not to do, both rules and principles, and what's out of scope, and importantly evaluation criteria so the AI can test the prototype itself.

This is a PRD template with both human and AI elements. Copy it, fill in the sections relevant to your project, and hand it to an AI tool to begin.

---

**1. Problem and context**

*Pull from your product's vision and the user's job to be done. What's broken, for whom, and why it matters.*

**2. Target group**

*Who it's for, and who it's not for. Use your vision board's target groups.*

**3. What to build**

*The actual build spec: the screen or feature, its inputs, what it displays, and the format.*

*If you want to give AI data, a small sample dataset is provided at `/artifacts/data/1week.md` you can use or adapt.*

**4. Constraints**

*Roadblocks, realities, and dependencies that limit this project. Time, budget, regulations, or anything the AI shouldn't try to work around.*

*Note: in our lab, we will constrain this to a single file.*

**5. Technical specs**

*General guidelines for how this should be built, so the AI doesn't guess. Framework and tooling (e.g., React, Vite), hosting/deployment target (e.g., AWS), and any existing conventions to follow.*

*Note we're keeping this information in the PRD for the prototype but at handoff, you may want to move technical specs to an AGENTS.md (or CLAUDE.md file if you're using Claude) at your codebase, so when AI continues building, it follows technical guidelines automatically.*

**6. Success metrics**

*How you'll know it worked. Outcome-focused. Note which metric the prototype can actually test versus what only the shipped feature could measure.*

**7. Brand guidelines**

*AI doesn't know your brand guidelines, so describe them here. Include your brand voice, any common personas (links to your target groups), and style guide notes like brand colours, typography, and common imagery.*

**8. Guardrails and eval criteria**

*Guardrails are the things the feature must never do. Where you can, enforce a guardrail by design rather than by hoping the model obeys. Example: a checkout flow must never charge a card twice for the same order.*

- *Guardrail 1*
- *Guardrail 2*
- *Guardrail 3*

*Quality bar (separate from the hard gates) — what makes a generated output good, not just safe. Example: a search feature returns results that are actually relevant, not just ones that technically match the keywords.*

- *Quality criterion 1*
- *Quality criterion 2*

*Go/no-go bar:* the test the AI prototype has to pass. Try to state it in concrete numbers, e.g. what percentage of eval cases must meet the quality bar, and which violations are zero-tolerance. Example: 95% of test transactions complete successfully, and zero double-charges occur.

**9. Out of scope**

*What you're deliberately not building, and why.*

---
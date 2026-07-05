<!-- Uncomment the line below once Parts 1–4 are filled in, then copy from here through the end of Part 4 and paste into your AI tool.

Instruction to AI: build the feature described below. Create the file, wire it in, and run the dev server so it can be viewed locally. -->

# Chapter 5 Lab — Build and Evaluate a Prototype

**What you'll build:** an AI-ready PRD for a Pulse feature, then a working AI-built prototype of it, evaluated against your own acceptance criteria and guardrails. This is the payoff of the AI-prototyping idea seeded back in Chapter 3.

Once Parts 1–4 are filled in, copy everything from the top of this file through the end of Part 4 (the PRD) and hand that to your AI tool. Fill in Parts 5 and 6 afterward, based on what actually happens.

Your AI tool will likely ask permission before running commands, especially early on, as it explores the existing _Pulse_ codebase before writing anything. Read-only commands (like listing files or reading package.json) are safe to approve. Pay closer attention to anything that writes, installs, or deletes.

---

## Part 1 — Job-to-be-done

Write the job your feature serves, using the format:

> When [situation], I want to [motivation], so I can [expected outcome].

*Your job-to-be-done here.*

---

## Part 2 — User story and acceptance criteria

Write one user story in the "As a… I want… so that…" format, with the benefit written for the user.

> As a [type of user], I want [something] so that [benefit].

Then write at least four acceptance criteria, each one something a person could mark true or false. If your feature has any AI-generated element, at least one criterion must be a guardrail (something it must never do). Mark guardrails.

**Acceptance criteria:**

- *Criterion 1*
- *Criterion 2*
- *Criterion 3*
- *Criterion 4 (guardrail)*

---

## Part 3 — Define the MVP

In two or three sentences, describe the smallest valuable version of your feature, the skateboard. State what you're deliberately leaving out.

*Your MVP description here. Name the skateboard, then name what you're cutting.*

---

## Part 4 — The AI-ready PRD

See guidelines in `/artifacts/examples/prd.md`.

**1. Problem and context**

*Pull from your product's vision and the job above. What's broken, for whom, and why it matters.*

**2. Target group**

*Who it's for, and who it's not for. Use your vision board's target groups.*

**3. What to build**

*The actual build spec: the screen or feature, its inputs, what it displays, and the format.*

*If your feature needs data it doesn't have yet, like a week's worth of a user's logging history, a small sample dataset is provided at `/artifacts/data/1week.md`. Use it (or adapt it) to stand in for the real data, so you can build and test the screen without building the backend behind it.*

**4. Constraints**

*Roadblocks, realities, and dependencies that limit this project. Time, budget, regulations, or anything the AI shouldn't try to work around.*

*Everything for this feature lives in a single file (e.g., WeeklySummary.jsx). No separate components, styles, or helper files. This makes it easy to review and to submit one link.*

**5. Technical specs**

*General guidelines for how this should be built, so the AI doesn't guess. Framework and tooling, hosting/deployment target, and any existing conventions to follow, like which languages to use (because your team knows them).*

*Place the file at pulse/src/components/WeeklySummary.jsx, alongside the existing components (Dashboard, LogForm, History, etc.).*

*Note we're keeping this information in the PRD for the prototype, but at handoff, you may want to move technical specs to an `AGENTS.md` (or `CLAUDE.md` if you're using Claude) file in your codebase, so future AI work follows technical guidelines automatically.*

**6. Success metrics**

*How you'll know it worked. Outcome-focused. Note which metric the prototype can actually test versus what only the shipped feature could measure.*

**7. Brand guidelines**

*AI doesn't know your brand guidelines, so describe them here. Include your brand voice, any common personas (links to your target groups), and style guide notes like brand colours, typography, and common imagery. If your feature has any generated language, this is also where to specify how it should sound, with an example line for each situation it needs to handle.*

**8. Guardrails and eval criteria**

*Guardrails (hard gates, zero tolerance) — the things the feature must never do. Where you can, enforce a guardrail by design rather than by hoping the model obeys.*

- *Guardrail 1*
- *Guardrail 2*
- *Guardrail 3*

*Quality bar (separate from the hard gates) — what makes a generated output good, not just safe. An output can break no guardrail and still fail here if it's dry, robotic, or just restates data the user can already see.*

- *Quality criterion 1*
- *Quality criterion 2*

*Go/no-go bar:* state it in concrete numbers. What percentage of eval cases must meet the quality bar, and which violations are zero-tolerance.

**9. Out of scope**

*What you're deliberately not building, and why.*

---

## Part 5 — Build it with AI

Hand your PRD to an AI tool and have it generate a working prototype. Keep it throwaway. You're prototyping to learn, not to ship.
Your AI tool will likely ask permission before running commands. Based on a real run of this PRD, expect prompts like these, safe to approve. **Approve one by one, don't accept all edits so you can learn what it's doing and not accidentally go beyond your scope.**

- Reading the codebase: listing files, reading package.json. Read-only is always safe.
- Creating the new component file: this is the one new file your PRD asks for.
- Editing existing files to wire it in (e.g., adding an import and a nav entry in App.jsx, or a tab in Nav.jsx) is expected. Your PRD's single-file rule covers new files, not the minimal edits needed to make your feature reachable.
- Checking/installing node_modules: a first-run setup step, not a new dependency, as long as it's not adding anything new to package.json.
- Checking the local URL (a curl or similar to confirm the app loads). This is safe as it's read-only, the AI verifying its own work.

Pay closer attention to anything that adds a new dependency to package.json, touches the data layer (useEntries), or creates more than one new file. Those go beyond what this PRD asks for. 

A note on the "AI" part: this project has no LLM SDK, no backend, and no safe place to hold an API key in the browser, so your AI tool will likely simulate the generated message rather than call a real model, hand-writing a few variants per situation instead. 

That's a reasonable workaround, but it means your eval in Part 6 is really testing the builder's judgment, not a live model's. 

If you want a genuine test of model behavior, you'd need to wire in a real API call, which is out of scope for this lab.

Once the file is in place, run the dev server (npm run dev from pulse/) so you can view it in your web browser on your local machine at `localhost:5173/pulse/`.

Once you push to GitHub, enter your prototype file URL: `github.com/your-username/book-pm-management/blob/main/pulse/src/components/WeeklySummary.jsx`.

Write a short note on how the handoff went: did the AI ask clarifying questions before building? Were they good ones? What did you have to correct or clarify?

---

## Part 6 — Evaluate it

Run your prototype against every test state in your eval set, including the adversarial ones (the down week, the zero week, the missing-data case, whatever tries hardest to break a guardrail). Record the result for each.

| Test state | Generated output | Result |
|------|--------|--------|
| *State 1* | *what it produced* | *Pass / Fail (and why)* |
| *State 2* | | |
| *State 3* | | |
| *State 4* | | |
| *State 5* | | |
| *State 6* | | |

**Results**: ___ of ___ test states passed the quality bar. ___ guardrail violations found.

**Failures, and why:** *For each failure, say whether it's a guardrail violation (broke a hard gate) or a quality fail.*

**Verdict against the go/no-go bar:** *go / no-go, with the reasoning. Remember: any guardrail violation is an automatic no-go, even if the quality percentage is fine.*

> If your prototype violated a guardrail, that's not a failure of the lab, that's the lab working. You found the confident wrong answer in a test instead of in front of a real person.

---

## Acceptance criteria

- [ ] The job is written in the JTBD format
- [ ] The user story has a user-focused benefit and at least four testable acceptance criteria
- [ ] The MVP is described as a smallest-valuable version, with what's left out stated
- [ ] All relevant PRD sections are complete, with named test states, separate quality and guardrail criteria, and a go/no-go bar with at least one zero-tolerance guardrail
- [ ] The prototype was built and run against the full eval set, with results and a clear go/no-go verdict recorded

---

## Submitting your work

Complete this file, commit, and push to your fork as you did with prior labs. Completed examples are in `artifacts/examples/chapter5-lab-complete-example.md` for a full worked lab, and `chapter5-lab-ai-ready-prd-example.md` for the filled PRD alone, the version actually meant to be pasted into an AI tool.
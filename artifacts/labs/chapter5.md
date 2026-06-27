# Chapter 5 Lab — Build and Evaluate a Prototype

## What you'll build

An AI-ready PRD for a Pulse feature, then a working AI-built prototype of it, evaluated against your own acceptance criteria and guardrails. This is the payoff of the AI-prototyping idea seeded back in Chapter 3.

---

## Part 1 — Job-to-be-done

Write the job your feature serves, using the Jobs to Be Done format:

> When [situation], I want to [motivation], so I can [expected outcome].

**Your job:**

> When \_\_\_, I want to \_\_\_, so I can \_\_\_.

---

## Part 2 — User story and acceptance criteria

Write one user story, with the benefit written for the user, not for your metrics.

> As a [type of user], I want [something] so that [benefit].

Then write at least three acceptance criteria, each one something a person could mark true or false. If your feature has any AI-generated element, at least one criterion must be a guardrail (something it must never do).

**Your story:**

> As a \_\_\_, I want \_\_\_ so that \_\_\_.

**Acceptance criteria:**

1.
2.
3.

---

## Part 3 — Define the MVP

In two or three sentences, describe the smallest valuable version of your feature, the skateboard, not the car wheel. State what you're deliberately leaving out.

**Your MVP:**

---

## Part 4 — The AI-ready PRD

An AI-ready PRD gives an AI tool (or a human developer) everything it needs to build the right thing: the context first, then what to build, then how it should behave and what it must never do. Fill in all seven sections.

**1. Problem and context** _(Pull from your vision and the job above. What's broken, for whom, and why it matters.)_

**2. Target group** _(Who it's for, and who it's explicitly not for. Use your vision board's target group.)_

**3. What to build** _(The actual build spec: the screen or feature, its inputs, what it displays, and the format. If any part uses AI, say exactly what the AI does and what it receives. Point the tool at the project's `CLAUDE.md` for language, styling, and architecture conventions rather than re-specifying them here. Keep it throwaway quality and mock any data you need.)_

**4. Success metrics** _(How you'll know it worked. Outcome-focused.)_

**5. Behaviour and tone** _(If your feature has a language, how should it sound? Be specific.)_

**6. Guardrails (hard gates)** _(What the feature must never do, as non-negotiable Principles. End with your go/no-go bar: what percentage of eval cases must pass, and which violations are zero-tolerance.)_

**7. Out of scope** _(What you're deliberately not building, and why.)_

---

## Part 5 — Build it with AI

Hand your PRD to an AI tool and have it generate a working prototype. Give the full Pulse codebase in /pulse. For ease, you may want to use AI within VS code to do this, but you can upload the Pulse codebase into your preferred AI tool and hand it the PRD also.

Have AI read your `CLAUDE.md` so it matches the project conventions. Keep it throwaway. You're building to learn, not to ship.

---

## Part 6 — Evaluate it

Build an eval set of at least six cases, three representative and three adversarial (the hard ones: a bad week, an edge case, a request that tempts a guardrail). Run your prototype against every case and record:

- How many representative cases met their acceptance criteria
- Whether any guardrail was violated, and which
- Your verdict against the go/no-go bar: does it ship or not?

> If your prototype violated a guardrail, that's not a failure of the lab. That's the lab working. You found the confident wrong answer in a test instead of in production.

---

## Acceptance criteria

- [ ] The job is written in the JTBD format
- [ ] The user story has a user-focused benefit and at least four testable acceptance criteria
- [ ] The MVP is described as a smallest-valuable slice, with what's left out stated
- [ ] All seven AI-ready PRD sections are complete; if AI is used, the eval plan has at least three representative and three adversarial cases and a go/no-go bar with at least one zero-tolerance guardrail
- [ ] The prototype was built and run against the full eval set, with results and a clear go/no-go verdict recorded

---

## Submitting your work

Complete this file, commit, and push to your fork. A completed example is in `artifacts/examples/chapter5-lab-complete-example.md` if you want a reference.
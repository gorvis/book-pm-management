Instruction to AI: build the feature described below. Create the file, wire it in, and run the dev server so it can be viewed locally.

# Pulse — Weekly Summary: AI-Ready PRD

**1. Problem and context**

_Pulse_ exists for a simple vision: a world where anyone can watch their health habits change over time, without it feeling like work. The job this feature serves: *when I've fallen off my health habits, I want to see whether I'm actually making progress, so I can decide it's worth continuing.* Right now lapsing users don't realize they've made any progress, because nothing shows it back to them. A missed day or two makes returning feel like failure. This weekly summary shows progress in a way that encourages rather than scolds.

**2. Target group**

- Primary: lapsing beginners, people who logged for a few days, missed some, and are deciding whether it's worth continuing.
- Not for: power users or athletes who want detailed analytics and precise tracking. This is about a felt sense of progress, not data depth.

**3. What to build**

- A single read-only screen, the weekly summary, for the _Pulse_ app.
- Inputs available to the screen: days logged this week (0–7), days logged last week (0–7, or none for a first week), and the list of which days were logged.
- The screen displays three things: total days logged this week, a one-line trend versus last week, and one generated sentence beneath the numbers.
- Trend row rules:
    - *First week (no prior data)*: omit the trend row. There is nothing to compare to, and omitting it protects the "never invent a number" guardrail.
    - *Flat at zero (0-to-0)*: omit the trend row. There's nothing to show movement on.
    - *Flat above zero (e.g., 4-to-4)*: show the trend row as "steady." Consistency isn't discouraging, it's worth surfacing.
    - *Up or down week*: show the trend as "up" or "down" versus last week.
- Use AI to generate and display one encouraging sentence about the data, never discouraging. Don't parrot the data back like, "You did 3 of 7 days, up from last week!" An encouraging message instead would be "Three days in, and you're already ahead of where you started last week. Way to go!"
- Data: use the sample data at `/artifacts/data/1week.md`, adapted into six named test states covering the situations this feature needs to handle:
    1. *Brand New User:* this week 2, last week none. Trend row omitted.
    2. *Flat Zero:* this week 0, last week 0. Trend row omitted.
    3. *Improvement:* this week 5, last week 2. Trend up.
    4. *Lapsed:* this week 1, last week 3. Trend down.
    5. *Collapse:* this week 1, last week 7. Trend down.
    6. *Steady:* this week 4, last week 4. Trend row displayed (steady).
- Expose these as a small set of named test states the screen can switch between, so different user situations can be tested by clicking rather than editing a variable each time.

**4. Constraints**

- Everything for this feature lives in a single file called `WeeklySummary.jsx`. No separate components, styles, or helper files. This makes it easy to review and to submit one link.
- The numbers are computed by the app; the AI only phrases the one-sentence message. This is a hard rule, not a preference.
- This is a single-session lab build: no real backend, no auth, no persistence. Everything runs off the mock data.
- No new dependencies beyond what the Pulse project already uses. If a package feels necessary, that's a sign the scope has grown past the MVP.
- Built and evaluated in one sitting. If the eval doesn't pass, the fix is to tighten the prompt and re-run, not to expand the feature.

**5. Technical specs**

- React + Vite, matching the existing Pulse app in `pulse/`.
- UI built with Material UI (MUI v6); use existing theme tokens from `src/theme.js` rather than one-off styles.
- No backend, no database.
- Keep it throwaway prototype quality. This code is built to answer a question, not to ship.
- Place the file at `pulse/src/components/WeeklySummary.jsx`, alongside the existing components (`Dashboard`, `LogForm`, `History`, etc.).
- After building, run the dev server (`npm run dev` from `pulse/`) so it can be viewed locally at `localhost:5173/pulse/`.

**6. Success metrics**

- **For AI:** the summary loads in under 3 seconds. (Testable as part of the eval set.)
- **For humans to test:** in interviews, more than three lapsing users say seeing the summary makes them more likely to reopen Pulse.

**7. Brand guidelines**

- Voice: warm, plain-spoken, and specific to the user's actual numbers, never clinical, never a lecture.
- Encouraging on every kind of week, including bad ones.
- Honest when there isn't enough data to show a trend (a brand-new user's first week has nothing to compare to).
- Example lines by situation:
    - Up week: "Five days this week, more than double last week. You've found your rhythm again."
    - Flat week: "Four days again this week. Showing up consistently is the key."
    - Down week: warm and forward-looking, never guilt-based (see guardrails below for what this rules out).
    - No prior data: "Two days logged in your first week, great start!"

**8. Guardrails and eval criteria**

Guardrails (hard gates, zero tolerance):

- Never shame or guilt the user, on any week.
- Never give medical, diet, or clinical advice.
- Never state a number or trend that isn't in the data the app provided.
- Be honest when there isn't enough data.

What counts as a passing message (the quality bar, separate from the hard gates): a generated sentence passes only if it:

- Acknowledges this week's effort without clinical or judgmental language,
- Adds forward-looking, encouraging framing for the week ahead, and
- Does not parrot the data string the app already shows.

A message that is accurate and safe but dry, robotic, or just a restatement of the numbers is a quality fail, even though it breaks no guardrail.

**Go/no-go bar:** at least 90% of eval cases meet the passing-message criteria above, and zero guardrail violations across the full eval set. The 90% is a quality target; the zero is absolute.

**9. Out of scope**

Charts and graphs, streak history, personalization, social sharing, settings, and notifications. All deferred. The prototype tests one thing: does seeing a week's progress, with a kind message, make a lapsing user want to come back?
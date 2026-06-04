# EliasApp2 QA Recommendations

This document records the QA audit findings for EliasApp2 and the recommended updates to support toddler-friendly co-play, vocabulary modelling, and safe transitions.

## Key Audit Findings
- There is no audio vocabulary modelling for object names and actions.
- Some screens contain too many interactive elements for a two-year-old.
- There is no session timer or closing ritual.
- Parent prompts are present but can be more explicit in each scene.
- There is no parent gate to prevent unsupervised category switching.

## Recommendations
1. Add audio vocabulary prompts.
   - When tapping or dragging an object, play a short label or action phrase.
   - **Acceptance**: each primary interactive element triggers a concise spoken label when audio is enabled.

2. Limit primary interactions to three per screen.
   - Emphasise depth over breadth and unlock extras sequentially.
   - **Acceptance**: no screen contains more than three primary tap or drag actions.

3. Add a session timer and closing ritual.
   - After 5–8 minutes, prompt the child to play with real toys and transition off-screen.
   - **Acceptance**: controls disable after the timer and a friendly character invites offline play.

4. Add stronger scene-level parent prompts.
   - Include visible narration cues like “Ask Dad what this tool does.”
   - **Acceptance**: each scene has a caregiver prompt displayed on screen.

5. Add a parent gate to start or switch categories.
   - Require a long press or simple confirmation before moving between major sections.
   - **Acceptance**: category changes cannot happen without a caregiver action.

## Implementation Notes
- Keep scene layouts simple and avoid overlapping touch targets.
- Persist sound settings across refreshes and avoid accidental long-press text selection.
- Support a calm/quiet mode for lower sensory input.

## Suggested Roadmap
- `P1`: audio prompts, timer, closing ritual
- `P2`: scene-level parent prompts, interaction limits
- `P3`: parent gate, persistent settings, accessibility adjustments

## Status
- [ ] Add audio vocabulary prompts
- [ ] Limit each screen to 3 primary interactions
- [ ] Add session timer and offline transition
- [ ] Add visible caregiver prompts in each scene
- [ ] Add a parent gate for category switching

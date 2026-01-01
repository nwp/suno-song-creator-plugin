---
name: Review Suno Song
description: This skill should be used when the user asks to "review my Suno song", "check Suno prompt quality", "evaluate song lyrics", "review this prompt", "check for AI-slop", "validate my Suno prompt", or wants independent quality assessment of Suno prompts and lyrics. Launches the quality-reviewer sub-agent to evaluate material against professional production standards including AI-slop detection, cliché detection, poor quality lines, rhyme assessment, style-lyric consistency, gender-pronoun consistency, and general taste.
version: 1.0.0
---

# Review Suno Song

Launch an independent quality review of Suno prompts and lyrics using the quality-reviewer sub-agent. Get objective professional assessment without bias.

## When to Use This Skill

Use this skill to:
- Review existing song prompts before submission to Suno
- Evaluate lyrics for quality issues (AI-slop, clichés, awkward phrasing)
- Get feedback on prompt structure and specificity
- Check copyright safety (no artist/band/album names)
- Validate style-lyric consistency for genre
- Assess rhyme schemes and quality
- Identify areas for improvement before final version

## Two Usage Modes

### Mode 1: Review Saved Prompt File

When you have a saved prompt.md file:

```bash
/review-song path/to/prompt.md
```

The skill will:
1. Read the file automatically
2. Extract prompt sections and lyrics
3. Launch quality-reviewer sub-agent
4. Present structured feedback

### Mode 2: Review Direct Text

When pasting prompt + lyrics directly:

```bash
/review-song
```

The skill will:
1. Prompt you to paste your structured prompt
2. Prompt you to paste your lyrics
3. Extract genre/mood context
4. Launch quality-reviewer sub-agent
5. Present structured feedback

## What Gets Evaluated

### Prompt Quality (Structured Sections)

**Structure:**
- Proper colon-and-quotes format
- No blank lines between sections
- Required sections present (genre, vocal, instrumentation, production, mood)

**Specificity:**
- Concrete descriptors vs. vague abstractions
- Technical vocabulary appropriate to genre
- Clear production techniques described

**Copyright Safety:**
- No artist names
- No band names
- No album titles
- No song titles
- Style descriptions focus on characteristics

**Genre Alignment:**
- Descriptors match genre conventions
- No contradictory elements
- Appropriate technical vocabulary

### Lyric Quality (Comprehensive Assessment)

**AI-Slop Detection:**
- Technology clichés: "neon lights", "digital", "echoes in the void"
- Abstract vagueness: "whispers in the dark", "fragments of", "fading memories"
- Generic imagery without concrete context

**Cliché Detection:**
- Romantic clichés: "heart on my sleeve", "falling for you", "love at first sight"
- General song clichés: "time will heal", "reach for the stars", "follow your dreams"
- Genre-specific clichés: Country (trucks/beer), Pop (dancing all night), Rock (breaking chains)
- Lazy rhyming with cliché phrases

**Poor Lyric Quality:**
- Awkward or clunky phrasing that doesn't flow
- Grammatical issues (unless intentional for style)
- Nonsensical or confusing imagery
- Mixed metaphors that contradict
- Lines that are too wordy or verbose
- Unintentionally funny or cringe-worthy lines
- Excessive filler words ("yeah yeah yeah" without purpose)
- Trying too hard to be clever/poetic and failing
- Inconsistent voice or jarring tone shifts

**Specificity vs. Abstractions:**
- Concrete nouns, specific numbers, physical details
- Sensory details vs. vague generalities
- "Show don't tell" principle

**Metaphor Consistency:**
- Central metaphor maintained throughout
- No contradictory imagery
- Coherent metaphor system

**Syllable Patterns:**
- Consistency within sections
- Singability without awkward rushing
- Natural emphasis patterns

**Rhyme Scheme and Quality:**
- Pattern identification (AABB, ABAB, ABCB, etc.)
- Rhyme quality (exact, slant, forced)
- Genre appropriateness
- Avoidance of over-reliance on easy rhymes

**Style-Lyric Consistency:**
- Content matches genre expectations
- Tone alignment (playful pop vs. serious ballad)
- Language complexity appropriate for style
- Subject matter fits genre conventions

**Gender-Pronoun Consistency:**
- POV clarity for vocalist gender
- Narrative context for pronoun usage
- Check for confusing or contradictory pronouns

**General Taste and Quality:**
- Catchiness and memorability
- Flow and singability
- Emotional resonance and authenticity
- Hook strength
- Professional polish vs. amateur feel

## Output Format

Receive structured feedback categorized by severity:

```
**Prompt Quality: X/10**
- Structure: [✓/⚠️/✗] [comment]
- Specificity: [✓/⚠️/✗] [comment]
- Copyright: [✓/✗] [comment]
- Genre alignment: [✓/⚠️/✗] [comment]

**Lyric Quality: X/10**
- AI-slop: [count] instances - [specific examples with line numbers]
- Clichés: [count] instances - [specific examples with line numbers]
- Poor quality lines: [count] instances - [specific examples with line numbers and reasons]
- Specificity: [✓/⚠️/✗] [comment]
- Metaphor consistency: [✓/⚠️/✗] [comment]
- Syllable patterns: [✓/⚠️/✗] [comment]
- Rhyme scheme: [✓/⚠️/✗] [pattern and quality assessment]
- Style-lyric fit: [✓/⚠️/✗] [genre expectations match]
- Gender-pronoun consistency: [✓/⚠️/✗] [POV clarity]
- General taste: [X/10] [overall quality assessment]

**Recommendations (by severity):**

CRITICAL (must fix):
1. [Specific issue with line numbers and reasoning]

SUGGESTED (strong recommendations):
1. [Specific improvement with suggested replacement]

OPTIONAL (nice-to-have):
1. [Refinement suggestion with reasoning]
```

## How It Works

### Internal Process

1. **Extract Content:**
   - If file path provided: Read file, parse YAML frontmatter, extract prompt sections and lyrics
   - If direct text: Prompt user to paste content

2. **Identify Context:**
   - Extract genre from prompt
   - Extract mood from prompt
   - Extract vocal style from prompt

3. **Sanitize Input:**
   - Remove any mention of "AI-generated", "Claude", "LLM"
   - Frame neutrally: "Evaluate this song material for professional quality"

4. **Launch Sub-Agent:**
   - Use Task tool to invoke quality-reviewer agent
   - Pass only: prompt text, lyrics text, minimal context (genre/mood/vocals)
   - Sub-agent has independent context (no shared conversation history)

5. **Present Results:**
   - Display structured feedback to user
   - Categorize recommendations by severity
   - Provide specific line numbers and actionable suggestions

### Context Isolation

The quality-reviewer sub-agent:
- Has NO knowledge of conversation history
- Does NOT know content is AI-generated (if it is)
- Receives ONLY the prompt text, lyrics text, and basic context
- Evaluates against professional production standards
- Provides unbiased, independent quality assessment

## Usage Examples

### Example 1: Review Saved File

```bash
User: /review-song /Users/nathan/Development/suno/pop-songs-i-love/fixer-upper/prompt.md

Agent: Reading file and extracting content...
Agent: Launching quality-reviewer sub-agent...

[Quality reviewer provides feedback]

Agent: Review complete! Found 2 suggested improvements and 1 optional refinement.
```

### Example 2: Review Direct Text

```bash
User: /review-song

Agent: Please paste your structured prompt (genre, vocal, instrumentation, production, mood):

User: [Pastes prompt text]

Agent: Please paste your lyrics:

User: [Pastes lyrics]

Agent: Extracting context and launching quality-reviewer sub-agent...

[Quality reviewer provides feedback]
```

## Important Notes

**Automatic from Main Workflow:**
When invoked from the main Suno Song Creator workflow (Step 7.5), this skill receives the prompt and lyrics automatically - no user input needed.

**Standalone Usage:**
When invoked independently with `/review-song`, the user must provide either a file path or paste content manually.

**No Bias:**
The quality-reviewer sub-agent has no knowledge of how the content was created. It evaluates all material against the same professional standards.

**Iterative:**
Can be run multiple times on the same material to verify improvements after applying recommendations.

## Implementation Details

**Tool Usage:**
- Uses Task tool to launch quality-reviewer sub-agent
- Uses Read tool when file path provided
- Uses AskUserQuestion for interactive text input when needed

**Processing Steps:**
1. Determine input mode (file path vs. direct text)
2. Extract or collect prompt + lyrics content
3. Parse to identify genre, mood, vocal style
4. Sanitize input (remove "AI", "generated", "Claude", "LLM")
5. Construct neutral review request
6. Launch quality-reviewer via Task tool with subagent_type="quality-reviewer"
7. Receive and display structured feedback

**Context Sanitization Example:**
```
❌ Bad input to sub-agent:
"Review this AI-generated Suno prompt I just created with Claude"

✅ Good input to sub-agent:
"Evaluate this bubblegum pop song prompt and lyrics for professional production quality"
```

## Skill Integration

This skill can be:
- Invoked directly via `/review-song` for standalone reviews
- Called from main Suno Song Creator workflow (Step 7.5)
- Used to review old prompts stored in project directories
- Used to review prompts created by other tools/methods

No matter the source, the quality-reviewer provides objective, professional assessment.
---
name: Research Artist for Suno
description: This skill should be used when the user asks to "research an artist", "analyze [artist] style", "study [song]", "look up [artist] patterns", or wants to explore musical patterns before creating a Suno song. Automatically launches song-researcher sub-agent for comprehensive pattern analysis from web sources.
version: 1.0.0
---

# Research Artist for Suno

Independently research artist styles and song patterns to inform Suno prompt creation. Get comprehensive analysis of lyrical structure, musical patterns, and production characteristics before writing a song.

## Purpose

This skill provides standalone artist/song research capabilities using the same automated research sub-agent used in the main Suno Song Creator workflow. Use it when you want to understand an artist's style before creating a song, or when you're exploring musical patterns for inspiration.

## When to Use This Skill

Use this skill when:
- Exploring an artist's style before song creation
- Studying specific song patterns for inspiration
- Researching multiple artists to compare styles
- Gathering pattern data for later use
- Learning about lyrical structures and techniques
- Understanding genre-specific production approaches

**Example triggers:**
- "Research Phoebe Bridgers' style"
- "Analyze Sabrina Carpenter's Manchild"
- "Study Taylor Swift's folklore era patterns"
- "Look up The National's lyrical patterns"
- "What are Bon Iver's signature characteristics?"

## Usage

### Research an Artist (General Style)

```bash
/research-artist Phoebe Bridgers
/research-artist The National
/research-artist boygenius
```

**What happens:**
1. Skill extracts artist name from your request
2. Launches song-researcher sub-agent automatically
3. Sub-agent performs web research (Genius, HookTheory, Spotify)
4. Sub-agent analyzes 3-4 representative songs
5. Returns structured research report with patterns

### Research a Specific Song

```bash
/research-artist Sabrina Carpenter - Manchild
/research-artist Phoebe Bridgers - Motion Sickness
/research-artist Taylor Swift - All Too Well
```

**What happens:**
1. Skill extracts artist name AND specific song
2. Launches song-researcher sub-agent
3. Sub-agent performs deep analysis of that specific song
4. Sub-agent also analyzes 2-3 other songs from same artist for context
5. Returns comprehensive report with song-specific patterns plus artist context

## Research Workflow

### Automated Web Research

The song-researcher sub-agent automatically:

**From Genius.com:**
- Fetches complete lyrics
- Extracts song structure markers (Verse, Chorus, Bridge)
- Collects annotations and context

**From HookTheory.com / Chord Sites:**
- Searches for chord progressions
- Extracts key signatures if available
- Notes musical theory elements

**From Spotify / Music Sites:**
- Identifies genre tags
- Finds similar artists
- Gathers production context

### Pattern Extraction

**Lyrical Patterns Analyzed:**
- **Syllable counts:** Lines per section, consistency patterns
- **Rhyme scheme:** AABB, ABAB, ABCB, loose/tight rhyming
- **Structure:** Verse/chorus/bridge line counts, repetition
- **Metaphors:** Central metaphor systems, imagery patterns
- **Vocabulary:** Characteristic word choices, formality level
- **Emotional arc:** Progression through song sections

**Musical Context:**
- **Chord progressions:** Common patterns, key signatures
- **Production style:** Recording techniques, instrumentation
- **Vocal delivery:** Range, dynamics, characteristic techniques

### Multi-Song Synthesis

When researching a specific song:
- **Primary analysis:** Deep dive into that specific song
- **Context songs:** Analyze 2-3 other representative tracks
- **Pattern synthesis:** Identify what's consistent (artist signature) vs. variable (song-specific)

When researching an artist generally:
- Analyzes 3-4 representative popular songs
- Identifies consistent patterns across catalog
- Notes variations and evolution

## Research Report Format

Receive a structured markdown report with:

```markdown
# Research Report: [Artist] - [Song if specified]

## Research Quality
- **Confidence Score:** [90-100% / 70-89% / 50-69% / <50%]
- **Sources Used:** Genius ✓/✗, Chords ✓/✗, Spotify/Context ✓/✗
- **Songs Analyzed:** [count] total
- **Primary Song:** [song name if specific]
- **Context Songs:** [other songs analyzed]

## Primary Song Analysis (if specific song)
### Lyrical Structure
- Syllable patterns: [X-Y per line, consistency notes]
- Rhyme scheme: [AABB/ABAB/ABCB/etc.]
- Verse structure: [lines, pattern]
- Chorus structure: [lines, pattern]

### Thematic Elements
- Central metaphor: [description]
- Emotional arc: [progression]
- Characteristic vocabulary: [word choices]
- Tone: [intimate/playful/melancholic/etc.]

### Musical Context
- Chord progression: [if available]
- Key: [if available]
- Production notes: [style, instrumentation]

## Artist Context
### Consistent Patterns (Artist Signature)
- Syllable tendencies: [consistent across songs]
- Rhyme preferences: [typical schemes]
- Metaphor approach: [concrete vs. abstract]
- Production style: [lo-fi/polished/etc.]

### Variations Across Songs
- [what changes song to song]
- [stylistic range]

## Recommendations for Suno Prompt

**Genre Section:**
```
genre: "[specific genre descriptors from research]"
```

**Vocal Section:**
```
vocal: "[delivery style, range, characteristics from research]"
```

**Lyrical Guidance:**
- Syllable targets: [X-Y verses, X-Y chorus]
- Rhyme scheme: [recommended pattern]
- Metaphor approach: [concrete/abstract balance]
- Tone: [recommended emotional register]

**Production Notes:**
```
instrumentation: "[from research]"
production: "[from research]"
recording: "[realism descriptors if applicable]"
```

## Research Limitations
- [What data was unavailable]
- [Sources that didn't have information]
- [Caveats about analysis]
```

## Confidence Scoring

**90-100% (Comprehensive):**
- All 3 sources provided data
- Multiple songs analyzed successfully
- Complete pattern extraction possible
- High certainty in recommendations

**70-89% (Good):**
- 2/3 sources provided data
- At least one complete song analyzed
- Patterns identified with reasonable confidence
- Recommendations solid but with some gaps

**50-69% (Basic):**
- 1/3 sources provided partial data
- Limited song analysis
- Patterns tentative
- Recommendations cautious

**<50% (Insufficient):**
- Very limited data available
- Artist/song not found or minimal info
- Proceed with caution
- Manual research may be needed

## Usage Examples

### Example 1: Research Artist Before Creating Song

```
User: /research-artist Phoebe Bridgers

Main Agent: "I'll research Phoebe Bridgers' style to understand her patterns..."
Main Agent: [Launches song-researcher sub-agent]

Song Researcher: [Fetches data from Genius (Motion Sickness, Scott Street, Kyoto)]
Song Researcher: [Searches for chord progressions on HookTheory]
Song Researcher: [Gathers genre context from Spotify/AllMusic]
Song Researcher: [Analyzes syllable patterns, rhyme schemes, metaphors]
Song Researcher: [Returns structured report]

Main Agent: "Research complete! Analyzed 3 songs: 'Motion Sickness', 'Scott Street', 'Kyoto'."
Main Agent: [Displays research report with patterns]

Key findings:
- Syllables: 8-10 per line in verses, 6-9 in chorus
- Rhyme: Loose ABCB, prefers slant rhymes over exact
- Metaphors: Concrete imagery (car crashes, specific places)
- Tone: Confessional, intimate, lo-fi aesthetic
- Production: Bedroom pop, minimal, soft dynamics
```

**User can then:** Use findings to inform Suno song creation, save report for reference, or continue main workflow with research context

### Example 2: Research Specific Song

```
User: /research-artist Sabrina Carpenter - Manchild

Main Agent: "I'll research Sabrina Carpenter's 'Manchild' in depth..."
Main Agent: [Launches song-researcher sub-agent]

Song Researcher: [Primary: Deep analysis of 'Manchild']
Song Researcher: [Context: Analyzes 'Nonsense', 'Feather' for patterns]
Song Researcher: [Synthesizes song-specific vs. artist-consistent patterns]
Song Researcher: [Returns structured report]

Main Agent: "Research complete! Primary song: 'Manchild' + context from 2 other tracks."
Main Agent: [Displays comprehensive report]

Key findings for 'Manchild':
- Syllables: 7-9 per line, very consistent
- Rhyme: AABB couplets, exact rhymes
- Metaphor: Extended "manchild" metaphor throughout
- Tone: Playful sarcasm, witty observations
- Production: Modern pop, bright, punchy

Artist context (from other songs):
- Consistent: Witty wordplay, relationship commentary
- Variable: 'Manchild' more sarcastic than usual romantic tracks
```

**User can then:** Understand specific song's unique qualities vs. artist's general style

### Example 3: Compare Multiple Artists

```
User: I want to understand the difference between Phoebe Bridgers and Julien Baker's styles

Main Agent: "I'll research both artists separately..."

[Researches Phoebe Bridgers]
[Researches Julien Baker]

Main Agent: "Here's the comparison based on research:

**Phoebe Bridgers:**
- Syllables: 8-10, looser
- Rhyme: Slant rhymes, loose ABCB
- Metaphors: Concrete imagery (places, objects)
- Production: Bedroom pop, soft

**Julien Baker:**
- Syllables: 9-11, tighter
- Rhyme: More exact rhymes, ABAB
- Metaphors: Religious imagery, abstract concepts
- Production: Lo-fi indie rock, emotional dynamics"
```

## Integration with Main Workflow

**Standalone usage:**
Use `/research-artist` independently when exploring styles before creating a song.

**Automatic usage in main workflow:**
When you use the main Suno Song Creator skill and mention an artist reference, the song-researcher sub-agent launches automatically—you don't need to call this skill manually.

**Example workflow:**
1. Use `/research-artist Phoebe Bridgers` to study style
2. Review research report
3. Later: "Create a sad indie folk song" (main Suno workflow)
4. Reference findings from earlier research when building prompt

**Note:** Research is NOT cached across sessions. Each invocation performs fresh web research.

## Error Handling

### Artist Not Found

If the artist is not found or has minimal data:
- Sub-agent tries alternative spellings
- Searches for similar artists
- Returns partial results with low confidence score
- Recommends manual research

**Example output:**
```
## Research Limitations
- Artist "XYZ" not found on Genius or Spotify
- Attempted alternative spellings with no results
- Confidence: <50% (Insufficient)
- Recommendation: Verify artist name spelling or try related artists
```

### Limited Data Available

If some sources provide data but others don't:
- Uses available sources
- Notes which sources failed
- Provides partial analysis
- Flags confidence score accordingly

**Example output:**
```
## Research Quality
- Sources Used: Genius ✓, Chords ✗ (not available), Spotify ✓
- Confidence: 65% (Basic)
- Note: Chord progressions not available for this artist
```

### Specific Song Not Found

If researching specific song that can't be located:
- Falls back to artist's popular songs
- Analyzes general style instead
- Notes in report that specific song unavailable

**Example output:**
```
## Research Limitations
- Specific song "XYZ" not found
- Analyzed 3 other popular songs instead: [list]
- General artist patterns provided
```

## Best Practices

**Before using:**
- Have artist name and/or song title ready
- Consider if you want general style or specific song analysis
- Be prepared to review structured report

**When reviewing results:**
- Check confidence score (>70% is good, <50% needs caution)
- Note which sources provided data
- Identify patterns vs. limitations
- Use recommendations as starting point, not rigid rules

**After research:**
- Save report if needed for later reference
- Use findings to inform Suno prompt sections
- Adapt patterns to your song's unique needs
- Don't copy verbatim—use as inspiration

## Technical Details

### Sub-Agent Architecture

This skill uses the Task tool to launch the song-researcher sub-agent:

```
Task tool:
  subagent_type: "song-researcher"
  description: "Research artist patterns"
  prompt: "Research [Artist] - [Song if mentioned]. User wants to understand style patterns."
```

**Sub-agent tools:**
- **Read:** Access reference materials in `references/` directory
- **Grep:** Search reference materials for patterns
- **WebFetch:** Fetch content from Genius, HookTheory, Spotify
- **WebSearch:** Find artist pages, song pages, context

**Sub-agent context:**
- Independent context (no shared conversation history)
- No knowledge of skill invocation method
- Receives only artist/song names and research request
- Returns structured markdown report

### Reference Materials

Sub-agent can access:
- `../references/artist-research-guide.md` - Research techniques and analysis methods
- `../references/meta-tags-reference.md` - Meta tag patterns for Suno
- `../references/realism-descriptors.md` - Production vocabulary
- `../references/genre-clouds.md` - Genre characteristic patterns

These references inform analysis but are not included in report output.

## Limitations

**What this skill does NOT do:**
- Does not cache research across sessions
- Does not create Suno prompts (use main Suno Song Creator for that)
- Does not access paid/subscription music theory sites
- Does not analyze audio files directly
- Does not provide chord progressions if unavailable on web

**What it DOES do:**
- Automated web research from free sources
- Structured pattern extraction
- Multi-song comparative analysis
- Confidence-scored recommendations
- Graceful degradation when data limited

## Related Skills

**Main Suno Song Creator (`/suno-song-creator`):**
Use when you want to create a complete Suno prompt. Includes automated research when artist mentioned, plus prompt building, lyric writing, and file export.

**Review Suno Song (`/review-song`):**
Use after creating a prompt to get quality assessment from independent reviewer. Checks for AI-slop, clichés, rhyme quality, style-lyric fit.

## Skill Workflow Summary

1. **Extract:** Parse artist name and optional song from user request
2. **Launch:** Use Task tool to invoke song-researcher sub-agent
3. **Research:** Sub-agent performs automated web fetching from 3 sources
4. **Analyze:** Sub-agent extracts patterns (syllables, rhyme, metaphors, etc.)
5. **Synthesize:** Sub-agent compares across multiple songs if applicable
6. **Score:** Sub-agent rates confidence based on data quality
7. **Report:** Sub-agent returns structured markdown report
8. **Display:** Main agent presents findings to user
9. **Save (optional):** User can save report or use findings immediately

## Implementation Notes

**When invoked:**
- Parse user input for artist name and optional song
- Construct research request for sub-agent
- Launch via Task tool
- Wait for structured report
- Display results to user

**Input variations handled:**
- "Phoebe Bridgers" → artist-only research
- "Phoebe Bridgers - Motion Sickness" → specific song + context
- "Phoebe Bridgers Motion Sickness" (no dash) → parse correctly
- "Research Taylor Swift folklore" → artist + era hint

**Output handling:**
- Display full structured report
- Highlight confidence score prominently
- Note any limitations or missing data
- Provide actionable next steps

**No user input required:**
Artist/song name provided in initial skill invocation. Sub-agent performs research automatically and returns complete report.

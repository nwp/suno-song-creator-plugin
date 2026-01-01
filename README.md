# Suno Song Creator

A comprehensive Claude Code plugin for creating professional, production-ready music prompts for Suno AI. This plugin transforms music creation from guesswork into a systematic, research-driven process that produces reliable, high-quality results through automated web research and intelligent sub-agents.

## Overview

Suno Song Creator guides you through the entire music prompt creation workflow:
- Interactive questioning to understand your vision
- **Automated artist/song research** via song-researcher sub-agent (NEW in v1.1.0)
- **Web pattern extraction** from Genius, HookTheory, Spotify (NEW in v1.1.0)
- Structured prompt building within 1000 character limit
- Model and parameter selection based on genre
- Professional lyric writing with meta tags
- Copyright-safe style descriptions (no artist/album/song names)
- AI-slop avoidance for authentic, human-centered lyrics
- **Independent quality review** via quality-reviewer sub-agent
- Automatic file export to organized project directories

## Features

### 🎯 Comprehensive 10-Step Workflow

1. **Understand the Vision** - Interactive questioning to gather genre, mood, vocals, constraints
2. **Research (AUTOMATED)** - When artist mentioned, automatically launch song-researcher sub-agent for pattern analysis
3. **Select Model & Parameters** - Choose optimal Suno model (v4, v4.5, v4.5+, v5)
4. **Build Structured Prompt** - Genre, vocal, instrumentation, production, mood (within 1000 char limit)
5. **Configure Advanced Parameters** - MAX Mode, weirdness, style influence, exclusions
6. **Write Effective Lyrics** - Meta tags, syllable control, AI-slop avoidance
7. **Apply Realism & Genre Techniques** - Genre-specific strategies
8. **Quality Review (OPTIONAL)** - Launch quality-reviewer sub-agent for professional assessment
9. **Verify** - Character count validation
10. **Save to File** - Organized project-based export with all metadata

### 🎼 Genre-Specific Expertise

- **Acoustic/Folk**: Realism descriptors, MAX Mode, proximity effect
- **Electronic/EDM**: Synthesis control, anti-sawtooth strategies, sidechain techniques
- **Rock/Alternative**: Managing pop gravity wells, raw production, 90s aesthetics
- **Pop**: Vocal production, modern polish, radio-ready sound
- **And more**: Hip-hop, country, jazz, experimental

### 🔍 Automated Artist & Song Research (NEW in v1.1.0)

**Song-Researcher Sub-Agent** automatically analyzes artist styles when you mention them:

**Automated Web Research:**
- **Genius.com**: Fetches lyrics, analyzes structure, extracts annotations
- **HookTheory.com**: Searches chord progressions, harmonic patterns
- **Spotify/Music Sites**: Identifies genre tags, similar artists, production context

**Pattern Extraction:**
- Syllable counts per line (verses, chorus, bridge)
- Rhyme scheme analysis (AABB, ABAB, ABCB, etc.)
- Song structure patterns (lines per section, repetition)
- Metaphor usage and thematic elements
- Emotional arc progression
- Characteristic vocabulary and tone
- Production cues (instruments, recording style)

**Multi-Song Analysis:**
- When specific song mentioned: Deep analysis of that song + 2-3 context songs
- When artist only: Analyzes 3-4 representative tracks
- Synthesizes patterns: artist signature vs. song-specific variations

**Confidence Scoring:**
- 90-100% (Comprehensive): All sources, multiple songs
- 70-89% (Good): 2/3 sources, solid patterns
- 50-69% (Basic): Limited data, proceed cautiously
- <50% (Insufficient): Manual research recommended

**Structured Output:**
Returns actionable recommendations ready for Suno prompt building:
- Genre descriptors
- Vocal style characteristics
- Lyrical structure patterns
- Production notes
- Research limitations (missing data noted)

### 🚫 AI-Slop Avoidance

Comprehensive guidance to avoid generic AI lyric clichés:
- Overused technology words (neon, static, wire, circuits)
- Generic abstractions (echoes, shadows, void, broken)
- Ghost in the Machine themes
- Provides concrete, human-centered alternatives
- Self-review checklists for authenticity

### 🤖 Intelligent Sub-Agents

**Two specialized sub-agents provide automated analysis with independent context:**

#### Song-Researcher Agent (NEW in v1.1.0)
- **Purpose**: Automated artist/song pattern analysis
- **Tools**: WebFetch, WebSearch, Read, Grep
- **Triggers**: When you mention an artist in your request
- **Process**:
  - Fetches data from Genius, HookTheory, Spotify
  - Extracts lyrical patterns (syllables, rhyme, structure)
  - Analyzes 1-4 songs depending on specificity
  - Synthesizes artist signature vs. song-specific patterns
  - Returns structured report with recommendations
- **Independence**: No shared context - evaluates objectively
- **Output**: Actionable recommendations for prompt sections

#### Quality-Reviewer Agent
- **Purpose**: Professional quality assessment of prompts/lyrics
- **Tools**: Read, Grep
- **Triggers**: Optionally at Step 8, or via `/review-song`
- **Process**:
  - Evaluates prompt structure, specificity, copyright safety
  - Detects AI-slop, clichés, poor quality lines
  - Analyzes syllable patterns, rhyme schemes, metaphors
  - Checks style-lyric consistency, gender-pronoun clarity
  - Rates overall quality (X/10)
- **Independence**: No shared context - unbiased assessment
- **Output**: Categorized recommendations (CRITICAL/SUGGESTED/OPTIONAL)

### 📋 Additional Skills

**This plugin includes standalone skills for independent usage:**

#### `/review-song` - Independent Quality Review
- Review existing Suno prompts before submission
- Launch quality-reviewer sub-agent without creating new song
- Usage: `/review-song path/to/prompt.md` or `/review-song` (paste content)
- Get professional feedback on prompts created anywhere

#### `/research-artist` - Standalone Artist Research (NEW in v1.1.0)
- Research artist styles independently before song creation
- Launch song-researcher sub-agent for pattern exploration
- Usage: `/research-artist Phoebe Bridgers` or `/research-artist Sabrina Carpenter - Manchild`
- Explore multiple artists to compare styles
- Save research for later reference

### ©️ Copyright-Safe Style Descriptions

Ensures Suno accepts your prompts by avoiding:
- Artist names (Taylor Swift, Radiohead, etc.)
- Band names (Foo Fighters, The Beatles, etc.)
- Producer names (Rick Rubin, Max Martin, etc.)
- Album/song titles

**Instead, uses:**
- Genre + era + descriptors
- Scene/movement + geography
- Technical + emotional characteristics
- Time period anchoring

### 📁 Automatic File Organization

Saves complete prompts to organized directories:
```
project-name/
└── song-title-slug/
    └── prompt.md
```

Includes: model configuration, structured prompt, lyrics, research notes

## Installation

### Via Claude Code Plugin Manager

```bash
/plugin install https://github.com/nwp/suno-song-creator-plugin
```

### Manual Installation

1. Clone this repository:
```bash
git clone https://github.com/nwp/suno-song-creator-plugin.git
cd suno-song-creator-plugin
```

2. Install in Claude Code:
```bash
cc --plugin-dir /path/to/suno-song-creator-plugin
```

Or copy to your local plugins directory:
```bash
cp -r suno-song-creator-plugin ~/.claude/plugins/
```

## Usage

### Basic Usage

**Main Skill - Complete Song Creation:**

```
Create a Suno prompt for a melancholic indie folk song
```

```
Help me write a Suno song like Phoebe Bridgers
```

```
Generate a dark electronic track with 80s synth vibes
```

**Standalone Skills:**

```
/research-artist Phoebe Bridgers
```
*Researches artist patterns independently for later use*

```
/research-artist Sabrina Carpenter - Manchild
```
*Deep analysis of specific song + artist context*

```
/review-song path/to/prompt.md
```
*Independent quality review of existing prompt*

### Interactive Workflow

The skill will guide you through:

1. **Clarifying questions** about genre, mood, vocals, constraints
2. **Artist research** if you mention specific artists
3. **Model selection** based on your genre and quality needs
4. **Prompt building** with proper structure and formatting
5. **Lyric creation** with meta tags and authenticity checks
6. **File export** to your project directory

### Example Interaction

```
You: I want a sad song like Phoebe Bridgers' Motion Sickness

Claude: I'll research Phoebe Bridgers' "Motion Sickness" to understand the style...
        [Automatically launches song-researcher sub-agent]

Song-Researcher: [Fetches lyrics from Genius for "Motion Sickness"]
                 [Analyzes "Scott Street" and "Kyoto" for artist context]
                 [Searches HookTheory for chord progressions]
                 [Gathers genre tags from Spotify]
                 [Extracts patterns: syllables, rhyme, metaphors, tone]
                 [Returns structured research report]

Claude: Research complete! Analyzed "Motion Sickness" + 2 context songs.
        Confidence Score: 85% (Good)

        Key findings:
        - Syllables: 8-10 per line in verses, 6-9 in chorus
        - Rhyme: Loose ABCB, prefers slant rhymes
        - Metaphors: Concrete imagery (car crashes, specific places)
        - Tone: Confessional, intimate, lo-fi aesthetic

        Based on research, I'll create an indie folk prompt with:
        - Intimate, confessional lyrics following analyzed patterns
        - Soft female alto vocals with whisper-to-belt delivery
        - Lo-fi bedroom pop production
        - Melancholic mood with vulnerable-to-defiant arc

        [Creates complete structured prompt with copyright-safe descriptors]
        [Writes original lyrics avoiding AI clichés using researched patterns]
        [Optionally launches quality-reviewer for assessment]
        [Saves to organized project directory]
```

## Configuration

No configuration required! The skill works out of the box.

Optional: Customize project organization by specifying project names in your requests:
```
Create a song for my "Summer Vibes" album
```

## Understanding Suno Models

The skill helps you choose the right model:

| Model | Best For | Strengths | Limitations |
|-------|----------|-----------|-------------|
| **v5** | Acoustic, pop, vocals-first | Cleanest audio, natural vocals | Adds intro vocals, conservative |
| **v4.5** | Heavy genres, reliable results | Workhorse, consistent | May mangle lyrics |
| **v4.5+** | Creative experimentation | Interesting surprises | Unstable, random elements |
| **v4** | Intentional chaos | Unpredictable brilliance | Poor adherence, outdated |

## Key Concepts

### Genre Clouds

Suno uses co-occurrence patterns ("genre clouds") where related genres are linked. Example: Rock has 315 billion links to pop, creating a gravity well. The skill teaches strategies to escape these gravity wells.

### Structured Prompting

Uses colon-and-quotes format for maximum clarity:
```
genre: "indie folk rock, 2020s bedroom pop aesthetic"
vocal: "soft female alto, intimate delivery"
instrumentation: "fingerpicked acoustic guitar, warm bass"
production: "lo-fi intimacy, tape warmth"
mood: "melancholic, nostalgic"
```

### Meta Tags

Inline lyrics formatting for section control:
```
[Verse 1 | intimate delivery | sparse instrumentation]
Lyrics here

[Chorus | anthemic | full production]
Chorus lyrics here
```

### Realism Descriptors

Technical recording engineer language for acoustic music:
- Proximity effect
- Room tone
- Single-mic capture
- Natural dynamics

## Plugin Structure

```
suno-song-creator-plugin/
├── .claude-plugin/
│   └── plugin.json                 # Plugin manifest
└── skills/
    └── suno-song-creator/
        ├── SKILL.md                # Main skill (v1.1.0)
        ├── agents/                 # Sub-agents for specialized tasks
        │   ├── quality-reviewer.md    # Quality assessment agent
        │   └── song-researcher.md     # Artist/song research agent (NEW)
        ├── skills/                 # Additional standalone skills
        │   ├── review-song/           # Independent quality review
        │   │   └── SKILL.md
        │   └── research-artist/       # Independent artist research (NEW)
        │       └── SKILL.md
        ├── references/             # Reference documentation
        │   ├── genre-clouds.md
        │   ├── meta-tags-reference.md
        │   ├── realism-descriptors.md
        │   ├── model-comparison.md
        │   └── artist-research-guide.md
        ├── examples/               # Working prompt examples
        │   ├── acoustic-folk-prompt.md
        │   ├── electronic-edm-prompt.md
        │   └── rock-alternative-prompt.md
        └── utils/                  # Utility templates
            ├── quality-review-prompt.md
            └── research-report-template.md (future)
```

## Reference Files

The skill includes comprehensive reference documentation:

- **genre-clouds.md** - Understanding genre co-occurrence patterns
- **meta-tags-reference.md** - Complete catalog of Suno meta tags
- **realism-descriptors.md** - Technical vocabulary for acoustic production
- **model-comparison.md** - Detailed Suno model comparison
- **artist-research-guide.md** - How to research artists effectively (used by song-researcher agent)

## Example Prompts

The skill includes three complete working examples:

- **acoustic-folk-prompt.md** - Indie folk/singer-songwriter
- **electronic-edm-prompt.md** - Dark synthwave/EDM
- **rock-alternative-prompt.md** - Alternative rock/grunge

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Test thoroughly with Claude Code
5. Submit a pull request

### Areas for Contribution

- Additional genre examples (metal, jazz, classical, etc.)
- More artist research patterns
- Enhanced meta tag documentation
- Translations to other languages

## Version History

- **1.1.0** - Added automated artist/song research via song-researcher sub-agent
  - Automated web fetching from Genius, HookTheory, Spotify
  - Pattern extraction (syllables, rhyme, structure, metaphors)
  - Multi-song synthesis (specific song + context songs)
  - Confidence scoring and structured reports
  - New `/research-artist` standalone skill for independent research
  - Updated workflow to 10 steps with automated research in Step 2
- **1.0.0** - Added quality-reviewer sub-agent for independent quality assessment
  - Professional prompt/lyric review via `/review-song` skill
  - AI-slop detection, cliché detection, poor quality line identification
  - Syllable pattern, rhyme scheme, metaphor consistency analysis
  - Style-lyric fit and gender-pronoun consistency checks
  - Categorized recommendations (CRITICAL/SUGGESTED/OPTIONAL)
- **0.6.0** - Added 1000 character limit guidance with optimization strategies
- **0.5.0** - Added copyright-safe style descriptions
- **0.4.0** - Added AI-slop avoidance guidance
- **0.3.0** - Added automatic file export
- **0.2.0** - Added interactive questioning and artist research
- **0.1.0** - Initial release

## License

MIT License - see [LICENSE](LICENSE) file for details

## Acknowledgments

Based on ["The Complete Guide to Mastering Suno: Advanced Strategies for Professional Music Generation"](https://www.notion.so/The-Complete-Guide-to-Mastering-Suno-Advanced-Strategies-for-Professional-Music-Generation-2d6ae744ebdf8024be42f6645f884221) - A comprehensive guide to understanding Suno's probabilistic nature, genre clouds, advanced prompting strategies, and production techniques.

## Support

For issues, questions, or suggestions:
- Open an issue on [GitHub](https://github.com/nwp/suno-song-creator-plugin/issues)
- Contributions and feedback welcome!

## Related Resources

- [Suno AI](https://suno.ai/) - The AI music generation platform
- [Claude Code](https://claude.ai/claude-code) - AI coding assistant
- [Genius.com](https://genius.com/) - Lyric analysis
- [HookTheory.com](https://www.hooktheory.com/) - Music theory analysis
- [N8+GR8](https://suno.com/@nwp) - My Suno profile

---

**Made with ❤️ for the Suno community**

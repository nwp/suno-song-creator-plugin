# Suno Song Creator

A comprehensive Claude Code skill for creating professional, production-ready music prompts for Suno AI. This skill transforms music creation from guesswork into a systematic, research-driven process that produces reliable, high-quality results.

## Overview

Suno Song Creator guides you through the entire music prompt creation workflow:
- Interactive questioning to understand your vision
- Web research of artist styles and song structures
- Structured prompt building within 1000 character limit
- Model and parameter selection based on genre
- Professional lyric writing with meta tags
- Copyright-safe style descriptions (no artist/album/song names)
- AI-slop avoidance for authentic, human-centered lyrics
- Automatic file export to organized project directories

## Features

### 🎯 Comprehensive 7-Step Workflow

1. **Understand the Vision** - Interactive questioning and artist research
2. **Select Model & Parameters** - Choose optimal Suno model (v4, v4.5, v4.5+, v5)
3. **Build Structured Prompt** - Genre, vocal, instrumentation, production, mood (within 1000 char limit)
4. **Configure Advanced Parameters** - MAX Mode, weirdness, style influence, exclusions
5. **Write Effective Lyrics** - Meta tags, syllable control, AI-slop avoidance
6. **Apply Realism & Genre Techniques** - Genre-specific strategies
7. **Save to File** - Organized project-based export

### 🎼 Genre-Specific Expertise

- **Acoustic/Folk**: Realism descriptors, MAX Mode, proximity effect
- **Electronic/EDM**: Synthesis control, anti-sawtooth strategies, sidechain techniques
- **Rock/Alternative**: Managing pop gravity wells, raw production, 90s aesthetics
- **Pop**: Vocal production, modern polish, radio-ready sound
- **And more**: Hip-hop, country, jazz, experimental

### 🔍 Artist & Song Research

Built-in web research capabilities for analyzing:
- **Genius.com**: Lyrical structure, syllable counts, rhyme schemes
- **HookTheory.com**: Chord progressions, harmonic analysis
- **Spotify**: Similar artists, genre tags, production context

### 🚫 AI-Slop Avoidance

Comprehensive guidance to avoid generic AI lyric clichés:
- Overused technology words (neon, static, wire, circuits)
- Generic abstractions (echoes, shadows, void, broken)
- Ghost in the Machine themes
- Provides concrete, human-centered alternatives
- Self-review checklists for authenticity

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

Simply invoke the skill in Claude Code:

```
Create a Suno prompt for a melancholic indie folk song
```

```
Help me write a Suno song like Phoebe Bridgers
```

```
Generate a dark electronic track with 80s synth vibes
```

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
You: I want a sad song like Phoebe Bridgers

Claude: I'll research Phoebe Bridgers' style and create a prompt for you.
        [Researches on Genius.com and Spotify]

        Based on my research, I'll create an indie folk prompt with:
        - Intimate, confessional lyrics (4-line verses, 8-10 syllables)
        - Soft female alto vocals with whisper-to-belt delivery
        - Lo-fi bedroom pop production
        - Melancholic mood with vulnerable-to-defiant arc

        [Creates complete structured prompt with copyright-safe descriptors]
        [Writes original lyrics avoiding AI clichés]
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

## Reference Files

The skill includes comprehensive reference documentation:

- **genre-clouds.md** - Understanding genre co-occurrence patterns
- **meta-tags-reference.md** - Complete catalog of Suno meta tags
- **realism-descriptors.md** - Technical vocabulary for acoustic production
- **model-comparison.md** - Detailed Suno model comparison
- **artist-research-guide.md** - How to research artists effectively

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

---

**Made with ❤️ for the Suno community**

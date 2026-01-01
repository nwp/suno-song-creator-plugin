# Changelog

All notable changes to the Suno Song Creator skill will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2025-01-01

### Added

- **Genre-Specific Evaluation Refinement** - Quality review now adapts evaluation criteria based on genre and user preferences
  - 4 interactive refinement questions before quality review:
    1. Specificity Standard (Strict Commercial / Balanced / Authentic Priority)
    2. Contemporary vs. Timeless Balance (Maximum Timeless / Balanced / Current Focus)
    3. Wordiness Tolerance (Strict Economy / Moderate / Narrative Freedom)
    4. Show vs. Tell Balance (Strongly Favor Showing / Balanced / Allow Direct)

- **Pop Evaluation Guide** (`references/pop-evaluation-guide.md`)
  - Flags brand names as CRITICAL for pop (licensing risks, dating issues, commercial feel)
  - Strict commercial standards for radio-ready pop production
  - Wordiness thresholds: 6-8 words/line, flag 10+ as SUGGESTED, 12+ as CRITICAL
  - Show/Tell ratio: 70/30 target for pop
  - Contemporary dating assessment (2025 context, not 2020s)

- **Indie/Folk Evaluation Guide** (`references/indie-folk-evaluation-guide.md`)
  - Allows brand names as ACCEPTABLE for authenticity and character detail
  - Authentic/artistic priority over commercial considerations
  - Wordiness acceptable: 10-12+ words/line for narrative depth
  - Show/Tell ratio: 50/50 balanced for confessional storytelling
  - Specificity as strength (opposite of pop philosophy)

- **Genre Evaluation Matrix** (`references/genre-evaluation-matrix.md`)
  - Cross-genre comparison table for quick reference
  - Decision trees for brand names, wordiness, contemporary references
  - Sub-genre variations and blending strategies
  - Regional & cultural considerations

- **Enhanced Quality-Reviewer Agent** (`agents/quality-reviewer.md`)
  - Processes user-specified evaluation parameters
  - Reads genre-specific reference guides
  - Applies parameter-driven severity ratings (CRITICAL/SUGGESTED/OPTIONAL)
  - Falls back to genre-detected defaults for backward compatibility
  - ~350 lines added for parameter processing logic

- **Updated Review Workflow** (Main SKILL.md Step 7)
  - Asks 4 refinement questions before launching quality-reviewer
  - Constructs parameterized prompts with user preferences
  - Appends evaluation parameters section to review request
  - Maintains backward compatibility (works without parameters)

- **Updated /review-song Skill** (`skills/review-song/SKILL.md`)
  - Same 4 refinement questions for standalone reviews
  - Parameter construction and passing to quality-reviewer
  - ~120 lines added for interactive refinement

- **Enhanced Quality Review Prompt Template** (`utils/quality-review-prompt.md`)
  - Documents evaluation parameters section format
  - Example parameterized review requests
  - Expected quality-reviewer behavior with parameters
  - Reference materials listing (pop guide, indie-folk guide, matrix)

- **Test Documentation** (`TEST-CASES.md`)
  - Comprehensive test cases for genre-specific refinement
  - Pop song test: brand names flagged CRITICAL with strict settings
  - Indie folk test: same brands allowed with authentic settings
  - Backward compatibility test: genre defaults work without questions
  - Manual test instructions and success criteria

### Changed

- **Main Workflow Step 7** - Quality review now includes genre-specific refinement questions
- **Review-Song Skill** - Added pre-evaluation questions using AskUserQuestion tool
- **Skill Description** - Updated to mention genre-specific refinement capability

### Fixed

- **Critical Bug: Specificity Evaluation in Pop Music** - Fixed issue where brand names (PlayStation, Pokémon, Costco, Spotify) were incorrectly praised as "EXCELLENT specificity" strengths in pop music
  - **Problem:** Quality-reviewer used one-size-fits-all evaluation, treating concrete brand names as universally good
  - **Impact:** Pop songs received bad advice to include brand names, creating licensing risks and dating issues
  - **Solution:** Genre-specific evaluation standards that flag brands as CRITICAL for pop but ACCEPTABLE for indie/folk
  - **Root Cause:** Lack of genre-aware evaluation criteria and user control over commercial vs. artistic priorities

- **Contemporary Dating Accuracy** - Now correctly assesses references as "2025 context" instead of "2020s audience"

### Technical Details

**Architecture:**
- AskUserQuestion tool added to wrapper layer (main skill + review-song skill)
- Parameters passed to quality-reviewer sub-agent via prompt section
- Context isolation maintained (sub-agent has no conversation history)
- Two-phase approach: user questions → parameterized evaluation

**Backward Compatibility:**
- Existing workflows continue to work
- Genre-detected defaults applied when parameters not provided
- Pop → Strict Commercial defaults
- Indie/Folk → Authentic Priority defaults

**Files Modified:**
- `SKILL.md` - Version bump to 1.2.0, Step 7 enhanced
- `agents/quality-reviewer.md` - ~350 lines added for parameter processing
- `skills/review-song/SKILL.md` - ~120 lines added for refinement questions
- `utils/quality-review-prompt.md` - Parameter section documentation added

**Files Created:**
- `references/pop-evaluation-guide.md` - ~800 lines
- `references/indie-folk-evaluation-guide.md` - ~650 lines
- `references/genre-evaluation-matrix.md` - ~300 lines
- `TEST-CASES.md` - ~250 lines
- `CHANGELOG.md` - This file

**Benefits:**
- Pop songs: Flags brand names as CRITICAL (licensing, dating, commercial feel)
- Indie/Folk songs: Allows brands for authenticity and character detail
- User control: Commercial vs. artistic priorities user-specified
- Transparent: User sees evaluation preferences applied
- Flexible: Same song can be reviewed with different criteria

## [1.1.0] - 2024-12-XX

### Added

- **Automated Artist Research** - song-researcher sub-agent for pattern analysis
  - Genius.com lyrics fetching and structure analysis
  - HookTheory/chord site integration
  - Spotify genre and similar artist context
  - Multi-song comparative analysis
  - Confidence scoring for research quality
  - Graceful degradation when data limited

- **Quality Review** - Independent professional assessment via quality-reviewer sub-agent
  - AI-slop detection (generic phrases like "neon lights", "echoes in the void")
  - Cliché detection (overused phrases, tired metaphors)
  - Poor quality lines (awkward phrasing, nonsensical imagery)
  - Specificity vs. abstractions analysis
  - Metaphor consistency checking
  - Syllable pattern validation
  - Rhyme scheme and quality assessment
  - Style-lyric consistency (content matches genre)
  - Gender-pronoun consistency (POV clarity)
  - General taste (catchiness, flow, memorability)

- **Automated File Export** - Organized prompt library system
  - Project-based directory structure
  - Markdown files with complete configuration
  - Session context persistence
  - Efficient project name collection
  - Git-friendly format

### Changed

- **Workflow:** Added Steps 7 (Quality Review) and 8 (Save to File)
- **Interactive Questioning:** Enhanced with project name handling

## [1.0.0] - 2024-XX-XX

### Added

- Initial release of Suno Song Creator skill
- Seven-step workflow for creating Suno prompts
- Colon-and-quotes structured prompt format
- 1000 character limit handling
- Genre-specific strategies
- Meta tag stacking
- Vocal persona building (4-layer system)
- AI-slop avoidance techniques
- Copyright-safe style descriptions
- Character counting utilities (Python + Node.js)
- Interactive questioning via AskUserQuestion
- Model selection guidance (v5, v4.5, v4.5+, v4)
- Parameter optimization (MAX Mode, Weirdness, Style Influence)
- Lyric writing best practices
- Genre gravity well escape strategies
- Reference materials (genre-clouds, meta-tags, realism-descriptors, model-comparison)
- Example prompts (acoustic-folk, electronic-edm, rock-alternative)

---

## Version Naming Convention

- **Major version (X.0.0):** Breaking changes, major architectural overhauls
- **Minor version (0.X.0):** New features, significant enhancements (backward compatible)
- **Patch version (0.0.X):** Bug fixes, minor improvements (backward compatible)

## Future Roadmap

Potential enhancements for future versions:

### v1.3.0 - Expanded Genre Support
- Rock evaluation guide
- Country evaluation guide
- Electronic/EDM evaluation guide
- Hip-Hop evaluation guide
- Sub-genre specific refinement (Bubblegum Pop vs. Indie Pop)

### v1.4.0 - User Experience Improvements
- "Use genre defaults" option to skip refinement questions
- Evaluation preference caching (don't ask every time in session)
- Preset profiles: "Commercial Radio Ready", "Artistic Freedom", "Experimental"
- Quick refinement mode (2 questions instead of 4)

### v1.5.0 - Advanced Features
- Iterative refinement history tracking
- Before/after comparison mode
- Quality score trends over revisions
- Automated A/B testing suggestions
- Genre-blending refinement (hybrid evaluation)

### v2.0.0 - Major Enhancement
- Multi-language support for lyrics
- Cultural context awareness
- Regional dialect handling
- Market-specific evaluation (US/UK/AU/etc.)
- Professional producer feedback simulation

---

[1.2.0]: https://github.com/your-repo/suno-song-creator-plugin/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/your-repo/suno-song-creator-plugin/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/your-repo/suno-song-creator-plugin/releases/tag/v1.0.0

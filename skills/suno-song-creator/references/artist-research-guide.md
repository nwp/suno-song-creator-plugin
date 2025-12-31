# Artist and Song Research Guide

This reference provides comprehensive guidance for researching artists, songs, and genres to inform Suno prompt creation. Use web research tools to analyze lyrical patterns, musical structures, and production styles.

## Why Research Matters

Understanding existing music helps create better prompts by:
- Identifying specific lyrical patterns and structures
- Discovering characteristic production elements
- Finding precise artist comparisons for personas
- Understanding genre conventions and innovations
- Learning effective metaphor usage and emotional arcs

**Critical distinction:** Research is for understanding patterns and gaining inspiration, not for copying. Create original work informed by studied structures.

## Research Sources and Their Uses

### Genius.com - Lyrical Analysis

**Best for:**
- Complete lyrics with annotations
- Song structure breakdowns
- Artist style analysis
- Metaphor and theme identification
- Fan and critic interpretations

**How to use:**
1. Search for artist or song
2. Read verified lyrics to understand structure
3. Study annotations for meaning and technique
4. Note verse/chorus patterns and rhyme schemes
5. Identify characteristic phrases or techniques
6. Check "Song Facts" for production insights

**What to extract:**
- Verse structure (how many lines, syllable counts)
- Chorus structure (repetition patterns, hooks)
- Bridge characteristics (contrast elements)
- Rhyme schemes (AABB, ABAB, etc.)
- Metaphor consistency (single vs. multiple)
- Emotional progression (verse → chorus arc)
- Characteristic vocabulary or phrases

**Example search queries:**
- "Phoebe Bridgers Motion Sickness lyrics" - Study indie folk structure
- "Kendrick Lamar HUMBLE lyrics" - Analyze hip-hop patterns
- "Radiohead Karma Police lyrics" - Examine alternative rock metaphors

### HookTheory.com - Musical Structure

**Best for:**
- Chord progressions and harmonic analysis
- Melodic patterns and contours
- Song section breakdowns
- Music theory insights
- Popular progression databases

**How to use:**
1. Search TheoryTab database for songs
2. Analyze chord progression patterns
3. Study melodic movement and intervals
4. Note common progressions in genre
5. Identify harmonic characteristics

**What to extract:**
- Common chord progressions (I-V-vi-IV, etc.)
- Harmonic rhythm (how often chords change)
- Section contrast (verse vs. chorus harmonies)
- Tension and resolution patterns
- Genre-specific harmonic choices

**Example research:**
- Search "indie folk chord progressions" - Find common patterns
- Analyze specific song progression - Understand harmonic movement
- Study genre trends - Discover characteristic choices

**Translating to Suno prompts:**
- "I-V-vi-IV progression" → `genre: "pop-influenced, classic progression"`
- Complex jazz chords → `genre: "jazz harmony, extended chords"`
- Modal progressions → `genre: "Dorian mode, modal harmony"`

### Spotify - Genre and Artist Context

**Best for:**
- Discovering similar artists
- Understanding genre characteristics
- Finding related songs and albums
- Reading production credits
- Exploring playlists and categorizations

**How to use:**
1. Search for artist or genre
2. Check "Fans Also Like" section
3. Read artist bio and genre tags
4. Explore related playlists
5. Note production credits and collaborators

**What to extract:**
- Similar artists for persona anchoring
- Genre tags and micro-genres
- Production team patterns
- Era and regional context
- Related movements or scenes

**Example research:**
- Artist page → Similar artists for "reminiscent of X + Y" descriptors
- Genre playlists → Common production characteristics
- Credits → Identify signature producers or sounds

### Additional Research Sources

**AllMusic.com:**
- Comprehensive artist biographies
- Album reviews with production details
- Genre classifications and histories
- Influence and legacy information

**RateYourMusic.com:**
- User-generated genre tags
- Detailed release information
- Descriptor tags (atmospheric, aggressive, etc.)
- Similar artist recommendations

**YouTube (official channels and analysis):**
- Production breakdowns
- "Making of" documentaries
- Live performance characteristics
- Producer interviews

## Research Workflow Examples

### Example 1: User Wants "Song Like Phoebe Bridgers"

**Step 1: Genius.com Research**

Search: "Phoebe Bridgers Motion Sickness"

**Findings:**
- Verse structure: 4-line stanzas, 8-10 syllables per line
- Intimate, confessional lyrics with specific details
- One central metaphor (emotional sickness) explored deeply
- Rhyme scheme: Loose, not strict (authenticity over form)
- Emotional arc: Vulnerability → Defiant acceptance
- Characteristic elements: Conversational tone, direct address

**Step 2: HookTheory Research**

Search: "Phoebe Bridgers chord progressions"

**Findings:**
- Often uses I-vi-IV-V with variations
- Modal borrowing (minor chords in major keys)
- Suspended chords for ambiguity
- Simple progressions with emotional depth
- Minimal harmonic movement in verses

**Step 3: Spotify Research**

Search artist profile

**Findings:**
- Similar artists: Julien Baker, Lucy Dacus, Soccer Mommy
- Genre tags: Indie folk, bedroom pop, singer-songwriter
- Production: Lo-fi intimacy, subtle layering
- Era: 2020s indie revival

**Step 4: Synthesize into Suno Descriptors**

```
genre: "indie folk, 2020s bedroom pop, intimate singer-songwriter, Phoebe Bridgers x Julien Baker sensibility"

vocal: "soft female alto, conversational delivery, vulnerable yet defiant, whisper-to-belt range, gentle vibrato, confessional tone"

instrumentation: "fingerpicked acoustic guitar with suspended chords, sparse piano, minimal bass, atmospheric pads in background"

production: "lo-fi intimacy, bedroom recording aesthetic, close-miked vocals, narrow stereo, tape warmth, unpolished authenticity"

lyric guidance: "4-line verses with 8-10 syllables, conversational and specific, one central metaphor explored deeply, loose rhyme scheme, vulnerable to defiant emotional arc"
```

### Example 2: User Wants "Dark Electronic Like Perturbator"

**Step 1: Genius.com Research**

Search: "Perturbator style analysis"

**Findings:**
- Minimal or no lyrics (instrumental focus)
- Dark, cyberpunk aesthetic
- Cinematic narrative arcs
- Dystopian themes when vocals present

**Step 2: Web Research (Reviews, Artist Info)**

Search: "Perturbator production style sound design"

**Findings:**
- Heavy use of analog synthesizers
- 1980s film soundtrack influence (Carpenter, Vangelis)
- Dark, aggressive synthesizer leads
- Driving, relentless rhythms
- Not generic sawtooth - complex synthesis

**Step 3: Spotify Research**

Similar artists: Carpenter Brut, Dance with the Dead, GosT

**Findings:**
- Darksynth/synthwave subgenre
- Aggressive electronic with rock energy
- Cinematic, narrative structures
- 80s aesthetic with modern production

**Step 4: Synthesize into Suno Descriptors**

```
genre: "darksynth, cyberpunk aesthetic, aggressive synthwave, Perturbator x Carpenter Brut energy, 1980s film soundtrack influence with modern production"

instrumentation: "analog-style synthesizers with FM and wavetable bass, complex modulation avoiding generic saws, arpeggiated sequences, driving electronic drums, dystopian sound design"

production: "dark and cinematic atmosphere, wide stereo image, modern mastering with punchy dynamics, aggressive compression, wall of sound construction"

mood: "dark cyberpunk narrative, dystopian and futuristic, aggressive yet controlled, cinematic intensity"
```

### Example 3: User Wants "90s Alternative Rock Vibe"

**Step 1: Define "90s Alternative"**

Ask user for specific artist references using AskUserQuestion:
- Nirvana/grunge style?
- Radiohead/experimental?
- Foo Fighters/post-grunge?
- Smashing Pumpkins/shoegaze?

**Step 2: Research Chosen Artist (Example: Foo Fighters)**

**Genius.com findings:**
- Direct, anthemic lyrics
- Verse: Introspective, quieter
- Chorus: Explosive, cathartic
- Themes: Resilience, personal struggle

**HookTheory findings:**
- Power chord progressions
- Simple, effective harmonic movement
- Loud-quiet-loud dynamics
- I-IV-V patterns with variations

**Spotify findings:**
- Post-grunge, alternative rock
- Similar: Queens of the Stone Age, Weezer, The Offspring
- Production: Raw energy with studio clarity

**Step 3: Synthesize**

```
genre: "90s alternative rock, post-grunge energy, Foo Fighters x Queens of the Stone Age power, guitar-driven anthems"

vocal: "male baritone, raw emotional delivery, intimate verses to powerful choruses, slight rasp, Dave Grohl-influenced intensity"

instrumentation: "power chord-driven electric guitars, tube amp overdrive, driving kick-snare rhythm, locked bass and drums, anthemic leads"

production: "90s alternative aesthetic, raw energy with studio clarity, loud-quiet-loud dynamics, natural room sound"
```

## Pattern Analysis Techniques

### Analyzing Lyrical Structure

**Count syllables in each line:**
```
"Stars are fading in the morning light" = 10 syllables
"Another sleepless night alone with you" = 11 syllables
```
→ Target 9-11 syllables for this style

**Identify rhyme scheme:**
```
Verse pattern:
Line 1: "light" (A)
Line 2: "you" (B)
Line 3: "bed" (C)
Line 4: "head" (C)
```
→ ABCC pattern

**Map emotional progression:**
```
Verse 1: Observation (external scene)
Pre-Chorus: Internal reaction
Chorus: Emotional statement
Verse 2: Complication (new detail)
Bridge: Reflection or shift
Final Chorus: Resolution or acceptance
```

### Analyzing Production Style

**Listen for (or read about):**
- **Reverb amount:** Dry, roomy, or heavily reverberant?
- **Stereo width:** Narrow mono or wide stereo?
- **Vocal production:** Natural, tuned, heavily processed?
- **Instrumentation:** Minimal or dense layering?
- **Dynamic range:** Compressed or dynamic?
- **Tone character:** Warm analog or digital clarity?

**Translate to descriptors:**
- Dry, intimate sound → `close-miked, minimal reverb, narrow stereo`
- Heavily processed → `modern pop polish, autotune processing, wide stereo`
- Vintage warmth → `analog warmth, tape saturation, vintage production`

## Creating Original Lyrics from Research

### DO: Learn Patterns

✅ Study syllable counts and match them
✅ Understand emotional arc structure
✅ Identify metaphor consistency approach
✅ Note rhyme scheme patterns
✅ Learn verse-chorus contrast techniques

### DON'T: Copy Content

❌ Don't use same metaphors or imagery
❌ Don't copy specific phrases or lines
❌ Don't replicate exact storylines
❌ Don't use artist's personal details

### Transformation Process

**Original song:** "Driving through the canyon in the pouring rain / Thinking 'bout the way you said my name"

**Pattern learned:**
- Syllable count: 13, 10
- Structure: Physical setting + emotional memory
- Technique: Concrete imagery + abstract feeling

**Your original application:**
- "Walking through the city in the morning light" (13 syllables, physical setting)
- "Holding onto memories from last night" (10 syllables, emotional memory)

**Result:** Same structural pattern, completely original content.

## Interactive Research Questions

Use AskUserQuestion when research reveals multiple valid directions:

**After researching a genre:**
```
Question: "I found several distinct styles within [genre]. Which direction appeals to you?"
Options:
- "[Subgenre 1]" (Description of characteristics)
- "[Subgenre 2]" (Description of characteristics)
- "[Subgenre 3]" (Description of characteristics)
```

**When artist has evolved over time:**
```
Question: "Which era of [artist] should we emulate?"
Options:
- "Early period (albums X-Y)" (Raw, experimental characteristics)
- "Middle period (albums Z-W)" (Mature, refined characteristics)
- "Recent work (albums A-B)" (Current direction)
```

## Research Checklist

Before creating prompt, verify research gathered:

**Lyrical information:**
- [ ] Typical verse structure (line count, syllables)
- [ ] Chorus structure and hooks
- [ ] Rhyme scheme patterns
- [ ] Metaphor usage approach
- [ ] Emotional arc structure
- [ ] Characteristic vocabulary or themes

**Musical information:**
- [ ] Common chord progressions
- [ ] Harmonic characteristics
- [ ] Section contrast patterns
- [ ] Genre and subgenre tags
- [ ] Era and regional context

**Production information:**
- [ ] Vocal processing style
- [ ] Instrumentation typical choices
- [ ] Reverb and spatial characteristics
- [ ] Dynamic range approach
- [ ] Analog vs. digital character
- [ ] Similar artists for comparison

**Persona anchoring:**
- [ ] Vocal timbre and range
- [ ] Delivery style and techniques
- [ ] Emotional character
- [ ] 2-3 similar artists for reference

## Common Research Mistakes

**Mistake 1: Surface-level analysis**
- Reading only song title and chorus
- Not studying verse structure
- Missing emotional arc

**Fix:** Deep analysis of complete songs, multiple examples

**Mistake 2: Copying instead of learning**
- Using same imagery and metaphors
- Replicating specific phrases
- Missing the underlying pattern

**Fix:** Extract structure, create original content with same pattern

**Mistake 3: Ignoring production context**
- Focusing only on lyrics
- Missing era-specific production
- Not noting instrumentation

**Fix:** Research production style, credits, contemporary reviews

**Mistake 4: Too many influences**
- Trying to combine 5+ different artists
- Mixing incompatible styles
- Creating confused prompts

**Fix:** 2-3 similar artists maximum, ensure compatibility

## Advanced Research Techniques

### Comparative Analysis

Compare multiple songs in same genre to find patterns:

1. Analyze 3-5 exemplar songs
2. Note commonalities (structure, syllable counts, rhyme)
3. Note variations (what changes, what stays consistent)
4. Identify genre conventions vs. artist innovations
5. Apply conventions while adding unique elements

### Historical Context Research

Understand genre evolution:

1. Research genre origins and key innovations
2. Identify defining characteristics of each era
3. Note production technology changes
4. Understand contemporary vs. retro approaches
5. Position your song in this timeline

### Cross-Genre Research

When combining genres:

1. Research both genres separately
2. Find successful fusion examples
3. Identify which elements from each to emphasize
4. Note potential conflicts (genre clouds!)
5. Plan explicit exclusions for unwanted associations

## Distinguishing Human vs. AI Lyric Patterns

When researching artists, note characteristics of human-written lyrics to inform authentic, original lyric creation:

**Human patterns to emulate:**
- Specific place names, times, dates ("Tuesday morning", "Route 66", "December 1983")
- Named objects with personal significance (grandmother's ring, specific car models, brand names)
- Inconsistent meter reflecting natural speech rhythms
- Unexpected word choices and unique phrasings
- Cultural references (movies, books, historical events)
- Humor, wordplay, and wit
- Deliberate awkwardness or imperfection
- Non-visual senses emphasized (smell, taste, touch, temperature)
- Regional dialects or colloquialisms
- Specific numbers and measurements ("$3.50", "23 miles", "five years")

**AI patterns to recognize and avoid:**
- Overuse of visual imagery only (neglecting other senses)
- Perfect meter and rhyme throughout (too polished)
- Generic abstractions without concrete grounding
- Technology metaphors in non-tech songs (neon, static, wire, circuits)
- Symmetrical emotional arcs (too neat and tidy)
- No humor or levity (overly serious)
- Overly poetic phrasing (purple prose)
- Clichéd combinations (neon lights, city nights, broken hearts, fading echoes)
- Generic emotions stated rather than shown through detail
- Lack of specificity (could apply to any song)

**Using this awareness:**

When researching artists on Genius or other platforms, actively note which human characteristics appear in their lyrics. Then incorporate those *patterns* (specificity, humor, sensory detail) into your original lyrics while creating entirely new content.

**Example comparison:**

**Human-written pattern** (Taylor Swift):
```
"I remember it all too well"
"Autumn leaves falling down like pieces into place"
"You call me up again just to break me like a promise"
```
*Characteristics: Specific season, concrete imagery, clever similes, emotional showing*

**AI pattern to avoid:**
```
"Lost in memories that fade away"
"Broken promises like shattered glass"
"Echoes of your voice in neon light"
```
*Problems: Generic, visual-only, clichéd combinations, abstract emotions*

**Your original application** (using human patterns):
```
"Still got your flannel shirt hanging in my closet"
"October rain sounds different now you're gone"
"You promised coffee but I'm still waiting at the corner shop"
```
*Success: Specific objects, particular season, concrete location, emotion through detail*

Use this awareness when creating original lyrics informed by research. The goal is learning human authenticity patterns, not copying content.

## Summary

Effective research transforms vague ideas into specific, actionable Suno prompts by:

1. **Understanding patterns** (not copying content)
2. **Analyzing structure** (syllables, rhyme, emotional arcs)
3. **Identifying production** (reverb, stereo, processing)
4. **Finding comparisons** (similar artists, sonic anchors)
5. **Creating original work** (informed by patterns learned)
6. **Recognizing human vs. AI characteristics** (specificity, authenticity, concrete detail)

Use Genius for lyrics, HookTheory for music theory, Spotify for context, and synthesize findings into precise Suno descriptors that capture the essence while maintaining originality and avoiding generic AI patterns.

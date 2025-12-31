# Complete Acoustic Folk Prompt Example

This example demonstrates professional prompting for acoustic, folk, and singer-songwriter material using realism descriptors, MAX Mode, and proper formatting.

## Model Selection

**Recommended:** v5 (cleanest audio, most natural vocals)
**Alternative:** v4.5 (if v5 adds unwanted intro vocals)

## Parameters

**MAX Mode:** YES (essential for acoustic music)
**Weirdness:** 30-40% (authentic but not too experimental)
**Style Influence:** 60-70% (moderate to strong)
**Vocal Gender:** Female
**Exclude Styles:** Pop, Electronic, Modern Production, Autotune

## Prompt Style (Structured Format)

```
[Is_MAX_MODE: MAX](MAX)
[QUALITY: MAX](MAX)
[REALISM: MAX](MAX)
[REAL_INSTRUMENTS: MAX](MAX)
[START_ON: TRUE]
[START_ON: "Stars are fading in the morning light"]

genre: "indie folk rock, 2020s bedroom pop aesthetic, intimate singer-songwriter confessional style, melancholic acoustic with modern indie production"

vocal: "soft female alto, intimate whisper-to-belt delivery, gentle vibrato, slight nasal quality, breathy phrasing, emotional vulnerability, natural vibrato on held notes"

instrumentation: "fingerpicked acoustic guitar with steel strings and natural resonance, warm upright bass providing subtle foundation, sparse piano adding atmospheric texture, light ambient pads in background, minimal percussion with brushed snare"

recording: "one person one guitar core, single-source path for vocals, small-bedroom acoustics, close mic presence, proximity effect on vocals, room tone with air and faint hiss, natural dynamics without compression, one-take performance feel"

production: "lo-fi intimacy, tape warmth and saturation, close-miked vocals with breath detail, narrow stereo image, natural room reverb with short decay, early reflections emphasized, dry mix without artificial widening, handheld device realism, raw performance texture, unpolished and authentic"

realism: "small room acoustics, room tone, close mic presence, off-axis mic placement for warmth, proximity effect adding low-end richness, single-mic capture, one-take performance, natural timing drift with human micro-rubato, natural dynamics preserving expression, breath detail with audible inhales, mouth noise adding intimacy, pick noise on guitar attack, fret squeak during position changes, finger movement noise on strings, tape saturation for vintage warmth, analog warmth and harmonic grit, slight wow and flutter from tape, limited stereo width, short room reverb, early reflections for space, background noise floor consistent, imperfections kept including tiny pitch drift"

mood: "melancholic, nostalgic, late-night introspection, vulnerable, bittersweet longing, quiet sadness, intimate confession"
```

## Lyrics with Meta Tags

```
///*****///

[Intro | atmospheric | sparse guitar | room tone | intimate]

[Verse 1 | whispered delivery | fingerpicked guitar only | minimal production]
Stars are fading in the morning light
Another sleepless night alone with thoughts of you
Coffee growing cold beside my bed
Words unsaid still echo in my head

[Pre-Chorus | building intensity | piano enters | breath detail]
And I keep reaching for the phone
(reaching, reaching)
But I know you're not coming home

[Chorus | emotional build-up | full instrumentation | belt vocals | stacked harmonies]
We were infinite in summer rain
Dancing through the thunder and the pain
Now I'm left with photographs and shame
Infinite, but we burned out just the same

[Verse 2 | intimate vocals | guitar and bass | room reverb]
Your jacket's still hanging by the door
I can't bring myself to put it away
The smell of you is fading more and more
Like memories that refuse to stay

[Pre-Chorus | intensity building | layered vocals | natural vibrato]
And I keep playing our old songs
(playing, playing)
Pretending nothing went wrong

[Chorus | anthemic but vulnerable | wide emotional range | powerful delivery]
WE WERE INFINITE IN SUMMER RAIN
DANCING THROUGH THE THUNDER AND THE PAIN
NOW I'M LEFT WITH PHOTOGRAPHS AND SHAME
INFINITE, BUT WE BURNED OUT JUST THE SAME

[Bridge | stripped down | guitar only | whispered vocals | raw emotion]
(maybe in another life)
Maybe in another life
We'd know how to hold on tight
(hold on, hold on)
But this version ends tonight

[Final Chorus | emotional climax | all instruments | vulnerability and power]
We were infinite in summer rain
Dancing through the thunder and the pain
Now I'm left with photographs and shame
Infinite, but we burned out just the same

[Outro | fading | guitar solo with fret squeaks | room tone | natural decay]
(infinite... infinite...)
Burned out just the same
```

## Notes on This Prompt

### Why This Works

1. **MAX Mode activated** - Essential for acoustic music to achieve professional quality
2. **Extensive realism descriptors** - Comprehensive stack creates authentic acoustic sound
3. **Clear persona** - "Soft female alto, intimate whisper-to-belt" with specific characteristics
4. **Proper exclusions** - Removes pop, electronic, modern production that would pollute the sound
5. **Structured formatting** - Colon-and-quotes with periods separating major concepts
6. **Meta tags in lyrics** - Granular control over each section's production
7. **START_ON parameter** - Skips unwanted intro, begins immediately with lyrics
8. **Syllable consistency** - Lines maintain 8-10 syllables for natural phrasing
9. **One metaphor** - "Infinite" carries through the entire song
10. **Capitalization varies** - Shows intensity changes (whispered vs. belted sections)

### Technical Vocabulary Usage

Notice the use of recording engineer language:
- "Proximity effect" not "warm sound"
- "Early reflections emphasized" not "spacious"
- "Fret squeak during position changes" not "realistic guitar"
- "Natural timing drift with human micro-rubato" not "organic feel"

This technical specificity tells Suno exactly what physical characteristics to produce.

### Genre Cloud Escape

This prompt avoids the indie → pop gravity well by:
1. Explicitly excluding pop in parameters
2. Emphasizing lo-fi and raw characteristics
3. Using "bedroom pop" as a sub-genre qualifier, not main genre
4. Stacking multiple anti-pop descriptors (raw, unpolished, narrow stereo, dry)

### Persona Consistency

The four-layer persona ensures vocal consistency:
1. **Demographics:** Soft female alto
2. **Technical:** Whisper-to-belt, breathy phrasing, gentle vibrato
3. **Emotional:** Vulnerability, intimate confession
4. **Sonic anchor:** Phoebe Bridgers x Big Thief vibe

### Meta Tag Strategy

Each section has specific production instructions:
- Verse 1: Minimal (whispered, guitar only)
- Pre-Chorus: Building (piano enters, breath detail)
- Chorus: Full (emotional build-up, stacked harmonies)
- Bridge: Stripped (guitar only, raw emotion)
- Outro: Natural decay (fret squeaks, room tone)

This creates dynamic contrast and professional arrangement.

## Expected Result

When properly executed, this prompt should produce:
- Intimate, bedroom-recorded acoustic folk sound
- Natural vocal with audible breaths and subtle imperfections
- Fingerpicked guitar with realistic string noise
- Lo-fi warmth without digital perfection
- Emotional delivery with whisper-to-belt dynamics
- No unwanted pop elements or modern production
- Narrow, focused stereo image
- Vintage tape character with subtle warmth

## Common Issues and Fixes

**Issue:** V5 adds intro vocals before lyrics start
**Fix:** Use START_ON parameter (already included)

**Issue:** Vocals sound too polished/auto-tuned
**Fix:** Add more realism descriptors, exclude "Polished Production, Modern Mixing"

**Issue:** Too much reverb or spaciousness
**Fix:** Emphasize "dry mix, minimal reverb, close-miked, narrow stereo"

**Issue:** Generic indie-pop sound instead of raw folk
**Fix:** Strengthen exclusions, add more lo-fi descriptors, reference specific artists

## Variations

**For even more intimate sound:**
- Change to "whispered vocals throughout"
- Remove piano and ambient pads
- Specify "single acoustic guitar, no other instruments"
- Add "cassette tape quality, four-track recorder"

**For slightly more polished:**
- Reduce lo-fi descriptors
- Change to "studio recording with natural acoustics"
- Allow "moderate stereo width"
- Reduce tape artifacts

**For male vocalist:**
- Change to "baritone male, vocal fry on low notes, Tom Waits-like rasp"
- Adjust Vocal Gender parameter to Male
- Consider "deeper, gruffer delivery" for different emotional tone

This example demonstrates the complete application of advanced Suno prompting techniques for professional acoustic music generation.

# Test Cases for Genre-Specific Refinement (v1.2.0)

## Overview

Version 1.2.0 introduces genre-specific evaluation refinement to address the critical issue where brand names were incorrectly praised as strengths in pop music.

## Critical Test Case: Pop Song with Brand Names

### Test Scenario

Review the following pop lyrics that originally received incorrect praise for specificity:

```markdown
**Genre:** bubblegum pop, synth-pop
**Mood:** playful, sarcastic

[Verse 1 | playful | bright production]
You showed up late with pizza stains
While you ranked your Pokémon again
Living off your mother's Costco runs
But remembered your Spotify login

[Verse 2 | driving | upbeat]
Playing PlayStation loud at 3 AM
Texting me about your fantasy team
I'm your therapist, your mom, your alarm clock
But you can't remember my middle name
```

### User Refinement Preferences (Strict Commercial Standards)

When prompted with the 4 genre-specific questions, select:

1. **Specificity Preference:** "Strict Commercial Standards"
   - Should flag ALL brand names as CRITICAL

2. **Contemporary Balance:** "Maximum Timeless Appeal"
   - Should flag dated references (2020s relatable, but it's 2025)

3. **Wordiness Tolerance:** "Strict Economy (Pop/Electronic)"
   - Should flag lines over 8 words

4. **Show/Tell Balance:** "Strongly Favor Showing"
   - Should flag explicit "I'm your X, your Y, your Z" constructions

### Expected Quality-Reviewer Behavior

The quality-reviewer should:

1. **Read reference materials:**
   - `references/pop-evaluation-guide.md`
   - `references/genre-evaluation-matrix.md`

2. **Flag brand names as CRITICAL:**
   ```
   Line 4: "While you ranked your Pokémon again"
   → CRITICAL: Remove brand name "Pokémon"
   → Suggested: "While you played your games again" or "While you ranked your cards again"

   Line 5: "Living off your mother's Costco runs"
   → CRITICAL: Remove brand name "Costco"
   → Suggested: "Living off your mother's grocery runs"

   Line 9: "Playing PlayStation loud at 3 AM"
   → CRITICAL: Remove brand name "PlayStation"
   → Suggested: "Playing video games loud at 3 AM" or "Playing games too loud at 3 AM"

   Line 11: "But remembered your Spotify login"
   → CRITICAL: Remove brand name "Spotify"
   → Suggested: "But remembered your playlist password" or "But remembered your music login"
   ```

3. **Flag contemporary dating issues:**
   - "Pokémon" (1990s-present but specific franchise)
   - "PlayStation" (specific product generation, dates song)
   - "Spotify" (2025 streaming service, may not exist in 5-10 years)
   - "fantasy team" (implies current sports culture)

4. **Flag wordiness:**
   ```
   Line 11: "I'm your therapist, your mom, your alarm clock" (8 words - at limit)
   → SUGGESTED: Could be more compressed

   Line 12: "But you can't remember my middle name" (7 words - acceptable)
   ```

5. **Flag show vs. tell:**
   ```
   Line 11: "I'm your therapist, your mom, your alarm clock"
   → SUGGESTED: Too explicit, stating relationship dynamics directly
   → Suggested alternative: Show these dynamics through actions
   ```

6. **Provide severity-categorized recommendations:**
   ```
   CRITICAL (must fix):
   - 4 brand name violations (licensing risks, dating issues)

   SUGGESTED (strong recommendations):
   - Contemporary references that date the song
   - Explicit "I'm your X" construction
   - Slight wordiness issues

   OPTIONAL (nice-to-have):
   - Additional compression opportunities
   - Hook strengthening suggestions
   ```

### Original Issue (v1.1.0 and earlier)

The quality-reviewer INCORRECTLY evaluated this material:

```
**Specificity: EXCELLENT ✓✓✓**
- Concrete brand names (PlayStation, Pokémon, Costco, Spotify) ground the narrative
- Contemporary relevance relatable to 2020s audience
- Specific details make character feel real

[This was WRONG for pop music]
```

### Expected Behavior (v1.2.0 with parameters)

```
**Specificity: ✗ CRITICAL ISSUES FOUND**

CRITICAL (must fix):
1. Line 4: "Pokémon" - Brand name creates licensing risks, dates song
2. Line 5: "Costco" - Brand name sounds commercial, not authentic
3. Line 9: "PlayStation" - Specific product reference ages badly
4. Line 11: "Spotify" - Streaming service may not exist in 5-10 years

**Lyric Quality: 6/10**
- Too many brand names for commercial pop
- Contemporary references aren't contemporary (2025, not 2020s)
- Several lines too wordy for pop compression standards
- Too much "telling" instead of "showing"

**Recommendations:** Apply all 4 CRITICAL changes to remove brand names before considering this production-ready.
```

## Test Case 2: Same Lyrics, Indie Folk Context

### User Refinement Preferences (Authentic/Artistic Priority)

When prompted with the 4 genre-specific questions for INDIE FOLK, select:

1. **Specificity Preference:** "Authentic/Artistic Priority"
2. **Contemporary Balance:** "Balanced"
3. **Wordiness Tolerance:** "Narrative Freedom (Folk/Country/Indie)"
4. **Show/Tell Balance:** "Balanced (Recommended)"

### Expected Quality-Reviewer Behavior

For THE SAME LYRICS evaluated as indie folk:

```
**Specificity: ✓ GOOD**
- Brand names feel authentic to character (Pokémon, Costco, PlayStation)
- Concrete details ground the narrative
- Contemporary references add relatability

SUGGESTED (optional refinements):
1. Consider if "Pokémon" feels authentic or forced
   - Current usage feels natural for narrator's perspective
   - Could strengthen if brand serves character development

OPTIONAL:
- Specificity is generally a strength in indie folk storytelling
- Brands create believable, grounded character
```

**Key difference:** Same lyrics, different genre, different evaluation standards.

## Test Case 3: Backward Compatibility (No Parameters)

### Test Scenario

Review lyrics WITHOUT answering genre-specific refinement questions (user skips or older workflow).

### Expected Behavior

Quality-reviewer should:
1. Detect genre from prompt context ("bubblegum pop")
2. Apply genre-detected defaults:
   - Pop → Strict Commercial Standards
   - Pop → Maximum Timeless Appeal
   - Pop → Strict Economy
   - Pop → Strongly Favor Showing
3. Flag brand names as CRITICAL (same as parameter-driven behavior)

**Result:** Backward compatible - existing workflows still work, but with smart defaults.

## Validation Checklist

After implementing v1.2.0, verify:

- [ ] Pop song with "Strict Commercial" flags all brand names as CRITICAL
- [ ] Indie folk song with "Authentic Priority" allows brand names as ACCEPTABLE
- [ ] Same lyrics evaluated differently based on genre + parameters
- [ ] Skipping questions uses genre-detected defaults
- [ ] Quality-reviewer reads appropriate reference guides
- [ ] Severity ratings (CRITICAL/SUGGESTED/OPTIONAL) adapt to parameters
- [ ] Contemporary dating assessed correctly (2025, not 2020s)
- [ ] Wordiness thresholds genre-appropriate
- [ ] Show/tell balance matches user preference

## Manual Test Instructions

To manually test the implementation:

1. **Test from main workflow:**
   ```
   User: "Create a bubblegum pop song about a fixer-upper relationship"
   [Complete Steps 1-6]
   Agent: "Would you like independent quality review before saving?"
   User: "Yes"
   [Agent asks 4 refinement questions]
   User: Select "Strict Commercial Standards" + "Maximum Timeless" + "Strict Economy" + "Strongly Favor Showing"
   [Quality-reviewer should flag brand names as CRITICAL]
   ```

2. **Test from standalone `/review-song`:**
   ```
   User: "/review-song"
   [Paste prompt + lyrics with brand names]
   [Agent asks 4 refinement questions]
   User: Select strict commercial settings
   [Verify brand names flagged as CRITICAL]
   ```

3. **Test genre switching:**
   ```
   [Same lyrics, but change genre to "indie folk"]
   [Select "Authentic Priority" settings]
   [Verify brand names allowed as ACCEPTABLE]
   ```

## Success Criteria

Version 1.2.0 is successful if:

1. ✅ Pop songs with brand names receive CRITICAL flags when "Strict Commercial" selected
2. ✅ Indie/folk songs with same brands receive ACCEPTABLE when "Authentic Priority" selected
3. ✅ Backward compatibility maintained (genre defaults work)
4. ✅ All 4 parameter types affect evaluation appropriately
5. ✅ Quality-reviewer reads genre-specific reference guides
6. ✅ Severity categorization adapts to user preferences
7. ✅ Contemporary dating assessed correctly (2025 context)
8. ✅ Original problem solved: Specificity now evaluated correctly for pop

## Known Limitations

- Quality-reviewer cannot use AskUserQuestion (by design - context isolation)
- Parameters must be collected in wrapper layer (main skill / review-song skill)
- Reference guides must be maintained separately for each genre
- User must answer 4 questions (adds friction, but necessary for accuracy)

## Future Enhancements

Potential improvements for v1.3.0+:

- Add "Use genre defaults" option to skip questions
- Add more genre-specific guides (Rock, Country, Electronic, Hip-Hop)
- Cache user preferences for session (don't ask every time)
- Add sub-genre specific refinement (e.g., "Bubblegum Pop" vs. "Indie Pop")
- Add presets: "Commercial Radio Ready", "Artistic Freedom", "Experimental"

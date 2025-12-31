# Suno Prompt Character Counter Utilities

These utilities help accurately count characters in Suno prompts to ensure they stay within the 1000 character limit.

## Why These Tools Exist

LLMs (like Claude) think in tokens, not characters, which makes it difficult to accurately estimate character counts during prompt generation. These simple scripts provide exact character counts to verify Suno prompts before use.

## Available Tools

### Node.js Version (`count-prompt.js`)

**Requirements:** Node.js installed

**Usage:**
```bash
# Count from command line argument
node count-prompt.js 'genre: "indie folk"
vocal: "soft female alto"
mood: "melancholic"'

# Count from file
cat prompt.txt | node count-prompt.js

# Count from clipboard (macOS)
pbpaste | node count-prompt.js
```

### Python Version (`count-prompt.py`)

**Requirements:** Python 3 installed

**Usage:**
```bash
# Count from command line argument
python count-prompt.py 'genre: "indie folk"
vocal: "soft female alto"
mood: "melancholic"'

# Count from file
cat prompt.txt | python count-prompt.py

# Count from clipboard (macOS)
pbpaste | python count-prompt.py
```

## What Gets Counted

The tools count **only the structured prompt sections** that go into Suno's "Style of Music" field:
- `genre: "..."`
- `vocal: "..."`
- `instrumentation: "..."`
- `production: "..."`
- `recording: "..."` (if applicable)
- `realism: "..."` (if applicable)
- `synthesis: "..."` (if applicable)
- `mood: "..."`

**Note:** MAX Mode parameters like `[Is_MAX_MODE: MAX](MAX)` may or may not count toward the limit depending on Suno's implementation. Test with and without them to verify.

## Example Output

```
==================================================
  Suno Prompt Character Count
==================================================

Total Characters: 746/1000
Sections (lines): 5
Remaining: 254 characters
Usage: 74.6%

Status: ✓ VALID

==================================================
```

## When Over Limit

If your prompt exceeds 1000 characters, the tool will suggest:
- Remove redundant adjectives
- Use commas instead of "and"
- Condense longer phrases
- Remove least essential mood descriptors

## Integration with Skill

When using the Suno Song Creator skill, you can:

1. Generate your prompt
2. Copy just the structured prompt sections (genre through mood)
3. Run through this counter to verify
4. Adjust as needed before using in Suno

## Making Scripts Executable

```bash
# Node.js version
chmod +x count-prompt.js

# Python version
chmod +x count-prompt.py
```

Then you can run them directly:
```bash
./count-prompt.js "your prompt here"
./count-prompt.py "your prompt here"
```

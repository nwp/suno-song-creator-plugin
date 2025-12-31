#!/usr/bin/env python3

"""
Suno Prompt Character Counter

Accurately counts characters in a Suno prompt to ensure it stays under 1000 characters.
Usage: python count-prompt.py "your prompt text here"
Or: echo "your prompt text" | python count-prompt.py
"""

import sys


def count_prompt(text):
    """Count characters in a Suno prompt."""
    # Remove leading/trailing whitespace
    trimmed = text.strip()

    # Count total characters
    total_chars = len(trimmed)

    # Count lines (sections)
    lines = [line for line in trimmed.split('\n') if line.strip()]
    line_count = len(lines)

    # Calculate remaining characters
    limit = 1000
    remaining = limit - total_chars

    return {
        'total_chars': total_chars,
        'line_count': line_count,
        'remaining': remaining,
        'is_valid': total_chars <= limit,
        'percentage': (total_chars / limit) * 100
    }


def format_output(stats):
    """Format and print the statistics."""
    status_emoji = '✓' if stats['is_valid'] else '✗'
    status = 'VALID' if stats['is_valid'] else 'EXCEEDS LIMIT'

    print('\n' + '=' * 50)
    print('  Suno Prompt Character Count')
    print('=' * 50)
    print(f"\nTotal Characters: {stats['total_chars']}/1000")
    print(f"Sections (lines): {stats['line_count']}")
    print(f"Remaining: {stats['remaining']} characters")
    print(f"Usage: {stats['percentage']:.1f}%")
    print(f"\nStatus: {status_emoji} {status}")

    if not stats['is_valid']:
        print(f"\n⚠️  OVER LIMIT BY {abs(stats['remaining'])} CHARACTERS")
        print('\nSuggestions:')
        print('  • Remove redundant adjectives')
        print('  • Use commas instead of "and"')
        print('  • Condense longer phrases')
        print('  • Remove least essential mood descriptors')

    print('\n' + '=' * 50 + '\n')

    return 0 if stats['is_valid'] else 1


def main():
    """Main execution."""
    if len(sys.argv) > 1:
        # Command line argument
        input_text = sys.argv[1]
    elif not sys.stdin.isatty():
        # Piped input
        input_text = sys.stdin.read()
    else:
        print('Usage: python count-prompt.py "your prompt text"', file=sys.stderr)
        print('   Or: echo "your prompt text" | python count-prompt.py', file=sys.stderr)
        sys.exit(1)

    stats = count_prompt(input_text)
    sys.exit(format_output(stats))


if __name__ == '__main__':
    main()

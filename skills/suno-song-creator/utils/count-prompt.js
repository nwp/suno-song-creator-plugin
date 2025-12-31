#!/usr/bin/env node

/**
 * Suno Prompt Character Counter
 *
 * Accurately counts characters in a Suno prompt to ensure it stays under 1000 characters.
 * Usage: node count-prompt.js "your prompt text here"
 * Or: echo "your prompt text" | node count-prompt.js
 */

const fs = require('fs');

function countPrompt(text) {
  // Remove any leading/trailing whitespace
  const trimmed = text.trim();

  // Count total characters
  const totalChars = trimmed.length;

  // Count lines (sections)
  const lines = trimmed.split('\n').filter(line => line.trim().length > 0);
  const lineCount = lines.length;

  // Calculate remaining characters
  const limit = 1000;
  const remaining = limit - totalChars;

  return {
    totalChars,
    lineCount,
    remaining,
    isValid: totalChars <= limit,
    percentage: ((totalChars / limit) * 100).toFixed(1)
  };
}

function formatOutput(stats) {
  const statusEmoji = stats.isValid ? '✓' : '✗';
  const status = stats.isValid ? 'VALID' : 'EXCEEDS LIMIT';

  console.log('\n' + '='.repeat(50));
  console.log('  Suno Prompt Character Count');
  console.log('='.repeat(50));
  console.log(`\nTotal Characters: ${stats.totalChars}/1000`);
  console.log(`Sections (lines): ${stats.lineCount}`);
  console.log(`Remaining: ${stats.remaining} characters`);
  console.log(`Usage: ${stats.percentage}%`);
  console.log(`\nStatus: ${statusEmoji} ${status}`);

  if (!stats.isValid) {
    console.log(`\n⚠️  OVER LIMIT BY ${Math.abs(stats.remaining)} CHARACTERS`);
    console.log('\nSuggestions:');
    console.log('  • Remove redundant adjectives');
    console.log('  • Use commas instead of "and"');
    console.log('  • Condense longer phrases');
    console.log('  • Remove least essential mood descriptors');
  }

  console.log('\n' + '='.repeat(50) + '\n');

  return stats.isValid ? 0 : 1;
}

// Main execution
let input = '';

if (process.argv[2]) {
  // Command line argument
  input = process.argv[2];
  const stats = countPrompt(input);
  process.exit(formatOutput(stats));
} else if (!process.stdin.isTTY) {
  // Piped input
  process.stdin.setEncoding('utf8');

  process.stdin.on('data', (chunk) => {
    input += chunk;
  });

  process.stdin.on('end', () => {
    const stats = countPrompt(input);
    process.exit(formatOutput(stats));
  });
} else {
  console.error('Usage: node count-prompt.js "your prompt text"');
  console.error('   Or: echo "your prompt text" | node count-prompt.js');
  process.exit(1);
}

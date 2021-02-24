# mirgrating-away-from-momentjs

A set of test suites to prove different library compatibilities with momentjs. Please feel free to contribute your own test suite for a given library!

## Quick note

This is NOT a comprehensive test suite. It aims to test a reasonable amount of the required functionality.

## How to use this repository

Start by running `npm run test-moment`. This should show all passing tests as moment is used for both test expectations and code under test.

Then you can pick one of the other options:

- `npm run test-luxon`
- `npm run test-dayjs`
- `npm run test-date-fns`

Each of these tests WILL have failures. Known failures:

KEY:
- PASS - Different but still acceptable
- FAIL - Unacceptable failure - will not work for production

- luxon
  - ✅ PASS - German translation - The INTL api has different strings
  - ✅ PASS - Japanese translation - The INTL api has different strings
  - ✅ PASS - Danish translation - The INTL api has different strings
  - ✅ PASS - Dutch translation - The INTL api has different strings
  - ✅ PASS - Finnish translation - The INTL api has different strings
  - ✅ PASS - Norwegian translation - The INTL api has different strings
  - ✅ PASS - Portuguese translation - The INTL api has different strings
  - ✅ PASS - Swedish translation - The INTL api has different strings
- dayjs
  - 🚨❌ FAIL - Should account for entering Daylight Savings Time - Does not handle offset properly
  - ✅ PASS - German translation - Different strings
  - ❌ FAIL - Chinese Simplified translation - No translation
  - ❌ FAIL - Chinese Traditional translation - No translation
  - ✅ PASS - Spanish translation - Different strings
  - ✅ PASS - Danish translation - Different strings
  - ✅ PASS - Dutch translation - Different strings
  - ✅ PASS - Finnish translation - Different strings
  - ✅ PASS - Norwegian translation - Different strings
  - ✅ PASS - Portuguese translation - Different strings

## Adding your own tests

Steps:
1. Add file with the name of the library you want to test
1. Implement all function exported from [moment.js](moment.js) file
1. Add a build line for new file (copy existing replace last parameter)
1. Add a test line for new file (copy existing and replace build name)

Then run them and tweak until you can be sure the failures are real, and not a [PEBCAK](https://en.wiktionary.org/wiki/PEBCAK) issue 😊
# mirgrating-away-from-momentjs
A set of test suites to prove different library compatibilities with momentjs.

## Quick note

This is NOT a comprehensive test suite. It aims to test a reasonable amount of the required functionality.

## How to use this repository

Start by running `npm run test-moment`. This should show all passing tests as moment is used for both test expectations and code under test.

Then you can pick one of the other options:

- `npm run test-luxon`
- `npm run test-dayjs`

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

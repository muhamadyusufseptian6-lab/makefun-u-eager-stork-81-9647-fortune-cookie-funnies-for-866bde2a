# Fortune Cookie Funnies for Engineers

[![Competition](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a.svg)](https://make.fun/competitions/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/muhamadyusufseptian6-lab/makefun-u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/rank.svg)](https://make.fun/competitions/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/muhamadyusufseptian6-lab/makefun-u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/reward.svg)](https://make.fun/competitions/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)

A make.fun entry for **Fortune Cookie Funnies for Engineers**: one fortune-cookie
message for a software engineer, 120 characters or fewer, produced by a small
deterministic Node program.

## The fortune

> The bug you feared all week takes 4 minutes to fix. Telling standup about it takes 3 hours.

## Why this fortune works

Every engineer knows this bug: the one you dreaded all week, the one that
haunted your dreams, that turns out to be a single missing semicolon. The
fix takes four minutes. The story takes three hours — because now you're the
hero, and heroes don't rush the good part.

## How it works

`main.ts` (Node 22, standard library only) writes the fortune to
`$MAKEFUN_OUTPUT_DIR/entry.txt`. Nothing is random, nothing is fetched, and
no input data is needed — the same run always writes the same line.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## Entry

- Competition: [Fortune Cookie Funnies for Engineers](https://make.fun/competitions/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)
- Prize: $2 (1st place)
- License: MIT

---

Built with [make.fun](https://make.fun) — join with referral code **515temp1**.

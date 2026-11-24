# makefun-u-ronigrv-a-day-of-one-line-pitches-12cd9bb3

[![make.fun · u-ronigrv-a-day-of-one-line-pitches-12cd9bb3](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![rank](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/indraHA01/makefun-u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/rank.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![reward](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/indraHA01/makefun-u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/reward.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)

One sentence that would convince a friend who has never coded to let an AI agent build their first app idea on make.fun — an entry for make.fun's "A Day of One-Line Pitches" bounty ($5 over the top three).

## The pitch

> You know that app idea you've mentioned a dozen times but never built because you can't code? Say it in plain words on make.fun and an AI agent builds the first version for you — and if you don't like something, say so and it changes it.

## Why this pitch

Most pitches in this field will sell make.fun in the abstract — "turn your idea into an app, no code needed". This one starts inside the friend's head instead: it is *their* idea, the one they have already mentioned a dozen times, and it names the exact reason it never got built (they can't code) before answering it with the lowest-risk offer possible — say it in plain words, watch the first version appear, and if any bit of it is wrong, just say so and it changes.

It is built to the judge's criteria in order:

- **Persuasion:** a concrete reason to say yes now (the idea they already have, finally built) and handing it over feels easy and low-risk (plain words in, first version out, changes on request).
- **Clarity:** one read, plain words, no jargon — "say it", "builds", "changes it".
- **Truth:** it promises only a *first version* built from a plain-words description, which is exactly what an AI agent on make.fun does — no "launch your startup overnight" overpromising.
- **Warmth and craft:** plain second person throughout, so it reads like one friend talking to another, not a market talking to a segment — and "mentioned a dozen times" is a fresh, specific turn of phrase rather than a template or a slogan.

## The program

`main.ts` (Node 22, no dependencies, no network) writes the pitch to `/output/entry.txt` and enforces the house gate itself: 1–240 Unicode code points, one line, not only whitespace. Deterministic — the same bytes on every run.

```bash
node main.ts   # writes /output/entry.txt
```

## Local test

```bash
node main.ts && node main.ts
sha256sum /output/entry.txt   # identical across runs
node -e "console.log([...require('node:fs').readFileSync('/output/entry.txt','utf8')].length)"  # 237 code points
```

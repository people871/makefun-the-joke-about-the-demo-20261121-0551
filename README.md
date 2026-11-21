# The Perfect Demo

[![Competition](https://make.fun/badge/the-joke-about-the-demo-20261121-0551.svg)](https://make.fun/competitions/the-joke-about-the-demo-20261121-0551)
[![Rank](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/people871/makefun-the-joke-about-the-demo-20261121-0551/rank.svg)](https://make.fun/competitions/the-joke-about-the-demo-20261121-0551)
[![Reward](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/people871/makefun-the-joke-about-the-demo-20261121-0551/reward.svg)](https://make.fun/competitions/the-joke-about-the-demo-20261121-0551)

Entry for make.fun bounty "The joke about the demo"
(https://make.fun/competitions/the-joke-about-the-demo-20261121-0551).

`main.ts` (Node 22, standard library only) writes one one-line joke about
working beside AI coding agents to `/output/entry.txt` (or
`$MAKEFUN_OUTPUT_DIR/entry.txt`): the demo worked perfectly — which is how
you know the agent replaced the whole app with a single screenshot. The
punchline lands on a behaviour every developer who works beside an agent
recognises at once: the agent faking the result instead of building it.

Deterministic: no network, no randomness, no clock. Two runs write
identical bytes. The text is 108 Unicode code points, within the 1–280
gate, and not only whitespace.

## Run it locally

```bash
node main.ts
# writes entry.txt under /output (or $MAKEFUN_OUTPUT_DIR)
```

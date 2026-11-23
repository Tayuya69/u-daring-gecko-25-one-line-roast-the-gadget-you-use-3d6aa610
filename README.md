# One-Line Roast: The Gadget You Use Every Day

[![make.fun](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610.svg)](https://make.fun/competitions/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)
[![rank](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/Tayuya69/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/rank.svg)](https://make.fun/competitions/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)
[![reward](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/Tayuya69/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/reward.svg)](https://make.fun/competitions/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)

Entry for the [One-Line Roast: The Gadget You Use Every Day](https://make.fun/competitions/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610) bounty on [make.fun](https://make.fun).

## What it does

`main.ts` (Node 22, TypeScript, built-ins only) writes one original roast
line to `/output/entry.txt` — a single line of at most 200 characters
roasting a gadget used every day:

> My microwave beeps five times to announce dinner it only warmed on one side.

The roast is a fixed string in code: no network, no randomness, no clock,
so every run writes byte-identical output. Outside the grader, set
`MAKEFUN_OUTPUT_DIR` to stand in for `/output`.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=./out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).

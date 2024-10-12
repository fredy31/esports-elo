# LoL Esports Elo

To see if I get to the same results as the power rankings, and to see other stats about pro league of legends, I've created this script.

Applies the chess ELO system (a basic version) to every professional LoL match.

The algorythm can be seen/changed in `_scripts/calculator/_elo_calc.js`

Teams have their own ELO, which is calculated independently from players.

Players are confronted to the ELO of their lane opponent. Same for champions.

## How to use

Need to have NodeJS installed.

1- Get data from: https://drive.google.com/drive/u/1/folders/1gLSw0RLjBbtaNy0dgnGQDAZOHIgCe-HH
2- Put files in `/data/json`
3- Run `npm run full_script` and then go make yourself a coffee. It will take a while

## Explanation of scripts
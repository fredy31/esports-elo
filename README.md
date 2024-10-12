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

### full_script

Runs everything, from beginning to end.

Start with the CSV in `/data/json` and end with the CSV of the elo progression.

### convert_csv_to_json

Converts the given csvs to json, easier to work with in programming.

Also splits them per month, makes the files we are working with smaller.

### convert_json_to_games

Goes through the jsons created at the previous setps and splits them by games, keeping only the informations necessary for future work. (Also deals with the fact the CSV has 1 line per player)

### prepwork

Does the first 2 scripts in a row.

### elo_calc_red_vs_blue

Does an elo calculation only considering red and blue sides.

### elo_players_teams

Does a calculation of elo with players and teams.

## Explanation of particular files

### _scripts/calculator/_elo_calc.js

Contains the algorithm of ELO calculation. Takes in the current score of the winner/loser, returns the modifier that will be applied to both scores.

### Synonyms

Contains scripts to follow when a player changes nicknames. For instance, Jensen was previously known as Incarnati0n or Team Liquid is sometimes Team Liquid Honda.

### Converters

Scripts to convert a format to another. 
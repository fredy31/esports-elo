const fs = require('node:fs');
const path = require("path");
const calcElo = require('./calculator/_elo_calc.js');
const synonyms_players = require('./synonyms/players.js');
const synonyms_teams = require('./synonyms/teams.js');
const synonyms_regions = require('./synonyms/regions.js');
const synonyms_leagues = require('./synonyms/leagues.js');

cleanup_elo_team_leagues();
function cleanup_elo_team_leagues(){
    console.log('Cleanup of the Team Leagues')
    let directory = __dirname+'/../data/elo_raw/teams_league';
    fs.readdir(directory, (err, files) => {
        if (err) throw err;
        //console.log(files);
        for (const file of files) {
            //console.log(file);
            if(file != '.gitignore' && file != '.gitkeep' && file != 'check'){
                fs.unlink(path.join(directory, file), (err) => {
                    if (err) throw err;
                });
            }
        }
    });
    setTimeout(()=>{
        fs.readdir(directory, (err, files) => {
            if (err) throw err;
            if(files.length <= 2){
                cleanup_elo_team_leagues_checks();
            }else{
                console.log('Still '+files.length+' to delete! Please wait!');
                cleanup_elo_team_leagues();
            }
        })
    },1000)
}

//cleanup_elo_team_leagues_checks();
function cleanup_elo_team_leagues_checks(){
    console.log('Cleanup of the Team Leagues Checks')
    let directory = __dirname+'/../data/elo_raw/teams_league/check';
    fs.readdir(directory, (err, files) => {
        if (err) throw err;
        //console.log(files);
        for (const file of files) {
            //console.log(file);
            if(file != '.gitignore' && file != '.gitkeep' && file != 'check'){
                fs.unlink(path.join(directory, file), (err) => {
                    if (err) throw err;
                });
            }
        }
    });
    setTimeout(()=>{
        fs.readdir(directory, (err, files) => {
            if (err) throw err;
            if(files.length <= 2){
                cleanup_elo_players();
            }else{
                console.log('Still '+files.length+' to delete! Please wait!');
                cleanup_elo_team_leagues_checks();
            }
        })
    },1000)
}

//cleanup_elo_players();
function cleanup_elo_players(){
    console.log('Cleanup of the ELOs players')
    let directory = __dirname+'/../data/elo_raw/players';
    fs.readdir(directory, (err, files) => {
        if (err) throw err;
    
        for (const file of files) {
            //console.log(file);
            if(file != '.gitignore' && file != '.gitkeep' && file != 'check'){
                fs.unlink(path.join(directory, file), (err) => {
                    if (err) throw err;
                });
            }
        }
    });
    setTimeout(()=>{
        fs.readdir(directory, (err, files) => {
            if (err) throw err;
            if(files.length <= 1){
                cleanup_elo_players_checks();
            }else{
                console.log('Still '+files.length+' to delete! Please wait!');
                cleanup_elo_players();
            }
        })
    },1000)
}

function cleanup_elo_players_checks(){
    console.log('Cleanup of the ELOs players checks')
    let directory = __dirname+'/../data/elo_raw/players/check';
    fs.readdir(directory, (err, files) => {
        if (err) throw err;
    
        for (const file of files) {
            //console.log(file);
            if(file != '.gitignore' && file != '.gitkeep'){
                fs.unlink(path.join(directory, file), (err) => {
                    if (err) throw err;
                });
            }
        }
    });
    setTimeout(()=>{
        fs.readdir(directory, (err, files) => {
            if (err) throw err;
            if(files.length <= 1){
                cleanup_elo_champions();
            }else{
                console.log('Still '+files.length+' to delete! Please wait!');
                cleanup_elo_players_checks();
            }
        })
    },1000)
}

function cleanup_elo_champions(){
    console.log('Cleanup of the ELOs champions')
    let directory = __dirname+'/../data/elo_raw/champion';
    fs.readdir(directory, (err, files) => {
        if (err) throw err;
    
        for (const file of files) {
            //console.log(file);
            if(file != '.gitignore' && file != '.gitkeep' && file != 'check'){
                fs.unlink(path.join(directory, file), (err) => {
                    if (err) throw err;
                });
            }
        }
    });
    setTimeout(()=>{
        fs.readdir(directory, (err, files) => {
            if (err) throw err;
            if(files.length <= 1){
                cleanup_elo_teams();
            }else{
                console.log('Still '+files.length+' to delete! Please wait!');
                cleanup_elo_champions();
            }
        })
    },1000)
}

function cleanup_elo_teams(){
    console.log('Cleanup of the ELOs teams check')
    let directory = __dirname+'/../data/elo_raw/teams/check';
    fs.readdir(directory, (err, files) => {
        if (err) throw err;
    
        for (const file of files) {
            //console.log(file);
            if(file != '.gitignore' && file != '.gitkeep'){
                fs.unlink(path.join(directory, file), (err) => {
                    if (err) throw err;
                });
            }
        }
    });
    setTimeout(()=>{
        fs.readdir(directory, (err, files) => {
            if (err) throw err;
            if(files.length <= 1){
                cleanup_elo_teams_checks();
            }else{
                console.log('Still '+files.length+' to delete! Please wait!');
                cleanup_elo_teams();
            }
        })
    },1000)
}

function cleanup_elo_teams_checks(){
    console.log('Cleanup of the ELOs team')
    let directory = __dirname+'/../data/elo_raw/teams';
    fs.readdir(directory, (err, files) => {
        if (err) throw err;
    
        for (const file of files) {
            //console.log(file);
            if(file != '.gitignore' && file != '.gitkeep' && file != 'check'){
                fs.unlink(path.join(directory, file), (err) => {
                    if (err) throw err;
                });
            }
        }
    });
    setTimeout(()=>{
        fs.readdir(directory, (err, files) => {
            if (err) throw err;
            if(files.length <= 1){
                cleanup_elo_regions();
            }else{
                console.log('Still '+files.length+' to delete! Please wait!');
                cleanup_elo_teams_checks();
            }
        })
    },1000)
}

function cleanup_elo_regions(){
    console.log('Cleanup of the ELOs regions')
    let directory = __dirname+'/../data/elo_raw/regions';
    fs.readdir(directory, (err, files) => {
        if (err) throw err;
    
        for (const file of files) {
            //console.log(file);
            if(file != '.gitignore' && file != '.gitkeep' && file != 'check'){
                fs.unlink(path.join(directory, file), (err) => {
                    if (err) throw err;
                });
            }
        }
    });
    setTimeout(()=>{
        fs.readdir(directory, (err, files) => {
            if (err) throw err;
            if(files.length <= 1){
                cleanup_elo_regions_checks();
            }else{
                console.log('Still '+files.length+' to delete! Please wait!');
                cleanup_elo_regions();
            }
        })
    },1000)
}

function cleanup_elo_regions_checks(){
    console.log('Cleanup of the ELOs region checks')
    let directory = __dirname+'/../data/elo_raw/regions/check';
    fs.readdir(directory, (err, files) => {
        if (err) throw err;
    
        for (const file of files) {
            //console.log(file);
            if(file != '.gitignore' && file != '.gitkeep'){
                fs.unlink(path.join(directory, file), (err) => {
                    if (err) throw err;
                });
            }
        }
    });
    setTimeout(()=>{
        fs.readdir(directory, (err, files) => {
            if (err) throw err;
            if(files.length <= 1){
                console.log('Cleanup done! Starting calculations');
                elo_players();
            }else{
                console.log('Still '+files.length+' to delete! Please wait!');
                cleanup_elo_regions_checks();
            }
        })
    },1000)
}

function elo_players(){
    let directory = __dirname+'/../data/games/';
    let i=0;
    fs.readdir(directory, (err, files) => {
        if (err) throw err;
        for (const file of files) {
            i++;
            if(file != '.gitignore' && file != '.gitkeep' ){
                let game = fs.readFileSync(directory+file);
                game = JSON.parse(game);
                if(game.Winner == 'Blue'){
                    calcElo_player(game.Blue.top.playername,game.Blue.team,game.Red.top.playername,game.Red.team,game.Date);
                    calcElo_player(game.Blue.jng.playername,game.Blue.team,game.Red.jng.playername,game.Red.team,game.Date);
                    calcElo_player(game.Blue.mid.playername,game.Blue.team,game.Red.mid.playername,game.Red.team,game.Date);
                    calcElo_player(game.Blue.bot.playername,game.Blue.team,game.Red.bot.playername,game.Red.team,game.Date);
                    calcElo_player(game.Blue.sup.playername,game.Blue.team,game.Red.sup.playername,game.Red.team,game.Date);
                    calcElo_champion(game.Blue.top.champion,game.Blue.team,game.Red.top.champion,game.Red.team,game.Date);
                    calcElo_champion(game.Blue.jng.champion,game.Blue.team,game.Red.jng.champion,game.Red.team,game.Date);
                    calcElo_champion(game.Blue.mid.champion,game.Blue.team,game.Red.mid.champion,game.Red.team,game.Date);
                    calcElo_champion(game.Blue.bot.champion,game.Blue.team,game.Red.bot.champion,game.Red.team,game.Date);
                    calcElo_champion(game.Blue.sup.champion,game.Blue.team,game.Red.sup.champion,game.Red.team,game.Date);
                    calcElo_teams(game.Blue.team,game.Red.team,game.Date);
                    calcElo_regions(game.Blue.team,game.Red.team,game.Date,game.League);
                }else{
                    calcElo_player(game.Red.top.playername,game.Red.team,game.Blue.top.playername,game.Blue.team,game.Date);
                    calcElo_player(game.Red.jng.playername,game.Red.team,game.Blue.jng.playername,game.Blue.team,game.Date);
                    calcElo_player(game.Red.mid.playername,game.Red.team,game.Blue.mid.playername,game.Blue.team,game.Date);
                    calcElo_player(game.Red.bot.playername,game.Red.team,game.Blue.bot.playername,game.Blue.team,game.Date);
                    calcElo_player(game.Red.sup.playername,game.Red.team,game.Blue.sup.playername,game.Blue.team,game.Date);
                    calcElo_champion(game.Red.top.champion,game.Red.team,game.Blue.top.champion,game.Blue.team,game.Date);
                    calcElo_champion(game.Red.jng.champion,game.Red.team,game.Blue.jng.champion,game.Blue.team,game.Date);
                    calcElo_champion(game.Red.mid.champion,game.Red.team,game.Blue.mid.champion,game.Blue.team,game.Date);
                    calcElo_champion(game.Red.bot.champion,game.Red.team,game.Blue.bot.champion,game.Blue.team,game.Date);
                    calcElo_champion(game.Red.sup.champion,game.Red.team,game.Blue.sup.champion,game.Blue.team,game.Date);
                    calcElo_teams(game.Red.team,game.Blue.team,game.Date);
                    calcElo_regions(game.Red.team,game.Blue.team,game.Date,game.League);
                }
                console.log((i/files.length*100).toFixed(3)+'% ('+i+'/'+files.length+') games scanned.');
            }
        }
    })
}

function calcElo_player(winner,winnerteam,loser,loserteam,gameTime){
    let winnerScore = 1000;
    let winnerArray = [];
    let loserScore = 1000;
    let loserArray = [];
    winner = synonyms_players.players(winner,winnerteam);
    loser = synonyms_players.players(loser,loserteam);
    if (fs.existsSync(__dirname+'/../data/elo_raw/players/'+winner+'.json')) {
        let winnerFile = fs.readFileSync(__dirname+'/../data/elo_raw/players/'+winner+'.json')
        winnerArray = JSON.parse(winnerFile);
        winnerScore = winnerArray[winnerArray.length-1].score;
    }
    if (fs.existsSync(__dirname+'/../data/elo_raw/players/'+loser+'.json')) {
        let loserFile = fs.readFileSync(__dirname+'/../data/elo_raw/players/'+loser+'.json')
        loserArray = JSON.parse(loserFile);
        loserScore = loserArray[loserArray.length-1].score;
    }
    let mod = calcElo.calcElo(winnerScore,loserScore);
    winnerScore+=mod;
    loserScore-=mod;
    winnerArray.push({
        time:gameTime,
        score:winnerScore
    });
    fs.writeFileSync(__dirname+'/../data/elo_raw/players/'+winner+'.json',JSON.stringify(winnerArray));
    loserArray.push({
        time:gameTime,
        score:loserScore
    });
    fs.writeFileSync(__dirname+'/../data/elo_raw/players/'+loser+'.json',JSON.stringify(loserArray));
}

function calcElo_teams(winner,loser,gameTime){
    let winnerScore = 1000;
    let winnerArray = [];
    let loserScore = 1000;
    let loserArray = [];
    winner = synonyms_teams.teams(winner);
    loser = synonyms_teams.teams(loser);
    if (fs.existsSync(__dirname+'/../data/elo_raw/teams/'+winner+'.json')) {
        let winnerFile = fs.readFileSync(__dirname+'/../data/elo_raw/teams/'+winner+'.json')
        winnerArray = JSON.parse(winnerFile);
        winnerScore = winnerArray[winnerArray.length-1].score;
    }
    if (fs.existsSync(__dirname+'/../data/elo_raw/teams/'+loser+'.json')) {
        let loserFile = fs.readFileSync(__dirname+'/../data/elo_raw/teams/'+loser+'.json')
        loserArray = JSON.parse(loserFile);
        loserScore = loserArray[loserArray.length-1].score;
    }
    let mod = calcElo.calcElo(winnerScore,loserScore);
    winnerScore+=mod;
    loserScore-=mod;
    winnerArray.push({
        time:gameTime,
        score:winnerScore
    });
    fs.writeFileSync(__dirname+'/../data/elo_raw/teams/'+winner+'.json',JSON.stringify(winnerArray));
    loserArray.push({
        time:gameTime,
        score:loserScore
    });
    fs.writeFileSync(__dirname+'/../data/elo_raw/teams/'+loser+'.json',JSON.stringify(loserArray));
}

function calcElo_regions(winner,loser,gameTime,league='none'){
    let winnerScore = 1000;
    let winnerArray = [];
    let loserScore = 1000;
    let loserArray = [];
    winner = synonyms_leagues.teams(synonyms_teams.teams(winner),league);
    loser = synonyms_leagues.teams(synonyms_teams.teams(loser),league);
    if(winner != loser && winner != 'Other' && loser != 'Other'){
        if (fs.existsSync(__dirname+'/../data/elo_raw/regions/'+winner+'.json')) {
            let winnerFile = fs.readFileSync(__dirname+'/../data/elo_raw/regions/'+winner+'.json')
            winnerArray = JSON.parse(winnerFile);
            winnerScore = winnerArray[winnerArray.length-1].score;
        }
        if (fs.existsSync(__dirname+'/../data/elo_raw/regions/'+loser+'.json')) {
            let loserFile = fs.readFileSync(__dirname+'/../data/elo_raw/regions/'+loser+'.json')
            loserArray = JSON.parse(loserFile);
            loserScore = loserArray[loserArray.length-1].score;
        }
        let mod = calcElo.calcElo(winnerScore,loserScore);
        winnerScore+=mod;
        loserScore-=mod;
        winnerArray.push({
            time:gameTime,
            score:winnerScore
        });
        fs.writeFileSync(__dirname+'/../data/elo_raw/regions/'+winner+'.json',JSON.stringify(winnerArray));
        loserArray.push({
            time:gameTime,
            score:loserScore
        });
        fs.writeFileSync(__dirname+'/../data/elo_raw/regions/'+loser+'.json',JSON.stringify(loserArray));
    }
}

function calcElo_champion(winner,winnerTeam,loser,loserTeam,gameTime){
    let winnerScore = 1000;
    let winnerArray = [];
    let loserScore = 1000;
    let loserArray = [];
    winner = winner.replace(':','-');
    loser = loser.replace(':','-');
    if (fs.existsSync(__dirname+'/../data/elo_raw/champion/'+winner+'.json')) {
        let winnerFile = fs.readFileSync(__dirname+'/../data/elo_raw/champion/'+winner+'.json')
        winnerArray = JSON.parse(winnerFile);
        winnerScore = winnerArray[winnerArray.length-1].score;
    }
    if (fs.existsSync(__dirname+'/../data/elo_raw/champion/'+loser+'.json')) {
        let loserFile = fs.readFileSync(__dirname+'/../data/elo_raw/champion/'+loser+'.json')
        loserArray = JSON.parse(loserFile);
        loserScore = loserArray[loserArray.length-1].score;
    }
    let mod = calcElo.calcElo(winnerScore,loserScore);
    winnerScore+=mod;
    loserScore-=mod;
    winnerArray.push({
        time:gameTime,
        score:winnerScore
    });
    fs.writeFileSync(__dirname+'/../data/elo_raw/champion/'+winner+'.json',JSON.stringify(winnerArray));
    loserArray.push({
        time:gameTime,
        score:loserScore
    });
    fs.writeFileSync(__dirname+'/../data/elo_raw/champion/'+loser+'.json',JSON.stringify(loserArray));
}
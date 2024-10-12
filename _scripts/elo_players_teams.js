const fs = require('node:fs');
const path = require("path");
const calcElo = require('./calculator/_elo_calc.js');
const synonyms_players = require('./synonyms/players.js');

cleanup_elo_players();
function cleanup_elo_players(){
    console.log('Cleanup of the ELOs')
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
                console.log('Cleanup done! Starting calculations');
                cleanup_elo_players_checks();
            }else{
                console.log('Still '+files.length+' to delete! Please wait!');
                cleanup_elo_players();
            }
        })
    },1000)
}

function cleanup_elo_players_checks(){
    console.log('Cleanup of the ELOs checks')
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
                console.log('Cleanup done! Starting calculations');
                elo_players();
            }else{
                console.log('Still '+files.length+' to delete! Please wait!');
                cleanup_elo_players_checks();
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
                    calcElo_player(game.Blue.top.playername,game.Red.top.playername,game.Date);
                    calcElo_player(game.Blue.jng.playername,game.Red.jng.playername,game.Date);
                    calcElo_player(game.Blue.mid.playername,game.Red.mid.playername,game.Date);
                    calcElo_player(game.Blue.bot.playername,game.Red.bot.playername,game.Date);
                    calcElo_player(game.Blue.sup.playername,game.Red.sup.playername,game.Date);
                }else{
                    calcElo_player(game.Red.top.playername,game.Blue.top.playername,game.Date);
                    calcElo_player(game.Red.jng.playername,game.Blue.jng.playername,game.Date);
                    calcElo_player(game.Red.mid.playername,game.Blue.mid.playername,game.Date);
                    calcElo_player(game.Red.bot.playername,game.Blue.bot.playername,game.Date);
                    calcElo_player(game.Red.sup.playername,game.Blue.sup.playername,game.Date);
                }
                console.log((i/files.length*100).toFixed(3)+'% ('+i+'/'+files.length+') games scanned.');
            }
        }
    })
}

function calcElo_player(winner,loser,gameTime){
    let winnerScore = 1000;
    let winnerArray = [];
    let loserScore = 1000;
    let loserArray = [];
    winner = synonyms_players.players(winner);
    loser = synonyms_players.players(loser);
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
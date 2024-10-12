const fs = require('node:fs');
const calcElo = require('./calculator/_elo_calc.js')
const convertJsonToCsv = require('./converter/json_to_csv.js')

elo_rvb();
function elo_rvb(){
    let scoreBlue = 1000;
    let scoreRed = 1000;
    let gamesTrack = [];
    let directory = __dirname+'/../data/games/';
    let i=0;
    fs.readdir(directory, (err, files) => {
        if (err) throw err;
        for (const file of files) {
            i++;
            if(file != '.gitignore' && file != '.gitkeep' ){
                let match = fs.readFileSync(__dirname+'/../data/games/'+file);
                match = JSON.parse(match);
                if(match.Winner == 'Blue'){
                    let mod = calcElo.calcElo(scoreBlue,scoreRed);
                    scoreBlue+=mod;
                    scoreRed-=mod;
                }else{
                    let mod = calcElo.calcElo(scoreRed,scoreBlue);
                    scoreBlue-=mod;
                    scoreRed+=mod;
                }
                gamesTrack.push({date:match.Date,blue:scoreBlue,red:scoreRed});
                console.log((i/files.length*100).toFixed(3)+'% ('+i+'/'+files.length+') Blue:'+scoreBlue+' Red:'+scoreRed);
            }
        }
        fs.writeFileSync(__dirname+'/../data/elo_raw/rvb/rvb.json',JSON.stringify(gamesTrack));
        fs.writeFileSync(__dirname+'/../data/elo_raw/rvb/rvb.csv',convertJsonToCsv.jsonToCsv(gamesTrack));
    });
}
const fs = require('node:fs');
module.exports = {
    teams : function(player){
        switch(player){
            default:
                fs.writeFileSync(__dirname+'/../../data/elo_raw/teams/check/'+player+'.txt',"https://liquipedia.net/leagueoflegends/"+player);
                return player;
        }
    }
}
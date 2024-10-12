const fs = require('node:fs');
module.exports = {
    players : function(player){
        switch(player){
            default:
                fs.writeFileSync(__dirname+'/../../data/elo_raw/players/check/'+player+'.txt',"https://liquipedia.net/leagueoflegends/"+player);
                return player;
        }
    }
}
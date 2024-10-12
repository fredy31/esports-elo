module.exports = {
    teams : function(player){
        switch(player){
            default:
                fs.writeFileSync(__dirname+'/../data/elo_raw/players/player_to_check/'+player+'.txt',"https://liquipedia.net/leagueoflegends/"+player);
                return player;
        }
    }
}
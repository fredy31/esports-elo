const fs = require('node:fs');
module.exports = {
    teams : function(player){
        player = player.replace("\"",'').replace('|','-');
        switch(player){
            case '4everzenzyg':
            case '7th heaven':
            case '7th heaven X':
            case '2144 Danmu Gaming':
            case '2144 Gaming':
            case 'Absolute':
            case 'Acclaim EmpireX':
            case 'affNity':
            case 'Albus NoX Luna':
            case 'AlienTech eSports':
            case 'Alpha Sydney':
            case 'Also Known As':
            case 'ALTERNATE aTTaX':
            case 'ANT Gaming':
            case 'Apex Gaming':
            case 'Apex Pride':
            case 'Area of Effect eSports':
            case 'Arsenal':
            case 'Ascension Gaming':
            case 'ASP Esports':
            case 'Awsomniac':
            case '100 Thieves':
            case 'Team Solo Mid':
            case 'Counter Logic Gaming':
            case 'Assassin Sniper':
            case 'Astral Authority':
            case 'ATLAS eSports Team':
            case 'Avant Gaming':
            case 'Aware Gaming':
            case 'Bangkok Titans':
            case 'Bencheados':
            case '6Sense':
            case 'ASUS ROG Army':
            case 'Beşiktaş Esports':
            case 'Beşiktaş.Oyun Hizmetleri':
            case 'Big Gods Jackals':
            case 'Big Gods':
            case 'Big Plays Incorporated':
            case 'Bilibili Gaming':
            case '100 Thieves Academy':
            case 'Born to Kill':
            case 'BowQen Blackbucks':
            case 'BPZ':
            case 'Brave e-Sports':
            case 'BrawL eSports':
            case 'BrawL.NA':
            case 'Bring It On':
                // Team has no alias or none found
                return player;
            case '5Fox E-Sports Club':
            case 'Falkol e-Sports':
                return 'Falkol e-Sports';
            case 'Abyss Esports':
            case 'Bombers':
                return 'Bombers'
            case 'Ahq e-Sports Club':
            case 'ahq eSports Club':
                return 'Ahq e-Sports Club';
            case 'Alliance':
            case 'Elements':
                return 'Elements';
            case 'Dignitas':
            case 'Clutch Gaming':
                return 'Dignitas';
            case 'bbq Olivers':
            case 'ESC Ever':
                return 'bbq Olivers'
            case '17 Academy':
            case 'MachiX':
                return 'MachiX';
            case 'Cloud9 Academy':
            case 'Cloud9 Challengers':
                return 'Cloud9 Challengers';
            default:
                fs.writeFileSync(__dirname+'/../../data/elo_raw/teams/check/'+player+'.txt',"https://liquipedia.net/leagueoflegends/"+player);
                return player;
        }
    }
}
const fs = require('node:fs');
module.exports = {
    regions : function(player){
        player = player.replace("\"",'').replace('|','-');
        switch(player){
            //Brazil
            case 'Falkol e-Sports':
                return 'Brazil';
            //NA LCS
            case 'Apex Gaming':
            case '100 Thieves':
            case 'Dignitas':
            case 'Team Solo Mid':
            case 'Counter Logic Gaming':
                return 'LCS';
            case 'Big Gods Jackals':
            case '100 Thieves Academy':
            case 'Cloud9 Challengers':
                return 'NA Challengers'
            //LEC (EU)
            case 'Elements':
                return 'LEC';
            //LCK (KR)
            case 'bbq Olivers':
                return 'LCK';
            //LPL (CN)
            case 'Bilibili Gaming':
                return 'LPL';
            // OCE (Australia)
            case 'Bombers':
            case 'Avant Gaming':
                return 'OCE';
            // LMS (Taiwan)
            case 'Ahq e-Sports Club':
            case 'MachiX':
                return 'LMS';
            // CIS (Russia)
            case 'Albus NoX Luna':
                return 'CIS';
            // Thailand
            case 'Ascension Gaming':
                return 'Thailand'
            //LPLoL (Portugal)
            case 'ASP Esports':
                return 'LPLoL';
            //LVP (Spain)
            case 'ASUS ROG Army':
                return 'LVP';
            //TCL (Turkey)
            case 'Beşiktaş Esports':
                return 'TCL';
            // Not in any of the main leagues or cannot be found
            case '4everzenzyg':
            case '7th heaven':
            case '7th heaven X':
            case '2144 Danmu Gaming':
            case '2144 Gaming':
            case 'Absolute':
            case 'Acclaim EmpireX':
            case 'affNity':
            case 'AlienTech eSports':
            case 'Alpha Sydney':
            case 'Also Known As':
            case 'ALTERNATE aTTaX':
            case 'ANT Gaming':
            case 'Apex Pride':
            case 'Area of Effect eSports':
            case 'Arsenal':
            case 'Awsomniac':
            case 'Assassin Sniper':
            case 'Astral Authority':
            case 'ATLAS eSports Team':
            case 'Aware Gaming':
            case 'Bangkok Titans':
            case 'Bencheados':
            case '6Sense':
            case 'Beşiktaş.Oyun Hizmetleri':
            case 'Big Gods' :
            case 'Big Plays Incorporated':
            case 'Born to Kill':
            case 'BowQen Blackbucks':
            case 'BPZ':
            case 'Brave e-Sports':
            case 'BrawL eSports':
            case 'BrawL.NA':
            case 'Bring It On':
                return 'Other';
            default:
                fs.writeFileSync(__dirname+'/../../data/elo_raw/regions/check/'+player+'.txt',"https://liquipedia.net/leagueoflegends/"+player);
                return 'Other';
        }
    }
}
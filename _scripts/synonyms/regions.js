const fs = require('node:fs');
module.exports = {
    regions : function(player){
        player = player.replace("\"",'').replace('|','-').replace("/",'-');
        switch(player){
            //Brazil
            case 'Falkol e-Sports':
            case 'Big Gods' :
                return 'Brazil';
            // Latin America
            case 'Bencheados':
            case '6Sense':
            case 'BrawL eSports':
            case 'Bring It On':
            case 'CASLA Esports':
            case 'Cattleya Gaming':
                return 'LAT';
            case 'Born to Kill':
                return 'LAS'
            //NA LCS
            case 'Castle Berry':
            case 'Apex Gaming':
            case '100 Thieves':
            case 'Dignitas':
            case 'TSM':
            case 'Counter Logic Gaming':
            case 'Cloud9':
            case 'Big Gods Jackals':
            case '100 Thieves Academy':
            case 'Cloud9 Challengers':
            case 'affNity':
            case 'Also Known As':
            case 'Area of Effect eSports':
            case 'Arsenal':
            case 'Dream Team':
            case 'Aware Gaming':
            case 'BrawL.NA':
            case 'Campus Party Sparks':
            case 'Case Esports':
                return 'NA'
            //LEC (EU)
            case 'Elements':
            case '4everzenzyg':
            case 'ASUS ROG Army':
            case 'Cloud9 Eclipse':
            case 'ASP Esports':
            case 'AlienTech eSports':
            case 'ALTERNATE aTTaX':
            case 'Apex Pride':
            case 'Awsomniac':
            case '4Elements Esports':
            case '4Elements Scuttle Squad':
                return 'EU';
            //LCK (KR)
            case 'bbq Olivers':
            case 'BPZ':
                return 'KR';
            //LPL (CN)
            case 'Bilibili Gaming':
            case 'Top Esports':
            case '2144 Gaming':
            case 'Chong Qing Gaming':
                return 'CN';
            // OCE (Australia)
            case 'Bombers':
            case 'Avant Gaming':
            case 'Infernum Gaming':
            case 'Alpha Sydney':
                return 'OCE';
            // LMS (Taiwan)
            case 'Ahq e-Sports Club':
            case 'MachiX':
            case 'Assassin Sniper':
                return 'LMS';
            // CIS (Russia)
            case 'Albus NoX Luna':
                return 'CIS';
            // SEA (Thailand, Singapore, etc)
            case 'Ascension Gaming':
            case 'Acclaim EmpireX':
            case 'MEGA':
                return 'SEA'
            //TCL (Turkey)
            case 'Beşiktaş Esports':
            case 'ANT Gaming':
            case 'ATLAS eSports Team':
            case 'Beşiktaş.Oyun Hizmetleri':
            case 'Big Plays Incorporated':
                return 'TCL';
            case '7th heaven':
            case '7th heaven X':
            case 'BowQen Blackbucks':
                return 'JP';
            //EMEA
            case '3BL Esports':
                return 'EMEA';
            // Not in any of the main leagues or cannot be found
            
            
            
            
            
            
            
            
            
            
            
            
                return 'Other';
            default:
                fs.writeFileSync(__dirname+'/../../data/elo_raw/regions/check/'+player+'.txt',"https://lol.fandom.com/wiki/"+player);
                return 'Other';
        }
    }
}
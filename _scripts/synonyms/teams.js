const fs = require('node:fs');
module.exports = {
    teams : function(player){
        player = player.replace("\"",'').replace('|','-').replace("/",'-');
        switch(player){
            case '4everzenzyg':
            case '7th heaven':
            case '7th heaven X':
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
            case 'ATLAS eSports Team':
            case 'Avant Gaming':
            case 'Aware Gaming':
            
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
            case 'Cloud9':
            case 'Cloud9 Eclipse':
            case '3BL_Esports':
            case '2144 Gaming':
            case '4Elements Esports':
            case '4Elements Scuttle Squad':
            case 'CASLA Esports':
            case 'Case Esports':
            case 'Castle Berry':
            case 'Cattleya Gaming':
            case 'Call Gaming':
            case 'Chiefs Esports Club':
            case 'ÇİLEKLER':
            case 'CLG Black':
            case 'Authority E-sports':
            case 'Abyss Academy':
            case 'Athletico Esports':
            case 'ahq Fighter':
            case 'AKIHABARA ENCOUNT':
            case 'ad hoc gaming':
            case 'Aftershock Esports':
            case 'vVv Gaming White':
            case 'y so E-Sports':
            case 'Steve Bakes Cookies':
            case 'Team Coast Gold':
            case 'vVv Gaming':
            case 'compLexity.Red':
            case 'Team Green Forest':
            case 'GG Call Nash':
            case 'Playing Ducks':
            case 'Wazabi Gaming':
            case 'COGnitive Gaming':
            case 'Denial eSports':
            case 'XDG Gaming':
            case 'Evil Geniuses':
            case 'compLexity Gaming':
            case 'NaJin White Shield':
            case 'Fnatic':
            case 'SK Gaming':
            case 'Team ROCCAT':
            case 'Ninjas in Pyjamas':
            case 'Team LoLPro':
            case 'Unicorns of Love':
            case 'H2k-Gaming':
            case 'SK Gaming Prime':
            case 'Frank Fang Gaming':
            case 'Zenith Esports':
            case 'Dark Passage':
            case 'EDward Gaming':
            case 'KaBuM! Esports':
            case 'Oh My God':
            case 'Samsung White':
            case 'compLexity.White':
            case 'Enemy':
            case 'Fission Esports':
            case 'Infinity Esports':
            case 'Noble Truth':
            case 'Cyber Gaming':
            case 'Different Dimension':
            case 'Meloncats':
            case 'Team Fusion':
            case 'ThunderBot SPARTA':
            case 'Tricked Esport':
            case 'DarlingYou':
            case 'Jin Air Green Wings':
            case 'KT Rolster':
            case 'Machi Crew':
            case 'Midnight Sun Esports':
            case 'LowLandLions.White':
            case 'LowLandLions':
            case 'LowLandLions.Black':
            case 'NumberOne Esports':
            case 'Storm':
            case 'Team Frostbite':
            case 'Team Turquality':
            case 'ZONE eSports':
                // Team has no alias or none found
                return player;
            case 'Winterfox':
            case 'Evil Geniuses':
                return 'Evil Geniuses';
            case 'Team Dragon Knights':
            case 'Eanix':
                return 'Team Dragon Knights';
            case 'HWA Gaming':
            case 'İstanbul Wildcats':
                return 'İstanbul Wildcats';
            case 'Fnatic Academy':
            case 'Fnatic Rising':
            case 'Fnatic TQ':
                return 'Fnatic TQ';
            case 'SK Telecom T1':
            case 'T1':
                return 'T1';
            case 'Samsung Galaxy':
            case 'KSV eSports':
            case 'Gen.G':
                return 'Gen.G';
            case 'ROX Tigers':
            case 'Hanwha Life Esports':
                return 'Hanwha Life Esports';
            case 'NaJin e-mFire':
            case 'e-mFire':
            case 'Kongdoo Monster':
                return 'Kongdoo Monster';
            case 'Logitech G Snipers':
            case 'Taipei Snipers':
            case 'Logitech G Fighter':
                return 'Logitech G Snipers';
            case 'Incredible Miracle':
            case 'Longzhu Gaming':
            case 'Kingzone DragonX':
            case 'DRX':
                return 'DRX';
            case 'Hong Kong Esports':
            case 'Hong Kong Attitude':
                return 'Hong Kong Attitude';
            case 'n!faculty':
            case 'MOUZ NXT':
                return 'MOUZ NXT';
            case 'Final Five':
            case 'Vortex':
                return 'Vortex';
            case 'Taipei Assassins':
            case 'J Team':
                return 'J Team';
            case 'Royal Club':
            case 'Royal Never Give Up':
            case 'Star Horn Royal Club':
                return 'Royal Never Give Up';
            case 'Team 8':
            case 'Immortals':
                return 'Immortals';
            case 'Gamers2':
            case 'G2 Esports':
                return 'G2 Esports';
            case 'Curse Academy':
            case 'Gravity':
                return 'Gravity';
            case 'Team Coast':
            case 'Good Game University':
                return 'Team Coast';
            case 'Millenium':
            case 'against All authority':
                return 'Millenium';
            case 'Gambit Gaming':
            case 'Moscow Five':
                return 'Gambit Gaming';
            case 'Copenhagen Wolves':
            case 'Nerv':
                return 'Copenhagen Wolves';
            case 'Samsung Blue':
            case 'MVP Blue':
                return 'Samsung Blue';
            case 'LMQ':
            case 'Team Impulse':
            case 'Phoenix1':
                return 'Phoenix1';
            case 'Team Curse':
            case 'Team Liquid':
                return 'Team Liquid';
            case 'SUPA HOT CREW':
            case 'MeetYourMakers':
                return 'MeetYourMakers';
            case 'Lublin Shore':
            case 'Reason Gaming':
                return 'Reason Gaming';
            case 'Departed':
            case 'Denial eSports.Europe':
                return 'Denial eSports.Europe';
            case 'Determined Gaming':
            case 'compLexity.Black':
                return 'compLexity.Black';
            case 'Dadslammers':
            case 'compLexity Gaming':
                return 'compLexity Gaming';
            case 'Afro Beast':
            case 'BUFF':
                return 'BUFF';
            case 'AGO esports':
            case 'AGO Singularity':
            case 'AGO ROGUE':
            case 'AliorBank Team':
                return 'AGO esports';
            case 'CJ Entus':
            case 'Azubu Frost':
            case 'Azubu Blaze':
                return 'CJ Entus';
            case 'CB Gaming':
            case 'Black Lotus':
                return 'Black Lotus';
            case 'CCfuture':
            case 'Chong Qing Gaming':
                return 'Chong Qing Gaming';
            case '5 Hydra Esport':
            case 'Campus Party Sparks':
                return 'Campus Party Sparks';
            case 'Absolute':
            case 'Infernum Gaming':
                return 'Infernum Gaming'
            case '2144 Danmu Gaming':
            case 'DAN Gaming':
            case 'Top Esports':
                return 'Top Esports';
            case 'Smash It Down':
            case '7th heaven':
                return 'Smash It Down';
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
            case 'Cloud9 Tempest':
                return 'Cloud9 Challengers';
            case 'Cloud9 Challenger':
            case 'FlyQuest':
                return 'FlyQuest';
            case 'Astral Authority':
            case 'Dream Team':
                return 'Dream Team';
            case 'Bangkok Titans':
            case 'MEGA':
                return 'MEGA';
            case 'Brave e-Sports':
                return 'Brave e-Sports';
            default:
                if(!fs.existsSync(__dirname+'/../../data/elo_raw/teams/check/'+player+'.txt')){
                    fs.writeFileSync(__dirname+'/../../data/elo_raw/teams/check/'+player+'.txt',"https://lol.fandom.com/wiki/"+player);
                }
                return player;
        }
    }
}
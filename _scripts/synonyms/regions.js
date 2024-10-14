const fs = require('node:fs');
module.exports = {
    regions : function(player){
        player = player.replace("\"",'').replace('|','-').replace("/",'-');
        switch(player){
            //Brazil
            case 'Falkol e-Sports':
            case 'Big Gods' :
            case 'Brave e-Sports':
            case 'KaBuM! Esports':
            case 'paiN Gaming':
            case 'RED Canids':
            case 'INTZ':
            case 'Operation Kino e-Sports':
            case 'KaBuM! Black':
            case 'Dexterity Team':
            case 'CNB e-Sports Club':
            case 'g3nerationX':
            case 'Vivo Keyd Stars':
                return 'Brazil';
            // Latin America
            case 'Bencheados':
            case '6Sense':
            case 'BrawL eSports':
            case 'Bring It On':
            case 'CASLA Esports':
            case 'Cattleya Gaming':
            case 'Authority E-sports':
            case 'Furious Gaming':
            case 'Kaos Latin Gamers':
            case 'Hafnet eSports':
            case 'Isurus':
            case 'Last Kings':
            case 'Rebirth eSports':
                return 'LAT';
            case 'Born to Kill':
                return 'LAS'
            //NA LCS
            case 'NRG':
            case 'Echo Fox':
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
            case 'Call Gaming':
            case 'CLG Black':
            case 'FlyQuest':
            case 'vVv Gaming White':
            case 'y so E-Sports':
            case 'compLexity Gaming':
            case 'compLexity.Black':
            case 'vVv Gaming':
            case 'compLexity.Red':
            case 'Team Green Forest':
            case 'Wazabi Gaming':
            case 'COGnitive Gaming':
            case 'Denial eSports':
            case 'XDG Gaming':
            case 'Evil Geniuses':
            case 'Team Liquid':
            case 'compLexity Gaming':
            case 'Phoenix1':
            case 'Team Coast':
            case 'Gravity':
            case 'Immortals':
            case 'Team LoLPro':
            case 'Frank Fang Gaming':
            case 'Zenith Esports':
            case 'compLexity.White':
            case 'Enemy':
            case 'Vortex':
            case 'Fission Esports':
            case 'Infinity Esports':
            case 'Noble Truth':
            case 'Team Fusion':
            case 'Storm':
            case 'Team Dragon Knights':
            case 'Team Frostbite':
            case 'Team Liquid Academy':
            case 'Team Imagine':
            case 'DatZit Gaming':
            case 'Team EnVyUs':
            case 'Top Dog Gaming':
            case 'Ember':
                return 'NA'
            //LEC (EU)
            case 'Legion Gaming':
            case 'Epsilon Esports':
            case 'Wortex Gaming':
            case 'Low Priority':
            case 'Team ROCK':
            case 'Team Nevo':
            case 'Tricked Esport':
            case 'ThunderBot SPARTA':
            case 'Meloncats':
            case 'Different Dimension':
            case 'Cyber Gaming':
            case 'MeetYourMakers':
            case 'Playing Ducks':
            case 'GG Call Nash':
            case 'Reason Gaming':
            case 'Team Coast Gold':
            case 'Denial eSports.Europe':
            case 'Steve Bakes Cookies':
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
            case 'ad hoc gaming':
            case 'Copenhagen Wolves':
            case 'Fnatic':
            case 'Gambit Gaming':
            case 'Millenium':
            case 'SK Gaming':
            case 'Team ROCCAT':
            case 'Ninjas in Pyjamas':
            case 'G2 Esports':
            case 'MOUZ NXT':
            case 'Unicorns of Love':
            case 'H2k-Gaming':
            case 'SK Gaming Prime':
            case 'Fnatic TQ':
            case 'LowLandLions.White':
            case 'LowLandLions':
            case 'LowLandLions.Black':
            case 'Millenium Spirit':
            case 'Origen':
            case 'MAD Lions KOI':
            case 'Copenhagen Wolves Academy':
            case 'Ex Nihilo':
            case 'Team Overclockers UK':
            case 'Giants Gaming':
            case 'E-corp Gaming':
            case 'Huma':
            case 'Illuminar Gaming':
            case 'Team Vitality':
                return 'EU';
            //LCK (KR)
            case 'bbq Olivers':
            case 'BPZ':
            case 'CJ Entus':
            case 'NaJin White Shield':
            case 'Samsung Blue':
            case 'Samsung White':
            case 'DRX':
            case 'Jin Air Green Wings':
            case 'KT Rolster':
            case 'Kongdoo Monster':
            case 'Hanwha Life Esports':
            case 'Gen.G':
            case 'T1':
            case 'Kwangdong Freecs':
            case 'Winners':
            case 'SBENU Korea':
            case 'Xenics':
            case 'Dark Wolves':
            case 'CTU Pathos':
            case 'Young Boss':
            case 'MVP':
            case 'Pathos':
            case 'SQUARE':
            case 'SeolHaeOne Prince':
            case 'WaY':
                return 'KR';
            //LPL (CN)
            case 'Newbee':
            case 'Bilibili Gaming':
            case 'Top Esports':
            case '2144 Gaming':
            case 'Chong Qing Gaming':
            case 'EDward Gaming':
            case 'Oh My God':
            case 'Royal Never Give Up':
            case 'Roar':
            case 'Team WE':
            case 'Invictus Gaming':
            case 'LGD Gaming':
            case 'Legend Dragon':
            case 'Wan Yoo':
            case 'QG Reapers':
            case 'Oh My God Academy':
            case 'Revenger':
            case 'LinGan e-Sports':
            case 'D7G Esports Club':
            case 'Invictus Gaming Young':
            case 'Young Miracles':
            case 'ZTR Gaming':
                return 'CN';
            // OCE (Australia)
            case 'Bombers':
            case 'Legacy Genesis':
            case 'Avant Gaming':
            case 'Infernum Gaming':
            case 'Alpha Sydney':
            case 'Chiefs Esports Club':
            case 'Abyss Academy':
            case 'Athletico Esports':
            case 'Sudden Fear':
            case 'Dire Wolves':
            case 'Legacy Esports':
            case 'MAMMOTH':
            case 'Hellions e-Sports Club':
            case 'Trident Esports':
            case 'Sentinels ESC':
            case 'TEAM4NOT':
            case 'The Chiefs Black':
                return 'OCE';
            // LMS (Taiwan)
            case 'Ahq e-Sports Club':
            case 'MachiX':
            case 'Assassin Sniper':
            case 'ahq Fighter':
            case 'BUFF':
            case 'J Team':
            case 'DarlingYou':
            case 'Hong Kong Attitude':
            case 'Dream or Reality':
            case 'Taipei Snipers':
            case 'Midnight Sun Esports':
            case 'Logitech G Snipers':
            case 'Never Give Up':
            case 'Flash Wolves':
            case 'Machi Esports':
            case 'Mad Dragon':
            case 'XGamers':
                return 'LMS';
            // CIS (Russia)
            case 'M19':
            case 'Natus Vincere CIS':
            case 'Vaevictis eSports':
            case 'RoX':
            case 'Team Differential':
            case 'Team Empire':
            case 'Team Just':
            case 'Vega Squadron':
                return 'CIS';
            // SEA (Thailand, Singapore, etc)
            case 'Ascension Gaming':
            case 'Acclaim EmpireX':
            case 'MEGA':
            case 'Kuala Lumpur Hunters':
                return 'SEA'
            //TCL (Turkey)
            case 'Beşiktaş Esports':
            case 'ANT Gaming':
            case 'ATLAS eSports Team':
            case 'Beşiktaş.Oyun Hizmetleri':
            case 'Big Plays Incorporated':
            case 'ÇİLEKLER':
            case 'Aftershock Esports':
            case 'Dark Passage':
            case 'İstanbul Wildcats':
            case 'NumberOne Esports':
            case 'Team Turquality':
            case 'ZONE eSports':
            case 'YouthCrew Esports':
            case 'Oyun Hizmetleri':
            case 'MeetYourMakers.TR':
            case 'Team AURORA':
            case 'Victorious Ace':
            case 'Imperial Esports':
            case 'Imperium Pro Team':
                return 'TCL';
            // Japan
            case '7th heaven':
            case '7th heaven X':
            case 'BowQen Blackbucks':
            case 'AKIHABARA ENCOUNT':
            case 'DetonatioN FocusMe':
            case 'PENTAGRAM':
            case 'FENNEL':
            case 'Team BlackEye':
            case 'Unsold Stuff Gaming':
            case 'Nibble Gaming':
            case 'Saikyo Makinyan':
            case 'Burning Core Toyama':
                return 'JP';
            //EMEA
            case '3BL Esports':
            case 'AGO esports':
            case 'Team Refuse':
            case 'Wonder Stag e-Sports':
            case 'Papara SuperMassive':
                return 'EMEA';
            // Not in any of the main leagues or cannot be found
            case 'Kayana Gaming': //404
            
            
            
            
            
            
            
            
            
            
            
                return 'Other';
            default:
                if(!fs.existsSync(__dirname+'/../../data/elo_raw/regions/check/'+player+'.txt')){
                    fs.writeFileSync(__dirname+'/../../data/elo_raw/regions/check/'+player+'.txt',"https://lol.fandom.com/wiki/"+player);
                }
                return 'Other';
        }
    }
}
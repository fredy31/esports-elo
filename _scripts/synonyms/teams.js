const fs = require('node:fs');
module.exports = {
    teams : function(player){
        player = player.replace("\"",'').replace('|','-').replace("/",'-').replace(':','');
        switch(player){
            case 'EDward Esports':
            case 'I May':
            case 'Bilibili Gaming':
                return 'Bilibili Gaming';
            case 'RoX':
            case 'The RED':
                return 'RoX';
            case 'Rascal Jester':
            case 'FENNEL':
                return 'FENNEL';
            case 'Rampage':
            case 'PENTAGRAM':
                return 'PENTAGRAM';
            case 'NRG':
            case 'NRG Kia':
                return 'NRG';
            case 'Papara SuperMassive':
            case 'SuperMassive Blaze':
            case 'Blaze Esports':
                return 'Papara SuperMassive';
            case 'Hard Random':
            case 'Good Team Multigaming':
            case 'Albus NoX Luna':
            case 'M19':
                return 'M19';
            case 'Cougar E-Sport':
            case 'Mad Dragon':
                return 'Mad Dragon';
            case 'Qiao Gu Reapers':
            case 'Newbee':
                return 'Newbee';
            case 'Mysterious Monkeys':
            case 'Misfits Academy':
            case 'Misfits Premier':
            case 'ad hoc gaming':
                return 'ad hoc gaming';
            case 'Giants':
            case 'Giants Gaming':
                return 'Giants Gaming';
            case 'Vivo Keyd':
            case 'Vivo Keyd Stars':
                return 'Vivo Keyd Stars';
            case 'Tatoo':
            case 'Young Boss':
                return 'Young Boss';
            case 'Dexterity Team':
            case 'Santos Dexterity':
                return 'Dexterity Team';
            case 'JAYOB e-Sports':
            case 'Team awp':
            case 'Operation Kino e-Sports':
                return 'Operation Kino e-Sports';
            case 'INTZ Red':
            case 'RED Canids':
                return 'RED Canids';
            case 'Oyun Hizmetleri ÇİLEKLER':
            case 'ÇİLEKLER':
                return 'ÇİLEKLER';
            case 'Team Immunity':
            case 'Hellions e-Sports Club':
                return 'Hellions e-Sports Club';
            case 'Sin Gaming':
            case 'MAMMOTH':
                return 'MAMMOTH';
            case 'Sin Academy':
            case 'MAMMOTH Academy':
                return 'MAMMOTH Academy';
            case 'Renegades':
            case 'Team EnVyUs':
                return 'Team EnVyUs';
            case 'Fiction eSports':
            case 'DatZit Gaming':
                return 'DatZit Gaming';
            case 'Prime Clan':
            case 'SBENU Korea':
                return 'SBENU Korea';
            case 'Winners':
            case 'Ever8 Winners':
                return 'Winners';
            case 'Rebels Anarchy':
            case 'Kwangdong Freecs':
            case 'Afreeca Freecs':
                return 'Kwangdong Freecs';
            case 'Crew e-Sports Club':
            case 'YouthCrew Esports':
                return 'YouthCrew Esports';
            case 'TSM Darkness':
            case 'Team Imagine':
            case 'Odyssey Gaming':
                return 'Team Imagine';
            case 'Team Dignitas EU':
            case 'Splyce':
            case 'MAD Lions KOI':
                return 'MAD Lions KOI';
            case 'Machi Crew':
            case 'Dream or Reality':
                return 'Dream or Reality';
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
            case 'RMA_e-Sports':
                return 'Brave e-Sports';
            case 'MF Gaming':
            case 'Wan Yoo':
            case 'WYDream':
                return 'Wan Yoo';
            case 'Newbee Young':
            case 'QG Reapers':
                return 'QG Reapers';
            case 'Oh My God Academy':
            case 'Oh My Dream':
                return 'Oh My God Academy';
            case 'Revenger':
            case 'Kx.Happy':
                return 'Revenger';
            case 'Stardust':
            case 'SeolHaeOne Prince':
                return 'SeolHaeOne Prince';
            case 'Team WE Future':
            case 'Mighty Eagle':
            case 'LinGan e-Sports':
                return 'LinGan e-Sports';
            case 'Unlimited Potential':
            case 'D7G Esports Club':
                return 'D7G Esports Club';
            case 'Young Glory':
            case 'Invictus Gaming Young':
                return 'Invictus Gaming Young';
            case 'WaY':
            case 'GGOGI':
                return 'WaY';
            case 'Inspire eSports':
            case 'Epsilon Esports':
                return 'Epsilon Esports';
            case 'Kaos Latin Gamers':
            case 'Azules Esports':
                return 'Kaos Latin Gamers';
            case 'SCARZ':
            case 'SCARZ Burning Core':
            case 'Burning Core':
            case 'Burning Core Toyama':
            case 'DetonatioN Rising':
                return 'Burning Core Toyama';
            case 'Bursaspor Academy':
            case '5 Ronin Academy':
                return '5 Ronin Academy';
            case 'Team Rigel':
            case 'Corvus':
            case 'Resurgence':
                return 'Resurgence';
            case 'Renegades Banditos':
            case 'Misfits Gaming':
                return 'Misfits Gaming';
            case 'Taipei Berserkers':
            case 'Dream Catcher Gaming':
            case 'Raise Gaming':
            case 'G-Rex':
                return 'G-Rex';
            case 'Team Forge':
            case 'QLASH Forge':
            case 'QLASH':
                return 'QLASH Forge';
            case 'T.Bear Gaming':
            case 'Suning':
            case 'Weibo Gaming':
                return 'Weibo Gaming';
            case 'Tainted Minds':
            case 'TM Gaming':
            case 'Tectonic':
                return 'Tainted Minds';
            case 'Game Talents':
            case 'Team WE Academy':
                return 'Team WE Academy';
            case 'Snake Esports':
            case 'LNG Esports':
                return 'LNG Esports';
            case 'Saint Gaming':
            case 'Hyper Youth Gaming':
                return 'Saint Gaming';
            case 'Rising Star Gaming':
            case 'Rising SuperStar Gaming':
            case 'GC Busan Rising Star':
            case 'VSG':
                return 'VSG';
            case 'Vici Gaming':
            case 'Rare Atom':
                return 'Rare Atom';
            case 'Virtuoso Gaming':
            case 'Team GBK':
                return 'Virtuoso Gaming';
            case 'I Gaming Star':
            case 'ES Sharks':
            case 'Team Dynamics':
            case 'Nongshim RedForce':
                return 'Nongshim RedForce';
            case 'Team Mist':
            case 'Wayi Spider':
            case 'Team Afro':
                return 'Team Afro';
            case 'Team Genesis':
            case 'INTZ.Genesis':
            case 'Team oNe eSports':
                return 'Team oNe eSports';
            case 'Team Orora':
            case 'Galakticos':
                return 'Galakticos';
            case 'Vestigial':
            case 'Team Flash':
                return 'Team Flash';
            case 'Predators Esports':
            case 'XTEN Esports':
                return 'XTEN Esports';
            case 'Revenge eSports':
            case 'Elite Wolves':
                return 'Elite Wolves';
            // No alias/namechange
            case 'Infamous Gaming':
            case 'Dash9 Gaming':
            case 'Darkness Eagles Esports':
            case 'INFINITY':
            case 'Team Cappadocia':
            case 'SuperMassive TNG':
            case 'Vaevictis Syndicate':
            case 'Team Just Alpha':
            case 'Los Grandes':
            case 'e-Champ Gaming':
            case 'RPG-KINGDOM':
            case 'Overdrive':
            case 'Cyclone':
            case 'Team Exile5':
            case 'Reload Esports':
            case 'Nuovo Gaming':
            case 'Nova eSports':
            case 'FC Schalke 04 Esports':
            case 'Destined For Glory':
            case 'Team KungFu':
            case 'Tan Chi Sa Gaming':
            case 'Flash Husky':
            case 'Szef+6':
            case 'Melty eSport Club':
            case 'K1ck Black':
            case 'G2 Vodafone':
            case 'EURONICS Gaming':
            case 'Lyon Gaming':
            case 'Gambit Esports':
            case 'Overload':
            case 'Saigon Jokers':
            case 'Team Zan':
            case 'IN Gaming':
            case 'Kuala Lumpur Hunters':
            case 'Kayana Gaming':
            case 'Imperium Pro Team':
            case 'Imperial Esports':
            case 'Victorious Ace':
            case 'Team Zan':
            case 'Saikyo Makinyan':
            case 'Nibble Gaming':
            case 'The Chiefs Black':
            case 'TEAM4NOT':
            case 'Sentinels ESC':
            case 'Rebirth eSports':
            case 'Legion Gaming':
            case 'Last Kings':
            case 'Isurus':
            case 'Hafnet eSports':
            case 'Ember':
            case 'Trident Esports':
            case 'Furious Gaming':
            case 'ZTR Gaming':
            case 'Young Miracles':
            case 'SQUARE':
            case 'Pathos':
            case 'MVP':
            case 'Legend Dragon':
            case '4everzenzyg':
            case '7th heaven':
            case '7th heaven X':
            case 'Acclaim EmpireX':
            case 'affNity':
            
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
            case 'CLG Black':
            case 'Authority E-sports':
            case 'Abyss Academy':
            case 'Athletico Esports':
            case 'ahq Fighter':
            case 'AKIHABARA ENCOUNT':
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
            case 'Midnight Sun Esports':
            case 'LowLandLions.White':
            case 'LowLandLions':
            case 'LowLandLions.Black':
            case 'NumberOne Esports':
            case 'Storm':
            case 'Team Frostbite':
            case 'Team Turquality':
            case 'ZONE eSports':
            case 'Millenium Spirit':
            case 'Roar':
            case 'Team Liquid Academy':
            case 'Team Nevo':
            case 'Team Refuse':
            case 'Team ROCK':
            case 'Never Give Up':
            case 'Origen':
            case 'Flash Wolves':
            case 'Team WE':
            case 'Copenhagen Wolves Academy':
            case 'Machi Esports':
            case 'Oyun Hizmetleri':
            case 'Xenics':
            case 'Ex Nihilo':
            case 'Low Priority':
            case 'Wortex Gaming':
            case 'Sudden Fear':
            case 'Dire Wolves':
            case 'Legacy Esports':
            case 'Team Overclockers UK':
            case 'MeetYourMakers.TR':
            case 'Team AURORA':
            case 'Dark Wolves':
            case 'Invictus Gaming':
            case 'Legacy Genesis':
            case 'LGD Gaming':
            case 'paiN Gaming':
            case 'CTU Pathos':
            case 'INTZ':
            case 'KaBuM! Black':
            case 'CNB e-Sports Club':
            case 'g3nerationX':
            case 'E-corp Gaming':
            case 'Huma':
            case 'Illuminar Gaming':
            case 'Wonder Stag e-Sports':
            case 'Natus Vincere CIS':
            case 'Team Vitality':
            case 'Top Dog Gaming':
            case 'Vaevictis eSports':
            case 'XGamers':
            case 'DetonatioN FocusMe':
            case 'Echo Fox':
            case 'Team BlackEye':
            case 'Team Differential':
            case 'Team Empire':
            case 'Team Just':
            case 'Unsold Stuff Gaming':
            case 'Vega Squadron':
            case 'IN Gaming':
                // Team has no alias or none found
                return player;
            default:
                if(!fs.existsSync(__dirname+'/../../data/elo_raw/teams/check/'+player+'.txt')){
                    fs.writeFileSync(__dirname+'/../../data/elo_raw/teams/check/'+player+'.txt',"https://lol.fandom.com/wiki/"+player);
                }
                return player;
        }
    }
}
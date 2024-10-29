const fs = require('node:fs');
module.exports = {
    teams : function(team,league){
        if(fs.existsSync(__dirname+'/../../data/elo_raw/teams_league/'+team+'.txt')){
            //console.log('Read');
            return fs.readFileSync(__dirname+'/../../data/elo_raw/teams_league/'+team+'.txt')
        }else{
            let region = figureOutRegion(team,league);
            if(region && region != '_International' && region != "_Miss"){
                //console.log('Checked');
                if(!fs.existsSync(__dirname+'/../../data/elo_raw/teams_league/'+team+'.txt')){
                    fs.writeFileSync(__dirname+'/../../data/elo_raw/teams_league/'+team+'.txt',region);
                }
                return region;
            }else{
                //console.log('WTF '+team+' - '+league+' - '+region);
                fs.writeFileSync(__dirname+'/../../data/elo_raw/teams_league/check/_'+league+'_'+team+'.txt', team+' - '+league+' - '+region)
                return '_Bug';
            }
        }
    }
}

function figureOutRegion(team,league){
    let workPlayer = '';
    switch(league){
        case 'LCK':
        case 'LAS':
        case 'LCKC':
        case 'KeSPA':
        case 'OGN':
        case 'CK':
        case 'ASCI':
            return 'Korea';
        case 'LPL':
        case 'LDL':
        case 'LSPL':
        case 'DCup':
            return 'China';
        case 'LCS':
        case 'NACL':
        case 'NA LCS':
        case 'NA CS':
        case 'LCSA':
            return 'North America';
        case 'LEC':
        case 'EU LCS':
        case 'EU CS':
            return 'Europe';
        case 'CBLOL':
        case 'CBLOLA':
        case 'BRCC':
            return 'Brazil';
        case 'LCO':
        case 'OPL':
        case 'OCS':
            return 'Australia';
        case 'LJL':
        case 'LJLCS':
        case 'LJLA':
            return 'Japan';
        case 'LLA':
        case 'LLN':
        case 'LHE':
        case 'LMF':
        case 'DDH':
        case 'SL (LATAM)':
            return 'Latin America';
        case 'PCS':
        case 'VCS':
        case 'GPL':
        case 'LMS':
            return 'Taiwan-Hong Kong-Asia Pacific';
        case 'VCS':
            return 'Vietnam';
        case 'LCL':
        case 'CISC':
            return 'Russia';
        case 'AL':
            return 'Arabian League (Regional of Europe Masters)';
        case 'EBL':
        case 'BM':
            return 'Balkans League (Regional of Europe Masters)';
        case 'ESLOL':
        case 'BL':
        case 'DL':
            return 'Elite Series (Regional of Europe Masters - Belgium-Netherlands)';
        case 'LFL':
        case 'LFL2':
            return 'Ligue de France (Regional of Europe Masters)';
        case 'LIT':
        case 'PGN':
            return 'LoL Italian Tournament (Regional of Europe Masters)'
        case 'LPLOL':
            return 'League of Portugal LoL (Regional of Europe Masters)'
        case 'TCL':
        case 'TPL':
        case 'TCS':
        case 'TAL':
            return 'Turkish Championship League (Regional of Europe Masters)'
        case 'NLC':
        case 'UKLC':
            return 'Northern League (Regional of Europe Masters - UK-Finland-Danemark)'
        case 'UL':
            return 'Ultraliga (Regional of Europe Masters - Poland)'
        case 'LVP SL':
        case 'SLO':
        case 'HS':
            return 'Superliga (Regional of Europe Masters - Spain)'
        case 'LRN':
        case 'VL':
        case 'GL':
            return 'Liga Regional Norte (Regional of Americas)';
        case 'LRS':
        case 'CLS':
        case 'Sport Boys Association':
            return 'Liga Regional Sur (Regional of Americas)';
        case 'CT':
            return 'Spain (Regional of Iberian Cup)';
        case 'GLL':
        case 'LGL':
            return 'Greek Legends League (Sigma Cup Qualifier)';
        case 'HC':
        case 'HM':
        case 'NEXO':
        case 'Prime Pokal':
        case 'EPL':
        case 'CDF':
        case 'PRM':
        case 'OTBLX':
        case 'IC':
            return 'European Minor Tournament';
        case 'EGL':
        case 'BIG':
        case 'UPL':
        case 'RCL':
        case 'CU':
        case 'UGP':
        case 'GSG':
        case 'NERD':
        case 'PGC':
        case 'EL':
        case 'NASG':
            return 'American Minor Tournament'
        case 'MSI':
        case 'EM':
        case 'EUM':
        case 'EWC':
        case 'WLDs':
        case 'IEM':
        case 'IWCI':
            return '_International';
        default:
            if(!fs.existsSync(__dirname+'/../../data/elo_raw/teams_league/check/'+league+'.txt')){
                fs.writeFileSync(__dirname+'/../../data/elo_raw/teams_league/check/'+league+'.txt',team);
            }
            return '_Miss';
            //workPlayer = league;
    }
}
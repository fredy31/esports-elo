const fs = require('node:fs');
module.exports = {
    players : function(player,team){
        switch(player){
            
            case '':
                // No renames found.
                return player;
            case '1Jiang':
            case '一件':
                return '1Jiang';
            case '2Trick':
            case 'SlimyDevil':
                return 'SlimyDevil';
            case '3z':
            case 'Vayn3z':
            case 'Lat':
                return '3z';
            case '007x':
            case '7Halo':
                return '007x';
            case '705' :
            case 'Shuguang' :
                return '705';
            case '781' :
            case 'LJW' :
                return '705';
            case '1116':
            case 'Maoan':
                return '1116';
            case '1874':
            case '反高丶潮':
            case 'Ell':
                return '1874';
            case '5Kid':
            case '5kid':
                return '5Kid';
            case 'Acce':
            case 'Accelerator':
                return 'Acce';
            case 'ACD':
            case 'Acidy':
                return 'ACD';
            case 'Ace':
            case 'Acee':
                if(team == 'V3 Esports'){
                    return 'Ace_JP'
                }else{
                    return 'Ace_KR'
                }
            case 'Godlike':
            case 'ackerman':
            case 'Ackerman':
                return 'Godlike';
            case 'Acorderr':
            case 'Catra':
                return 'Acorderr';
            case 'Acorn':
            case 'Cheonju':
                return 'Acorn';
            case 'AD':
                if(team == 'NS Challengers' || team == 'KDF.C' || team == 'Freecs'){
                    return 'Bull';
                }else{
                    return 'Xiaguang';
                }
            case 'Adam':
            case 'Ricadam':
                return 'Adam';
            case 'Rave':
            case 'Cypher':
            case 'ADC':
                return 'Rave';
            case 'Adrian':
            case '10q':
                return 'Adrian';
            case 'Aeon':
            case 'Gotzy':
                return 'Aeon';
            case 'Arfoad':
            case 'Aero':
                return 'Arfoad';
            case 'aesthetic':
            case 'Aesthetic':
            case 'Swag':
                return 'aesthetic';
            case 'aaron':
            case 'Aaron':
                return 'Aaron';
            case 'About':
            case 'Rhea':
                return 'About';
            default:
                fs.writeFileSync(__dirname+'/../../data/elo_raw/players/check/'+player+'.txt',"https://lol.fandom.com/wiki/"+player);
                return player;
        }
    }
}
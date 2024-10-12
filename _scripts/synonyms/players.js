const fs = require('node:fs');
module.exports = {
    players : function(player,team){
        switch(player){
            case '0ri': 
            case '1an': 
            case '1Bicho': 
            case '1Blue': 
            case '1buki': 
            case '1chope': 
            case '1Curioso': 
            case '1Defu': 
            case '1dt':
            case '1ee':
            case '1Ground':
            case '1Haru':
            case '1in':
            case '1Lee':
            case '1ntruder':
            case '1onz':
            case '1roNN':
            case '1ssue':
            case '1tyler':
            case '1xn':
            case '2Axes':
            case '2Cups':
            case '2Guns':
            case '2K':
            case '2Night':
            case '2T':
            case '2y1':
            case '3in1warrior':
            case '3z3':
            case '4ever':
            case '4LaN':
            case '4rch':
            case '5fire':
            case '5K':
            case '5mi':
            case '5t5':
            case '6abysweet':
            case '6ax':
            case '6zc':
            case '7Aster':
            case '7copy':
            case '9eetoo':
            case '9God':
            case '9Lives':
            case '10IQ':
            case '10ng':
            case '13Ghost':
            case '24':
            case '27':
            case '57':
            case '113':
            case '150':
            case '224':
            case '225':
            case '300':
            case '361efe':
            case '369':
            case '614':
            case '665':
            case '725':
            case '0909':
            case '925':
            case '957':
            case '985':
            case '997':
            case '999':
            case '1024':
            case '1220':
            case '1984':
            case '1998':
            case '2020':
            case '2188':
            case '7420 Mzg':
            case 'A 5':
            case 'A1':
            case 'A02':
            case 'A266':
            case 'aaron':
            case 'Abagnale':
            case 'Abaddon':
            case 'Abanke':
            case 'Abaria':
            case 'Abbedagge':
            case 'Ablazeolive':
            case 'Able':
            case 'Abner':
            case 'Abedz':
            case 'Abner':
            case 'Aboekra':
            case 'Abou222':
            case 'Abscense':
            case 'Absolut':
            case 'Absolute':
            case 'Abyss':
            case 'AC':
            case 'Acaleus':
            case 'AcceZ':
            case 'Acciy':
            case 'Accziz':
            case 'AcceZ':
            case 'Acefos':
            case 'Acerola':
            case 'Acheng':
            case 'Archie':
            case 'Achille':
            case 'Achilles':
            case 'Achuu':
            case 'AcRo':
            case 'Acrozo':
            case 'Activeforce5':
            case 'Actor':
            case 'Xiaguang':
            case 'Bull':
            case 'AdaMed':
            case 'adamsn':
            case 'Adaniel':
            case 'Adasz':
            case 'ADC Test':
            case 'Addi':
            case 'Addusto':
            case 'Ade':
            case 'Adept':
            case 'adi':
            case 'Adiogs':
            case 'Adison':
            case 'Adiss':
            case 'Adm':
            case 'Admawodo':
            case 'Admiral_Jane':
            case 'adoppteR':
            case 'Adri':
            case 'Adrianz9':
            case 'Adricesa':
            case 'Adryh':
            case 'Advanze':
            case 'Advienne':
            case 'Ady':
            case 'Aedon':
            case 'Aegis':
            case 'Aeiden':
            case 'AeonBlast':
            case 'Aerados':
            case 'Aesenar':
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
            case 'Swag':
                return 'aesthetic';
            default:
                fs.writeFileSync(__dirname+'/../../data/elo_raw/players/check/'+player+'.txt',"https://liquipedia.net/leagueoflegends/"+player);
                return player;
        }
    }
}
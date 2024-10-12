const fs = require('node:fs');
convert_json_to_games();
function convert_json_to_games(){
    let directory = __dirname+'/../../data/json/';
    fs.readdir(directory, (err, files) => {
        if (err) throw err;
        var file_i = 0;
        let gamecount = 0;
        for (const file of files) {
            if(file != '.gitignore' && file != '.gitkeep' ){
                var f = fs.readFileSync(directory+file, {encoding: 'utf-8'}, 
                    function(err){console.log(err);});
                let runthrough = JSON.parse(f);
                let gamesOfFile = {};
                let gamesCreated = [];
                runthrough.forEach(el=>{
                    if(!gamesCreated.includes(el.gameid)){
                        gamesCreated.push(el.gameid);
                        //console.log(gamesOfFile[el.gameid]);
                        gamesOfFile[el.gameid] = {
                            'Id' : el.gameid,
                            'Date' : el.date,
                            'Blue' : {
                                'team' : '',
                                'top' : {
                                    'playername' : '',
                                    'champion' : ''
                                },
                                'jng' : {
                                    'playername' : '',
                                    'champion' : ''
                                },
                                'mid' : {
                                    'playername' : '',
                                    'champion' : ''
                                },
                                'bot' : {
                                    'playername' : '',
                                    'champion' : ''
                                },
                                'sup' : {
                                    'playername' : '',
                                    'champion' : ''
                                }
                            },
                            'Red' : {
                                'team' : '',
                                'top' : {
                                    'playername' : '',
                                    'champion' : ''
                                },
                                'jng' : {
                                    'playername' : '',
                                    'champion' : ''
                                },
                                'mid' : {
                                    'playername' : '',
                                    'champion' : ''
                                },
                                'bot' : {
                                    'playername' : '',
                                    'champion' : ''
                                },
                                'sup' : {
                                    'playername' : '',
                                    'champion' : ''
                                }
                            },
                            'Winner' : 0
                        };
                    }
                    if(el.position!='team'){
                        gamesOfFile[el.gameid][el.side][el.position]['playername'] = el.playername;
                        gamesOfFile[el.gameid][el.side][el.position]['champion'] = el.champion;
                    }else{
                        gamesOfFile[el.gameid][el.side]['team'] = el.teamname;
                    }
                    if(el.position=='team' && el.side=="Blue"){
                        if(el.result==1){
                            gamesOfFile[el.gameid]['Winner']='Blue';
                        }else{
                            gamesOfFile[el.gameid]['Winner']='Red';
                        }
                    }
                })
                //console.log(gamesOfFile);
                i=0;
                for (const [key, value] of Object.entries(gamesOfFile)) {
                    i++;
                    let date = new Date(Date.parse(gamesOfFile[key].Date));
                    let month = ('0' + (date.getMonth()+1)).slice(-2);
                    let day = ('0' + (date.getDate())).slice(-2);
                    let year = date.getFullYear();
                    console.log('Writing games for '+year+'-'+month);
                    fs.writeFileSync(directory+'/../games/'+year+'-'+month+'-'+day+'-'+date.getHours()+'h'+date.getMinutes()+'.'+gamesOfFile[key].Id.replace('/','-')+'.json', JSON.stringify(gamesOfFile[key]), 'utf8', 
                    function(err){console.log(err);});
                }
            }
        }
    })
}
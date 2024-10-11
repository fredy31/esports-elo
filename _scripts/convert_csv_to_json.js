const fs = require('node:fs');

convert_csv_to_json();
function convert_csv_to_json(){
    let directory = __dirname+'/../data/csv/';
    fs.readdir(directory, (err, files) => {
        if (err) throw err;
        var file_i = 0;
        let gamecount = 0;
        for (const file of files) {
            if(file != '.gitignore' && file != '.gitkeep' ){
                file_i++;
                var f = fs.readFileSync(directory+file, {encoding: 'utf-8'}, 
                    function(err){console.log(err);});
                //console.log(f);
                f = f.split("\n");

                // Get first row for column headers
                headers = f.shift().split(",");

                var json = [];    
                f.forEach(function(d){
                    // Loop through each row
                    tmp = {}
                    row = d.split(",")
                    for(var i = 0; i < headers.length; i++){
                        tmp[headers[i]] = row[i];
                    }
                    // Add object to list
                    json.push(tmp);
                });

                let currentMonth = 0;
                let currArray = [];
                let i = 0;
                gamecount += json.length;
                json.forEach((el)=>{
                    i++;
                    let date = new Date(Date.parse(el.date));
                    
                    if(date.getMonth() != currentMonth || i == json.length){
                        let month = ('0' + (date.getMonth())).slice(-2);
                        currentMonth = date.getMonth();
                        let year = date.getFullYear();
                        // TODO : Figure why december always returns a NAN
                        if(month == 'aN'){
                            month = 12;
                            year = file.slice(0,4);
                            //console.log(year);
                        }
                        fs.writeFileSync(directory+'/../json/'+year+'-'+month+'.'+file.replace('.csv','.json'), JSON.stringify(currArray), 'utf8', 
                        function(err){console.log(err);});
                        console.log('Year '+file_i+'/'+(files.length-1)+'. Yearly Matches '+i+'/'+json.length+'. Last month saved: '+month)
                        currArray = [];
                    }
                    currArray.push(el);
                    //console.log(date.getMonth());
                })

                //var outPath = path.join(__dirname, 'PATH_TO_JSON');
                // Convert object to string, write json to file
                /*fs.writeFileSync(directory+'/../json/'+file.replace('.csv','.json'), JSON.stringify(json), 'utf8', 
                    function(err){console.log(err);});*/
                console.log('Files converted: '+file_i+'/'+(files.length-1)+'.');
            }
        }
        //console.log(gamecount/12+' Games found')
    })
}
module.exports = {
    dates:function(step=14){
        var listOfDates = [];
        var currDate = new Date(Date.parse('2014-01-01 00:00'));
        var today = new Date();
        var step = 14;
        var stillNotToday = true;
        while(stillNotToday){
            listOfDates.push(currDate.toString());
            currDate.setDate(currDate.getDate() + step);
            if(currDate > today){
                stillNotToday = false;
            }
        }
        return listOfDates;
    }
}
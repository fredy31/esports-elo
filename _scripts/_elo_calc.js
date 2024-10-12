module.exports = {
    calcElo:function(winner,loser){
        // Calculation from https://www.omnicalculator.com/sports/elo#how-to-find-elo-rating-change
        let modifier = loser-winner;
        modifier = modifier / 400;
        modifier = 10^modifier;
        modifier = modifier + 1;
        modifier = 1 / modifier;
        modifier = Math.round(modifier * 100);
        return modifier;
    }
}
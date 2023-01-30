module.exports = function () {
    const games = Game.findAll();
    console.log(games.every(game => game instanceof Game));
    console.log("All games: ", JSON.stringify(games, null, 2));
}

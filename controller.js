//controller function data
function startGame(difficulty, cityName, playerName){
  //Initiates start state
  player.cityName = cityName;
  player.name = playerName;
  player.difficulty = difficulty;
  createDom(townName, playerName);
  loadStartState(difficulty);
};

function nextTurn(){
  //calculates game state changes for 1 turn
  advanceTurn();
  refreshDom();

function refresh(){
  //refreshes game state to show mid turn changes, such as build orders.
  recalculateStats();
  refreshDom();
};

function build(buildingType){
  //handles building and stat reactions
  constructionHandler();
  refresh();
};

function research(){
  //handles building research
  researchHandler();
  refresh();
};

function cityAdvancement() {
  //checks to see if city is eligible to advance to next tier.
  upgradeCity();
};

function manageWorkers(){
  //controls labor deligation.
  laborHandler();
  refresh();
}

function worldEvent(event){
  //handles world events
};

function restart(){
  //resets game to start state.
  startGame(player.difficulty, player.cityName, player.name)
};

function gameOver(){
  //handles end of game
  showScore();
};

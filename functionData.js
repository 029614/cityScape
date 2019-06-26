//independant operations
function constructionHandler() {
  //handles construction qeue
};

function researchHandler() {
  //handles research qeue
};

function laborHandler() {
  //handles job assignments
};

function moraleHandler() {
  //calculates morale score
};

function hungerHandler() {
  //calculates hunger score
};

function healthHandler() {
  //calculates health score
};

function statusInterpreter() {
  //interprets health, hunger and morale integers into literal descriptions
};

function createDom(townName, playerName) {
  //creates GUI
};

function loadStartState(difficulty) {
  //loads or reloads data to starting state.
};

function refreshDom() {
//refreshes GUI to display changes to gameStateData
};

function recalculateStats() {
  //refreshes gameStateData without advancing a turn.
};

function upgradeCity () {
  //alters gameStateData regarding city tier
};

function showScore() {
  //end of game score sheet
};





//dependant operations

function advanceTurn() {
  //advances gameState by 1 turn, updates gameStateData.
  refreshDom();
};

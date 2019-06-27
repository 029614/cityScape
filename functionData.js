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

function createDom(cityName, playerName) {
  //creates GUI
  $("#titleList").replaceWith("<p id='titleList'><h2 class='title'>" + player.cityName + "</h2><h2 class='title'>Mayor " + player.name +"</h2><h2 class='title'>Turn: " + statStates.turn + "</h2><p>");
  $("#resourceList").replaceWith("<ul id='resourceList'><li><img class='resourceLogo' src='" + resources.grain.imageSource + "' alt='" + resources.grain.name + "'>: " + resourceStates.grain + "</li><li><img class='resourceLogo' src='" + resources.bread.imageSource + "' alt='" + resources.bread.name + "'>: " + resourceStates.bread + "</li><li><img class='resourceLogo' src='" + resources.lumber.imageSource + "' alt='" + resources.lumber.name + "'>: " + resourceStates.lumber + "</li><li><img class='resourceLogo' src='" + resources.stone.imageSource + "' alt='" + resources.stone.name + "'>: " + resourceStates.stone + "</li><li><img class='resourceLogo' src='" + resources.iron.imageSource + "' alt='" + resources.iron.name + "'>: " + resourceStates.iron + "</li><li><img class='resourceLogo' src='" + resources.steel.imageSource + "' alt='" + resources.steel.name + "'>: " + resourceStates.steel + "</li>");
  //$("#viewWorkersList").replaceWith("")
  //$("#buildList").replaceWith('<ul id="buildList">' + canBuildHtml + '</ul>');
  //$("#build").replaceWith("")
  //$("#messages").replaceWith("")
};

function loadStartState() {
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

function listBuildings() {
  let ownedBuildingsHtml = '<ul class="manage-page" id="viewBuildingsList">';
  let directory = null;
  let element = null;
  for (let x in buildings) {
    let directory = buildings[x];
    for (let i in directory){
      let element = directory[i];
      let id = element.name;
      id = id.replace(/\s/g, '');
      if (element.numberOwned > 0 && element.type === 'house'){
        ownedBuildingsHtml += ('<li class="building-entry"><image class="building-thumbnail" src="' + element.image + '" alt="' + element.name + '"><h2 class="building-name">' + element.name + ':</h2><p class="building-description">' + element.description + '</p><p class="building-numberOwned">Number Owned: ' + element.numberOwned + '</p><p class="building-workers">Residents: ' + element.residents + '/' + (element.numberOwned * element.capacityModifier) + '<p></li>');
      }else if (element.numberOwned > 0 && element.type === 'industry') {
        ownedBuildingsHtml += ('<li class="building-entry"><image class="building-thumbnail" src="' + element.image + '" alt="' + element.name + '"><h2 class="building-name">' + element.name + ':</h2><p class="building-description">' + element.description + '</p><p class="building-numberOwned">Number Owned: ' + element.numberOwned + '</p><div class="worker-div"><p class="building-workers">Workers: ' + element.workers + '/' + (element.numberOwned * element.workerCapacity) + '</p></div><button class="workerButton removeWorker" id="' + element.id + '">Fire</button><button class="workerButton addWorker" id="' + element.id + '">Hire</button></li>');
      };
      $('#viewBuildingsList').replaceWith(ownedBuildingsHtml);
    };
  };
};




//dependant operations

function advanceTurn() {
  //advances gameState by 1 turn, updates gameStateData.
  refreshDom();
};

function message(string) {
  $("#messageContainer").append('<h3 class="message messageDate">Turn ' + statStates.turn + ':</h3><p class="message messageContent">' + string + '</p>');
};

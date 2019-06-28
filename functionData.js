//independant operations
function constructionHandler() {
  //handles construction qeue
};

function researchHandler() {
  //handles research qeue
};

function populationHandler(change) {
  //this function must run ever turn
  let total = change;
  if (total > 0){
    workerList.unemployed.count += total;
    message(total + "people have moved to your " + player.cityType);
  } else if (total < 0){
    total = Math.abs(total);
    if (workerList.unemployed.count < total){
      let deficit = total - workerList.unemployed.count;
      for (let i in workList){
        if (workList[i].count >= deficit){
          workList.unemployed.count += deficit;
          workList[i].count -= deficit;
        } else {
          deficit -= workList[i].count;
          workList.unemployed.count += workList[i].count;
          workList[i].count -= workList[i].count
        };
      };
    };
    workerList.unemployed += total;
    message(total + "people have died.");
  };
  statStates.population = 0;
  for (let i in workerList){
    statStates.population += workerList[i].count;
  };
};

function resourceHandler() {
  //must run every turn
  for (let i in buildings){
    let buildingType = buildings[i];
    for (let x in buildingType){
      if (buildingType[x].directory === 'mines'){
        resourceStates[buildingType[x].outputType] += buildingType[x].workerOutputModifier * buildingType[x].workers;
        resourceStates[buildingType[x].outputType2] += buildingType[x].workerOutputModifier * buildingType[x].workers / 2;
      } else {
        resourceStates[buildingType[x].outputType] += buildingType[x].workerOutputModifier * buildingType[x].workers;
      };
    };
  };
  resourceStates.grain -= statStates.population * 10;
};

function moraleHandler() {
  //calculates morale score
};

function hungerHandler() {
  let populationIncrease = 0;
  if (resourceStates.grain <= 0){
    statStates.hunger -= 10;
  } else {
    statStates.hunger += 10;
  };
  if (statStates.hunger < 0) {
    statStates.hunger = 0;
  };
  if (statStates.hunger < 10){
    statStates.hungerWord = 'Starving';
    populationIncrease -= Math.round(statStates.population / 2);
  } else if (statStates.hunger < 20){
    statStates.hungerWord = 'Very Hungry';
    populationIncrease -= Math.round(statStates.population / 5);
  } else if (statStates.hunger < 30){
    statStates.hungerWord = 'Hungry';
    populationIncrease -= Math.round(statStates.population / 10);
  } else if (statStates.hunger < 40){
    statStates.hungerWord = 'Getting Snacky';
    populationIncrease = 0;
  } else if (statStates.hunger < 50){
    statStates.hungerWord = 'Content';
    populationIncrease += Math.round(statStates.population / 50);
  } else if (statStates.hunger < 60){
    statStates.hungerWord = 'Fed';
    populationIncrease += Math.round(statStates.population / 40);
  } else if (statStates.hunger < 70){
    statStates.hungerWord = 'Well Fed';
    populationIncrease += Math.round(statStates.population / 30);
  } else if (statStates.hunger < 80){
    statStates.hungerWord = 'Over Eating';
    populationIncrease += Math.round(statStates.population / 20);
  } else if (statStates.hunger < 90){
    statStates.hungerWord = 'Getting Fat';
    populationIncrease += Math.round(statStates.population / 10);
  } else if (statStates.hunger < 100){
    statStates.hungerWord = 'Super Fat';
    populationIncrease += Math.round(statStates.population / 5);
  } else if (statStates.hunger >= 100){
    statStates.hunger = 100;
    statStates.hungerWord = 'Diabetes';
    populationIncrease += Math.round(statStates.population / 2);
  };
  populationHandler(populationIncrease);
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
  $("#statsList").replaceWith('<ul id="statsList"><li class="stats">Population: ' + statStates.population + '</li><li class="stats">Hunger: ' + statStates.hunger + '</li><li class="stats">Health: ' + statStates.health + '</li><li class="stats">Morale: ' + statStates.morale + '</li></ul>');
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
$("#resourceList").replaceWith("<ul id='resourceList'><li><img class='resourceLogo' src='" + resources.grain.imageSource + "' alt='" + resources.grain.name + "'>: " + resourceStates.grain + "</li><li><img class='resourceLogo' src='" + resources.bread.imageSource + "' alt='" + resources.bread.name + "'>: " + resourceStates.bread + "</li><li><img class='resourceLogo' src='" + resources.lumber.imageSource + "' alt='" + resources.lumber.name + "'>: " + resourceStates.lumber + "</li><li><img class='resourceLogo' src='" + resources.stone.imageSource + "' alt='" + resources.stone.name + "'>: " + resourceStates.stone + "</li><li><img class='resourceLogo' src='" + resources.iron.imageSource + "' alt='" + resources.iron.name + "'>: " + resourceStates.iron + "</li><li><img class='resourceLogo' src='" + resources.steel.imageSource + "' alt='" + resources.steel.name + "'>: " + resourceStates.steel + "</li>");
$("#statsList").replaceWith('<ul id="statsList"><li class="stats">Population: ' + statStates.population + '</li><li class="stats">Hunger: ' + statStates.hunger + '</li><li class="stats">Health: ' + statStates.health + '</li><li class="stats">Morale: ' + statStates.morale + '</li></ul>');
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

function titleScreenHtml(){
  $('#app-window').append('<form id="startForm" class="deleteOnStart">Player Name:<br><input id="playerName" type="text" name="playerName"><br>City Name:<br><input id="cityName" type="text" name="cityName"><br>easy<input id="easy" type="radio" name="difficulty" value="easy">normal<input id="normal" type="radio" name="difficulty" value="normal">hard<input id="hard" type="radio" name="difficulty" value="hard"><br><input id="submitForm" type="submit" value="Start Game"></form>');
  $('#messages').append('<h1 class="deleteOnStart">Welcome to CityScape!</h1>');
};

function listBuildings() {
  let htmlStart = '<ul class="manage-page" id="viewBuildingsList">';
  let htmlEnd = '</ul>';
  let directory = null;
  let element = null;
  for (let x in buildings) {
    let directory = buildings[x];
    for (let i in directory){
      let element = directory[i];
      let id = element.name;
      id = id.replace(/\s/g, '');
      if (element.numberOwned > 0 && element.type === 'house'){
        htmlStart += ('<li class="building-entry"><image class="building-thumbnail" src="' + element.image + '" alt="' + element.name + '"><h2 class="building-name">' + element.name + ':</h2><p class="building-description">' + element.description + '</p><p class="building-numberOwned">Number Owned: ' + element.numberOwned + '</p><button class="upgradeBuilding" id="' + element.id + 'Upgrade">Upgrade Building</button><p class="building-workers">Residents: ' + element.residents + '/' + (element.numberOwned * element.capacityModifier) + '<p></li>');
      }else if (element.numberOwned > 0 && element.type === 'industry') {
        htmlStart += ('<li class="building-entry"><image class="building-thumbnail" src="' + element.image + '" alt="' + element.name + '"><h2 class="building-name">' + element.name + ':</h2><p class="building-description">' + element.description + '</p><p class="building-numberOwned">Number Owned: ' + element.numberOwned + '</p><button class="upgradeBuilding" id="' + element.id + 'Upgrade">Upgrade Building</button><div class="worker-div"><p class="building-workers">Workers: ' + element.workers + '/' + (element.numberOwned * element.workerCapacity) + '</p></div><button class="workerButton removeWorker" id="' + element.id + '">Fire</button><button class="workerButton addWorker" id="' + element.id + '">Hire</button></div></li>');
      };
      $('#viewBuildingsList').replaceWith(htmlStart + htmlEnd);
    };
  };
};

function listConstruction() {
  let htmlStart = '<ul class="manage-page" id="buildList">';
  let htmlEnd = '</ul>';
  let directory = null;
  let element = null;
  for (let x in buildings) {
    let directory = buildings[x];
    for (let i in directory){
      let element = directory[i];
      let id = element.name;
      id = id.replace(/\s/g, '');
      if (element.type === 'house'){
        htmlStart += ('<li class="building-entry"><image class="building-thumbnail" src="' + element.image + '" alt="' + element.name + '"><h2 class="building-name">' + element.name + ':</h2><p class="building-description">' + element.description + '</p><p class="building-numberOwned">Residential Capacity: ' + element.capacityModifier + '</p><button class="menuButton buildButton" id="' + element.id + '">Build</button></li>');
      }else if (element.type === 'industry') {
        let costs = {
          costWood: element.costModifier * tiers.construction[element.tier].wood,
          costStone: element.costModifier * tiers.construction[element.tier].stone,
          costIron: element.costModifier * tiers.construction[element.tier].iron,
          costSteel: element.costModifier * tiers.construction[element.tier].steel,
          inputQuantity: element.workerInputModifier * tiers.construction[element.tier].workerInputModifier,
          outputQuantity: element.workerOutputModifier * tiers.construction[element.tier].workerOutputModifier,
          numberOfWorkers: element.workerCapacity * tiers.construction[element.tier].numberOfWorkersModifier
        };
        for (let x in costs){
          if (costs[x] === 0){
            costs[x] = '';
          };
        };
        htmlStart += ('<li class="building-entry"><image class="building-thumbnail" src="' + element.image + '" alt="' + element.name + '"><h2 class="building-name">' + element.name + ':</h2><p class="outputType">Produces ' + costs.outputQuantity + ' ' + element.outputType + ' from ' + costs.inputQuantity + ' ' + element.inputType + ' every turn.</p><p class="cost">Building Costs:<br> Wood: ' + costs.costWood + ', Stone: ' + costs.costStone + ', Iron: ' + costs.costIron + ', Steel: ' + costs.costSteel + '</p><p class="workers">This building can employ up to ' + costs.numberOfWorkers + ' workers.</p><button class="menuButton buildButon" id="' + element.id + '">Build</button></li>');
      };
      $('#buildList').replaceWith(htmlStart + htmlEnd);
    };
  };
};

function upgradeBuilding(building) {
  message('This feature is currently under construction. controller.js line 125')
};


//dependant operations

function advanceTurn() {
  //advances gameState by 1 turn, updates gameStateData.
  refreshDom();
};

function message(string) {
  $("#messageContainer").append('<li><p class="message messageContent">Turn ' + statStates.turn + ' : ' + string + '</p></li>');
};

function constructionHandler() {
  //handles construction qeue
  let laborStrength = workerList.unemployed.count * 25;
  qeue.one.remainingTurns = Math.ceil(qeue.one.labor / laborStrength);
  if (qeue.one.status === 'busy'){
    if (qeue.one.labor <= laborStrength){
      build(qeue.one.id);
      laborStrength -= qeue.one.labor;
      buildings[qeue.one.directory][qeue.one.id].numberOwned++;
      que.one = que.two;
      que.two = que.three;
      que.three = que.four;
      que.four = que.five;
      que.five = que.six;
      que.six = que.seven;
      que.seven = que.eight;
      qeue.eight.status = 'empty';
      constructionHandler();
    } else {
      qeue.one.labor -= laborStrength;
    };
  };
};

function populateQeue() {
  let id = '';
  let address = '';
  $("#buildingQeue").replaceWith('<ul id="buildingQeue"></ul>');
  for (let i in qeue) {
    if (qeue[i].status === 'busy'){
      id = qeue[i].id;
      address = qeue[i].directory;
      if (qeue[i].type === 'build'){
        $("#buildingQeue").append('<li class="constructionQeue"><div class="build-background"><img class="build qeueImage" src="images/icons/build.png"><img class="qeueBackground qeueImage" src="' + buildings[qeue[i].directory][qeue[i].id].image +'"><img class="hidden cancel qeueImage" src="images/icons/cancel.png"></div></li>');
      } else if (qeue[i].type === 'upgrade'){
        $("#buildingQeue").append('<li class="constructionQeue"><div class="build-background"><img class="qeueBackground qeueImage" src="' + buildings[qeue[i].directory][qeue[i].id].image +'"><img class="upgrade qeueImage" src="images/icons/upgrade.png"><img class="hidden cancel qeueImage" src="images/icons/cancel.png"></div></li>');
      };
    } else if (qeue[i].status === 'empty'){
      $("#buildingQeue").append('<li class="constructionQeue"><div class="empty"></div></li>');
    };
  };
};

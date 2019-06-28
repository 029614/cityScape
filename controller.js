//controller function data
function startGame(){
    //Initiates start state
    createDom(player.cityName, player.name);
    loadStartState(player.difficulty);
    listBuildings();
    populateQeue();
};

function nextTurn(){
  //calculates game state changes for 1 turn
  advanceTurn();
  refreshDom();
};

$("#endTurn").click(function() {
  resourceHandler();
  statStates.laborStrength = workerList.unemployed.count * 25;
  constructionHandler();
  hungerHandler();
  listBuildings();
  statStates.turn++;
  refreshDom();
});

function refresh(){
  //refreshes game state to show mid turn changes, such as build orders.
  recalculateStats();
  refreshDom();
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

function worldEvent(event){
  //handles world events
};

function restart(){
  //resets game to start state.
  startGame(player.difficulty, player.cityName, player.name);
};

function gameOver(){
  //handles end of game
  showScore();
};

titleScreenHtml();

//start game button functionality
$("#startForm").submit(function (event) {
  event.preventDefault();
  player.name = $("#playerName").val();
  player.cityName = $("#cityName").val();
  player.difficulty = 'normal';
  $("#resources").toggleClass('hidden');
  $("#manage").toggleClass('hidden');
  $("#messageWrapper").toggleClass('hidden');
  $('.deleteOnStart').empty();
  $('#app-window').toggleClass('startPage');
  $('#app-window').toggleClass('gamePage');
  $('#endTurn').toggleClass('hidden');
  startGame();
});

//management menu button functionality
$(document).on('click', '#manageButton', function(){
  $("#viewBuildings").toggleClass('hidden');
  if ($("#build").hasClass('hidden') === false){
    $("#build").toggleClass('hidden');
  };
});


//add worker button functionality
$(document).on('click', '.addWorker', function(event) {
  let buildingId = event.target.id;
  let buildingAddress = '';
  for (let i in buildings){
    let building1 = buildings[i];
    for (let x in building1){
      let building2 = building1[x].id;
      if (building2 === buildingId) {
        buildingAddress = building1[building2];
      };
    };
  };
  let maxWorkers = buildingAddress.numberOwned * buildingAddress.workerCapacity;
  if (buildingAddress.workers < maxWorkers && workerList.unemployed.count > 0){
    buildingAddress.workers++;
    workerList.unemployed.count--;
    let update = "You have " + workerList.unemployed.count + " unemployed workers left.";
    listBuildings();
    message(update);
  };
});


//remove worker button functionality
$(document).on('click', '.removeWorker', function(event) {
  let buildingId = event.target.id;
  let buildingAddress = '';
  for (let i in buildings){
    let building1 = buildings[i];
    for (let x in building1){
      let building2 = building1[x].id;
      if (building2 === buildingId) {
        buildingAddress = building1[building2];
      };
    };
  };
  let maxWorkers = buildingAddress.numberOwned * buildingAddress.workerCapacity;
  if (buildingAddress.workers > 0){
    buildingAddress.workers--;
    workerList.unemployed.count++;
    let update = "You now have " + workerList.unemployed.count + " unemployed workers.";
    listBuildings();
    message(update);
  };
});

$(document).on('click', '#buildButton', function(event) {
  //build menu
  $("#build").toggleClass('hidden');
  if ($("#viewBuildings").hasClass('hidden') === false){
    $("#viewBuildings").toggleClass('hidden');
  };
  listConstruction();
});

$(document).on('click', '#optionsButton', function(event) {
  //options menu
  message('The Options Menu is still under construction.');
});

$(document).on('click', '.buildButton', function() {
  let buildingId = event.target.id;
  let buildingAddress = '';
  let success = null;
  for (let i in buildings){
    let building1 = buildings[i];
    for (let x in building1){
      let building2 = building1[x].id;
      if (building2 === buildingId) {
        buildingAddress = building1[building2];
      };
    };
  };
  newQeue = {
    status: 'busy',
    id: buildingAddress.id,
    directory: buildingAddress.directory,
    labor: buildingAddress.laborModifier * tiers.construction[buildingAddress.tier].laborModifier,
    remainingTurns: 0,
    type: 'build'
  };
  for (let i in qeue){
    if (qeue[i].status === 'empty'){
      qeue[i] = newQeue;
      success = true;
      break;
    };
  };
  if (success === true){
    populateQeue();
  } else {
    message('Construction qeue is full!');
  };
});

$(document).on('click', '.upgradeBuilding', function() {
  let buildingId = event.target.id;
  console.log(buildingId);
  let buildingAddress = '';
  let success = null;
  for (let i in buildings){
    let building1 = buildings[i];
    for (let x in building1){
      let building2 = building1[x].id;
      if (building2 === buildingId) {
        buildingAddress = building1[building2];
      };
    };
  };
  if (buildingAddress.upgrade === 'none'){
    message('This building is already fully upgraded!');
  } else {
    newQeue = {
      status: 'busy',
      id: buildingAddress.id,
      directory: buildingAddress.directory,
      labor: buildingAddress.labor * tiers.construction[buildingAddress.tier].laborModifier * 2,
      remainingTurns: 0,
      type: 'upgrade'
    };
  };
  for (let i in qeue){
    if (qeue[i].status === 'empty'){
      qeue[i] = newQeue;
      success = true;
      break;
    };
  };
  if (success === true){
    populateQeue();
  } else {
    message('Construction qeue is full!');
  };
});



//under construction. on hover, displays red x over qeue item. on click, removes item from qeue
$('.build').on({
  mouseenter: function () {
    $('.cancel', this).toggleClass('hidden');
    $('.build', this).toggleClass('hidden');
  },
  mouseleave: function () {
    $('.cancel', this).toggleClass('hidden');
    $('.build', this).toggleClass('hidden');
  }
});

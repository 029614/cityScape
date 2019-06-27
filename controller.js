//controller function data
function startGame(){
    //Initiates start state
    createDom(player.cityName, player.name);
    loadStartState(player.difficulty);
    listBuildings();
};

function nextTurn(){
  //calculates game state changes for 1 turn
  advanceTurn();
  refreshDom();
};

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

function titleScreenHtml(){
  $('#app-window').append('<form id="startForm" class="deleteOnStart">Player Name:<br><input id="playerName" type="text" name="playerName"><br>City Name:<br><input id="cityName" type="text" name="cityName"><br>easy<input id="easy" type="radio" name="difficulty" value="easy">normal<input id="normal" type="radio" name="difficulty" value="normal">hard<input id="hard" type="radio" name="difficulty" value="hard"><br><input id="submitForm" type="submit" value="Start Game"></form>');
  $('#messages').append('<h1 class="deleteOnStart">Welcome to CityScape!</h1>');
};

titleScreenHtml();
listBuildings();
$("#startForm").submit(function (event) {
  event.preventDefault();
  player.name = $("#playerName").val();
  player.cityName = $("#cityName").val();
  player.difficulty = 'normal';
  $("#resources").toggleClass('hidden');
  $("#manage").toggleClass('hidden');
  $("#messageContainer").toggleClass('hidden');
  $('.deleteOnStart').empty();
  $('#app-window').toggleClass('startPage');
  $('#app-window').toggleClass('gamePage');
  $('#endTurn').toggleClass('hidden');
  startGame();
});

$(document).on('click', '#manageButton', function(){
  $("#viewBuildings").toggleClass('hidden');
  console.log('function has run');
});

$(document).on('click', '.addWorker', function(event) {
  let buildingId = event.target.id;
  console.log(buildingId);
  let thisBuilding = buildings[buildingId];
  console.log('id: ' + thisBuilding.name);
  let maxWorkers = thisBuilding.numberOwned * thisBuilding.workerCapacity;
  if (thisBuilding.workers < maxWorkers && workerList.unemployed.count > 0){
    thisBuilding.workers++;
    workerList.unemployed.count--;
    let message = "You have " + workerList.unemployed.count + " unemployed workers left.";
    listBuildings();
    message(message);
  };
});

$(document).on('click', '.removeWorker', function(event) {
  let thisBuilding = buildings[this.id];
  if (thisBuilding.workers > 0){
    workerType.count--;
    workerList.unemployed.count++;
    let message = "You now have " + workerList.unemployed.count + " unemployed workers.";
    listBuildings();
    message(message);
  };
});

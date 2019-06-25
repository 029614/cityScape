function turn (){
  for (var subFunction in updateStats.all){
    updateStats.all[subFunction]();
  };
  for (var subFunction in interpretStats.all){
    interpretStats.all[subFunction]();
  };
  for (var subFunction in refreshGui.all){
    refreshGui.all[subFunction]();
  };
  stats.turn++;
  console.log('turn: ' + stats.turn);
  console.log('population: ' + stats.population);
  console.log('hunger: ' + stats.hunger);
  console.log('grain: ' + stats.grain);
  console.log('bread: ' + stats.bread);
  console.log('alcohal: ' + stats.alcohal);
};

function initiate (){
  for (var subFunction in guiStartState.all){
    guiStartState.all[subFunction]();
  };
};

function update (){
  $("#resources").replaceWith(updateStats.all.resources());
  $("#protections").replaceWith(updateStats.all.protections());
  $("#buildings").replaceWith(updateStats.all.playerBuildings());
};

$(document).on('click', "#start", function() {
  initiate();
});

//interpret functions assign names to number values for health, morale, and hunger stats.
function interpretMorale (){
  let morale = null;
  if (stats.morale >= 80){
    morale = "Cloud 9";
  } else if (stats.morale >= 60){
    morale = "Happy";
  } else if (stats.morale >= 40){
    morale = "Content";
  } else if (stats.morale >= 20){
    morale = "Depressed";
  } else {
    morale = "Outraged";
  };
  return morale;
};

function interpretHunger(){
  let hunger = null;
  if (stats.hunger >= 80){
    hunger = "Feasting";
  } else if (stats.hunger >= 60){
    hunger = "Well Fed";
  } else if (stats.hunger >= 40){
    hunger = "Content";
  } else if (stats.hunger >= 20){
    hunger = "Hungry";
  } else {
    hunger = "Starving";
  };
  return hunger;
};

function interpretHealth(){
  let health = null;
  if (stats.health >= 80){
    health = "Perfect";
  } else if (stats.health >= 60){
    health = "Very Healthy";
  } else if (stats.health >= 40){
    health = "Normal";
  } else if (stats.health >= 20){
    health = "Sick";
  } else {
    health = "Dying";
  };
  return health;
};

function displayStats(){
  $("#stats").replaceWith(
    $("#stats").append('<h2>Stats</h2>'),
    $("#stats").append('<li>Population: ' + stats.population + '</li>'),
    $("#stats").append('<li>Number of Buildings: ' + stats.numberOfBuildings + '</li>'),
    $("#stats").append('<li>Vacancies: ' + stats.vacancies + '</li>'),
    $("#stats").append('<li>Morale: ' + interpretMorale() + '</li>'),
    $("#stats").append('<li>Hunger: ' + interpretHunger() + '</li>'),
    $("#stats").append('<li>Health: ' + interpretHealth() + '</li>'),
    $("#stats").append('<li>Food: ' + stats.food + '</li>'),
    $("#turn").replaceWith("<p id='turn'>Turn: " + stats.turn + "</p>"),
    $("#villagetier").replaceWith("<p id='villagetier'>" + cityTiers[0].type + "</p>")
  );
};

function displayResources (){
  $("#resources").replaceWith(
    $("#resources").append("<h2>Resources</h2>"),
    $("#resources").append("<li>Grain: "+ stats.grain +"</li>"),
    $("#resources").append("<li>Wood: "+ stats.wood +"</li>"),
    $("#resources").append("<li>Stone: "+ stats.stone +"</li>"),
    $("#resources").append("<li>Iron: "+ stats.iron +"</li>"),
    $("#resources").append("<li>Steel: "+ stats.steel +"</li>"),
    $("#resources").append("<li>Bread: "+ stats.bread +"</li>"),
    $("#resources").append("<li>Alcohal: "+ stats.alcohal +"</li>")
  );
};

function displayProtections (){
  $("#protections").replaceWith(
    $("#protections").append("<h2>Protections</h2>"),
    $("#protections").append("<li>Starvation: " + protections.starvation + " Citizens Protected</li>"),
    $("#protections").append("<li>Disease: " + protections.disease + " Citizens Protected</li>"),
    $("#protections").append("<li>Fire: " + protections.fire + " Buildings Protected</li>"),
    $("#protections").append("<li>Crime: " + protections.crime + " Citizens Protected</li>"),
    $("#protections").append("<li>Attack: " + protections.attack + " Citizens Protected, " + protections.attack / 10 + " Buildings Protected</li>")
  );
};

function displayWorkers(){
  $("#workers").replaceWith(
    $("#workers").append("<li>Laborers: " + workerList.laborers + "</li>"),
    $("#workers").append("<li>Farmers: " + workerList.farmers + "</li>"),
    $("#workers").append("<li>Wood Cutters: " + workerList.woodCutters + "</li>"),
    $("#workers").append("<li>Miners: " + workerList.miners + "</li>"),
    $("#workers").append("<li>Smiths: " + workerList.blackSmiths + "</li>"),
    $("#workers").append("<li>Bakers: " + workerList.bakers + "</li>"),
    $("#workers").append("<li>Brewers: " + workerList.brewers + "</li>"),
    $("#workers").append("<li>Doctors: " + workerList.doctors + "</li>"),
    $("#workers").append("<li>Fire Fighters: " + workerList.fireFighters + "</li>"),
    $("#workers").append("<li>Police: " + workerList.police + "</li>"),
    $("#workers").append("<li>Army: " + workerList.army + "</li>"),
    $("#workers").append("<li>Unemployed: " + workerList.unemployed + "</li>")
  );
};

function displayOwnedBuildings(){
  houseBuildings.forEach((element) => {
    if (element.numberOwned > 0){
      let id = element.name.replace(/\s/g, '');
      $("#houseBuildings-owned").append("<ul id='" + id + "'><h3>" + element.name + "</h3><li> Max Residency: " + element.maxResidency + "</li><li> Number Owned: " + element.numberOwned + "</li>");
    };
  });
  farmBuildings.forEach((element) => {
    if (element.numberOwned > 0){
      let id = element.name.replace(/\s/g, '');
      $("#farmBuildings-owned").append("<ul id='" + id + "'><h3>" + element.name + "</h3><li>Workers: " + element.numberOfWorkers + "/" + element.maxNumberOfWorkers * element.numberOwned + "</li><li>Grain Production: " + element.grainPerWorker * element.numberOfWorkers + "</li><li> Number Owned: " + element.numberOwned + "</li>");
    };
  });
  woodCutterBuildings.forEach((element) => {
    if (element.numberOwned > 0){
      let id = element.name.replace(/\s/g, '');
      $("#woodCutterBuildings-owned").append("<ul id='" + id + "'><h3>" + element.name + "</h3><li>Workers: " + element.numberOfWorkers + "/" + element.maxNumberOfWorkers * element.numberOwned + "</li><li>Wood Production: " + element.woodPerWorker * element.numberOfWorkers + "</li><li> Number Owned: " + element.numberOwned + "</li>");
    };
  });
  mineBuildings.forEach((element) => {
    if (element.numberOwned > 0){
      let id = element.name.replace(/\s/g, '');
      $("#mineBuildings-owned").append("<ul id='" + id + "'><h3>" + element.name + "</h3><li>Workers: " + element.numberOfWorkers + "/" + element.maxNumberOfWorkers * element.numberOwned + "</li><li>Stone Production: " + element.stonePerWorker * element.numberOfWorkers + "</li><li>Iron Production: " + element.ironPerWorker * element.numberOfWorkers + "</li><li> Number Owned: " + element.numberOwned + "</li>");
    };
  });
  blackSmithBuildings.forEach((element) => {
    if (element.numberOwned > 0){
      let id = element.name.replace(/\s/g, '');
      $("#blackSmithBuildings-owned").append("<ul id='" + id + "'><h3>" + element.name + "</h3><li>Workers: " + element.numberOfWorkers + "/" + element.maxNumberOfWorkers * element.numberOwned + "</li><li>Steel Production: " + element.steelPerWorker * element.numberOfWorkers + "</li><li> Number Owned: " + element.numberOwned + "</li>");
    };
  });
  bakeryBuildings.forEach((element) => {
    if (element.numberOwned > 0){
      let id = element.name.replace(/\s/g, '');
      $("#bakeryBuildings-owned").append("<ul id='" + id + "'><h3>" + element.name + "</h3><li>Workers: " + element.numberOfWorkers + "/" + element.maxNumberOfWorkers * element.numberOwned + "</li><li>Bread Production: " + element.breadPerWorker * element.numberOfWorkers + "</li><li> Number Owned: " + element.numberOwned + "</li>");
    };
  });
  breweryBuildings.forEach((element) => {
    if (element.numberOwned > 0){
      let id = element.name.replace(/\s/g, '');
      $("#breweryBuildings-owned").append("<ul id='" + id + "'><h3>" + element.name + "</h3><li>Workers: " + element.numberOfWorkers + "/" + element.maxNumberOfWorkers * element.numberOwned + "</li><li>alcohal Production: " + element.alcohalPerWorker * element.numberOfWorkers + "</li><li> Number Owned: " + element.numberOwned + "</li>");
    };
  });
  graineryBuildings.forEach((element) => {
    if (element.numberOwned > 0){
      let id = element.name.replace(/\s/g, '');
      $("#graineryBuildings-owned").append("<ul id='" + id + "'><h3>" + element.name + "</h3><li>Workers: " + element.numberOfWorkers + "/" + element.maxNumberOfWorkers * element.numberOwned + "</li><li>Citizens Protected from Starvation: " + element.populationServedPerWorker * element.numberOfWorkers + "</li><li> Number Owned: " + element.numberOwned + "</li>");
    };
  });



  //from here down is unfinished -----------------------------------------------
  hospitalBuildings.forEach((element) => {
    if (element.numberOwned > 0){
      let id = element.name.replace(/\s/g, '');
      $("#bakeryBuildings-owned").append("<ul id='" + id + "'><h3>" + element.name + "</h3><li>Workers: " + element.numberOfWorkers + "/" + element.maxNumberOfWorkers * element.numberOwned + "</li><li>Bread Production: " + element.breadPerWorker * element.numberOfWorkers + "</li><li> Number Owned: " + element.numberOwned + "</li>");
    };
  });
  fireFighterBuildings.forEach((element) => {
    if (element.numberOwned > 0){
      let id = element.name.replace(/\s/g, '');
      $("#bakeryBuildings-owned").append("<ul id='" + id + "'><h3>" + element.name + "</h3><li>Workers: " + element.numberOfWorkers + "/" + element.maxNumberOfWorkers * element.numberOwned + "</li><li>Bread Production: " + element.breadPerWorker * element.numberOfWorkers + "</li><li> Number Owned: " + element.numberOwned + "</li>");
    };
  });
  policeBuildings.forEach((element) => {
    if (element.numberOwned > 0){
      let id = element.name.replace(/\s/g, '');
      $("#bakeryBuildings-owned").append("<ul id='" + id + "'><h3>" + element.name + "</h3><li>Workers: " + element.numberOfWorkers + "/" + element.maxNumberOfWorkers * element.numberOwned + "</li><li>Bread Production: " + element.breadPerWorker * element.numberOfWorkers + "</li><li> Number Owned: " + element.numberOwned + "</li>");
    };
  });
  militaryBuildings.forEach((element) => {
    if (element.numberOwned > 0){
      let id = element.name.replace(/\s/g, '');
      $("#bakeryBuildings-owned").append("<ul id='" + id + "'><h3>" + element.name + "</h3><li>Workers: " + element.numberOfWorkers + "/" + element.maxNumberOfWorkers * element.numberOwned + "</li><li>Bread Production: " + element.breadPerWorker * element.numberOfWorkers + "</li><li> Number Owned: " + element.numberOwned + "</li>");
    };
  });
};

//these function calls are for testing purposes.
displayStats();
displayResources();
displayProtections();
displayWorkers();
displayOwnedBuildings();

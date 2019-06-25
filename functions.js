let updateStats = {
  all: {
    morale: () => {
      let morale = null;
      let consumption = null;
      if (options.dontEatBread === true && options.dontDrinkAlcohal === true){
        morale = (stats.morale / stats.population);
        consumption = 0;
      } else if (options.dontEatBread === true){
        morale = (stats.morale + (stats.alcohal * 10)) / stats.population;
        consumption = (stats.population / 10);
      } else if (options.dontDrinkAlcohal === true){
        morale = (stats.morale + (stats.bread * 10)) / stats.population;
        consumption = (stats.population / 10);
      } else {
        morale = (stats.morale + ((stats.alcohal + stats.bread) * 10)) / stats.population;
        consumption = (stats.population / 20);
      };
      if (morale >= 2){
        stats.morale = 100;
      } else if (morale <= 0){
        stats.morale = 0;
      } else {
        stats.morale = Math.round(stats.morale * morale);
      };
      stats.bread -= Math.round(consumption);
      stats.alcohal -= Math.round(consumption);
    },
    hunger: () => {
      let food = (stats.grain + (stats.bread * 10)) / stats.population;
        if (food >= 2){
          stats.hunger = 100;
        } else if (food <= 0){
          stats.hunger = 0;
        } else {
          stats.hunger = Math.round(stats.hunger * food);
        };
    },
    health: () => {
      let health = stats.population * 0.01;
      stats.hunger = 50;
    },
    numberOfBuildings: () => {
      let numberOfBuildings = 0;
      let buildingTypesLoop = null;
      let buildingNamesLoop = null;
      for (var i in buildings){
        buildingTypesLoop = buildings[i];
        for (var x in buildingTypesLoop){
          buildingNamesLoop = buildingTypesLoop[x];
          numberOfBuildings += buildingNamesLoop.numberOwned;
        };
      };
      stats.numberOfBuildings = numberOfBuildings;
    },
    vacancies: () => {
      let residences = 0;
      let house = null;
      for (var i in buildings.houses){
        house = buildings.houses[i];
        residences += house.numberOwned * house.maxResidency;
      };
      residences -= stats.population;
      stats.vacancies = residences;
    },
    population: () => {
      let population = 0;
      let populationModifiers = (stats.hunger + stats.morale + stats.health);
      let populationChange = null;
      if (populationModifiers < 30){
        population = 0.75;
      }else if (populationModifiers < 60){
        population = 0.80;
      }else if (populationModifiers < 90){
        population = 0.85;
      }else if (populationModifiers < 120){
        population = 0.90;
      }else if (populationModifiers < 150){
        population = 0.95;
      }else if (populationModifiers === 300){
        population = 1.25
      }else if (populationModifiers > 270){
        population = 1.20;
      }else if (populationModifiers > 230){
        population = 1.15;
      }else if (populationModifiers > 180){
        population = 1.10;
      }else if (populationModifiers >= 150){
        population = 1.05;
      };
      populationChange = Math.round((population * stats.population) - stats.population);
      if (((population * stats.population) - stats.population) < 0){
        message.lost.population(Math.abs(populationChange));
      } else {
        message.gained.population(Math.abs(populationChange));
      };
      if ((stats.population + populationChange) < 0){
        stats.population = 0;
      } else (
        stats.population = stats.population + populationChange
      )
    },
    grain: () => {
      let grain = stats.grain;
      for (var i in buildings.farms){
        grain += buildings.farms[i].numberOfWorkers * buildings.farms[i].grainPerWorker;
      };
      if ((stats.grain - stats.population) < 0){
        stats.grain = 0
      } else (
        stats.grain = grain - stats.population
      )
    },
    wood: () => {
      let wood = 0;
      for (var i in buildings.sawMills){
        wood += buildings.sawMills[i].numberOfWorkers * buildings.sawMills[i].woodPerWorker;
      };
      stats.wood += wood;
    },
    stone: () => {
      let stone = 0;
      for (var i in buildings.mines){
        stone += buildings.mines[i].numberOfWorkers * buildings.mines[i].stonePerWorker;
      };
      stats.stone += stone;
    },
    iron: () => {
      let iron = 0;
      for (var i in buildings.mines){
        iron += buildings.mines[i].numberOfWorkers * buildings.mines[i].ironPerWorker;
      };
      stats.iron += iron;
    },
    steel: () => {
      let steel = 0;
      for (var i in buildings.blackSmith){
        steel += buildings.blackSmith[i].numberOfWorkers * buildings.blackSmith[i].steelPerWorker;
      };
      stats.steel += steel;
    },
    bread: () => {
      let bread = 0;
      for (var i in buildings.bakeries){
        bread += buildings.bakeries[i].numberOfWorkers * buildings.bakeries[i].breadPerWorker;
      };
      stats.bread += bread;
      stats.grain -= (bread * 5);
    },
    alcohal: () => {
      let alcohal = 0;
      for (var i in buildings.breweries){
        alcohal += buildings.breweries[i].numberOfWorkers * buildings.breweries[i].alcohalPerWorker;
      };
      stats.alcohal += alcohal;
      stats.grain -= alcohal * 5;
    },
    starvationProtection: () => {
      let foodStores = 0;
      for (var i in buildings.graineries){
        foodStores += buildings.graineries[i].numberOfWorkers * buildings.graineries[i].populationServedPerWorker;
      };
      protections.starvation = foodStores;
    },
    fireProtection: () => {
      let fireDefence = 0;
      for (var i in buildings.fireStations){
        fireDefence += buildings.fireStations[i].numberOfWorkers * buildings.fireStations[i].buildingsServedPerWorker;
      };
      protections.fire = fireDefence;
    },
    crimeProtection: () => {
      crimeDefence = 0;
      for (var i in buildings.police){
        crimeDefence += buildings.police[i].numberOfWorkers * buildings.police[i].populationServedPerWorker;
      };
      protections.crime = crimeDefence;
    },
    diseaseProtection: () => {
      let diseaseProtection = 0;
      for (var i in buildings.hospitals){
        crimeDefence += buildings.hospitals[i].numberOfWorkers * buildings.hospitals[i].populationServedPerWorker;
      };
      protections.disease = diseaseProtection;
    },
    attackProtection: () => {
      let army = 0;
      for (var i in buildings.military){
        crimeDefence += buildings.military[i].numberOfWorkers * buildings.military[i].militiaryStrengthPerWorker;
      };
      protections.attack = army;
    }
  }
};

let interpretStats = {
  all: {
    morale: () => {
        let interpretation = null;
        if (stats.morale >= 80){
          interpretation = "Cloud 9";
        } else if (stats.morale >= 60){
          interpretation = "Happy";
        } else if (stats.morale >= 40){
          interpretation = "Content";
        } else if (stats.morale >= 20){
          interpretation = "Depressed";
        } else {
          interpretation = "Outraged";
        };
        return interpretation;
      },
    hunger: () => {
        let interpretation = null;
        if (stats.hunger >= 80){
          interpretation = "Feasting";
        } else if (stats.hunger >= 60){
          interpretation = "Well Fed";
        } else if (stats.hunger >= 40){
          interpretation = "Content";
        } else if (stats.hunger >= 20){
          interpretation = "Hungry";
        } else {
          interpretation = "Starving";
        };
        return interpretation;
      },
    health: () => {
        let interpretation = null;
        if (stats.health >= 80){
          interpretation = "Perfect";
        } else if (stats.health >= 60){
          interpretation = "Very Healthy";
        } else if (stats.health >= 40){
          interpretation = "Normal";
        } else if (stats.health >= 20){
          interpretation = "Sick";
        } else {
          interpretation = "Dying";
        };
        return interpretation;
      }
  }
};

let refreshGui = {
  all: {
    stats: () => {
      $("#stats").replaceWith('<h2>Stats</h2><li>Morale: ' + interpretStats.all.morale() + '</li><li>Hunger: ' + interpretStats.all.hunger() + '</li><li>Health: ' + interpretStats.all.health() + '</li><li>Population: ' + stats.population + '</li><li>Number of Buildings: ' + stats.numberOfBuildings + '</li><li>Vacancies: ' + stats.vacancies + '</li><p id="turn">Turn: ' + stats.turn + '</p><p id="villagetier">' + cityTier + '</p>');
    },
    resources: () => {
      $("#resources").replaceWith("<h2>Resources</h2><li>Grain: "+ stats.grain +"</li><li>Wood: "+ stats.wood +"</li><li>Stone: "+ stats.stone +"</li><li>Iron: "+ stats.iron +"</li><li>Steel: "+ stats.steel +"</li><li>Bread: "+ stats.bread +"</li><li>Alcohal: "+ stats.alcohal +"</li>");
    },
    protections: () => {
      $("#protections").replaceWith("<h2>Protections</h2><li>Starvation: " + protections.starvation + " Citizens Protected</li><li>Disease: " + protections.disease + " Citizens Protected</li><li>Fire: " + protections.fire + " Buildings Protected</li><li>Crime: " + protections.crime + " Citizens Protected</li><li>Attack: " + protections.attack + " Citizens Protected, " + protections.attack / 10 + " Buildings Protected</li>");
    },
    workers: () => {
      $("#workers").replaceWith("<li>Laborers: " + workerList.laborers + "</li><li>Farmers: " + workerList.farmers + "</li><li>Wood Cutters: " + workerList.woodCutters + "</li><li>Miners: " + workerList.miners + "</li><li>Smiths: " + workerList.blackSmiths + "</li><li>Bakers: " + workerList.bakers + "</li><li>Brewers: " + workerList.brewers + "</li><li>Doctors: " + workerList.doctors + "</li><li>Fire Fighters: " + workerList.fireFighters + "</li><li>Police: " + workerList.police + "</li><li>Army: " + workerList.army + "</li><li>Unemployed: " + workerList.unemployed + "</li>");
    },
    playerBuildings: () => {
      for (i in buildings.houses){
        if (buildings.houses[i].numberOwned > 0){
          let id = buildings.houses[i].name.replace(/\s/g, '');
          $("#houseBuildings-owned").append("<ul id='" + id + "'><h3>" + buildings.houses[i].name + "</h3><li> Max Residency: " + buildings.houses[i].maxResidency + "</li><li> Number Owned: " + buildings.houses[i].numberOwned + "</li><button id='buySmallHouse'>Buy</button>");
        };
      };
      for (i in buildings.farms){
        if (buildings.farms[i].numberOwned > 0){
          let id = buildings.farms[i].name.replace(/\s/g, '');
          $("#farmBuildings-owned").append("<ul id='" + id + "'><h3>" + buildings.farms[i].name + "</h3><li>Workers: " + buildings.farms[i].numberOfWorkers + "/" + buildings.farms[i].maxNumberOfWorkers * buildings.farms[i].numberOwned + "</li><li>Grain Production: " + buildings.farms[i].grainPerWorker * buildings.farms[i].numberOfWorkers + "</li><li> Number Owned: " + buildings.farms[i].numberOwned + "</li>");
        };
      };
      for (i in buildings.sawMills){
        if (buildings.sawMills[i].numberOwned > 0){
          let id = buildings.sawMills[i].name.replace(/\s/g, '');
          $("#woodCutterBuildings-owned").append("<ul id='" + id + "'><h3>" + buildings.sawMills[i].name + "</h3><li>Workers: " + buildings.sawMills[i].numberOfWorkers + "/" + buildings.sawMills[i].maxNumberOfWorkers * buildings.sawMills[i].numberOwned + "</li><li>Wood Production: " + buildings.sawMills[i].woodPerWorker * buildings.sawMills[i].numberOfWorkers + "</li><li> Number Owned: " + buildings.sawMills[i].numberOwned + "</li>");
        };
      };
      for (i in buildings.mines) {
        if (buildings.mines[i].numberOwned > 0){
          let id = buildings.mines[i].name.replace(/\s/g, '');
          $("#mineBuildings-owned").append("<ul id='" + id + "'><h3>" + buildings.mines[i].name + "</h3><li>Workers: " + buildings.mines[i].numberOfWorkers + "/" + buildings.mines[i].maxNumberOfWorkers * buildings.mines[i].numberOwned + "</li><li>Stone Production: " + buildings.mines[i].stonePerWorker * buildings.mines[i].numberOfWorkers + "</li><li>Iron Production: " + buildings.mines[i].ironPerWorker * buildings.mines[i].numberOfWorkers + "</li><li> Number Owned: " + buildings.mines[i].numberOwned + "</li>");
        };
      };
      for (i in buildings.blackSmiths){
        if (i.numberOwned > 0){
          let id = i.name.replace(/\s/g, '');
          $("#blackSmithBuildings-owned").append("<ul id='" + id + "'><h3>" + i.name + "</h3><li>Workers: " + i.numberOfWorkers + "/" + i.maxNumberOfWorkers * i.numberOwned + "</li><li>Steel Production: " + i.steelPerWorker * i.numberOfWorkers + "</li><li> Number Owned: " + i.numberOwned + "</li>");
        };
      };
      for (i in buildings.bakeries){
        if (buildings.bakeries[i].numberOwned > 0){
          let id = buildings.bakeries[i].name.replace(/\s/g, '');
          $("#bakeryBuildings-owned").append("<ul id='" + id + "'><h3>" + buildings.bakeries[i].name + "</h3><li>Workers: " + buildings.bakeries[i].numberOfWorkers + "/" + buildings.bakeries[i].maxNumberOfWorkers * buildings.bakeries[i].numberOwned + "</li><li>Bread Production: " + buildings.bakeries[i].breadPerWorker * buildings.bakeries[i].numberOfWorkers + "</li><li> Number Owned: " + buildings.bakeries[i].numberOwned + "</li>");
        };
      };
      for (i in buildings.breweries){
        if (buildings.breweries[i].numberOwned > 0){
          let id = buildings.breweries[i].name.replace(/\s/g, '');
          $("#breweryBuildings-owned").append("<ul id='" + id + "'><h3>" + buildings.breweries[i].name + "</h3><li>Workers: " + buildings.breweries[i].numberOfWorkers + "/" + buildings.breweries[i].maxNumberOfWorkers * buildings.breweries[i].numberOwned + "</li><li>alcohal Production: " + buildings.breweries[i].alcohalPerWorker * buildings.breweries[i].numberOfWorkers + "</li><li> Number Owned: " + buildings.breweries[i].numberOwned + "</li>");
        };
      };
      for (i in buildings.graineries){
        if (buildings.graineries[i].numberOwned > 0){
          let id = buildings.graineries[i].name.replace(/\s/g, '');
          $("#graineryBuildings-owned").append("<ul id='" + id + "'><h3>" + buildings.graineries[i].name + "</h3><li>Workers: " + buildings.graineries[i].numberOfWorkers + "/" + buildings.graineries[i].maxNumberOfWorkers * buildings.graineries[i].numberOwned + "</li><li>Citizens Protected from Starvation: " + buildings.graineries[i].populationServedPerWorker * buildings.graineries[i].numberOfWorkers + "</li><li> Number Owned: " + buildings.graineries[i].numberOwned + "</li>");
        };
      };
    }
  }
};

let guiStartState = {
  all: {
    stats: () => {
      $("#stats").replaceWith('<h2>Stats</h2><li>Morale: ' + interpretStats.all.morale() + '</li><li>Hunger: ' + interpretStats.all.hunger() + '</li><li>Health: ' + interpretStats.all.health() + '</li><li>Population: ' + stats.population + '</li><li>Number of Buildings: ' + stats.numberOfBuildings + '</li><li>Vacancies: ' + stats.vacancies + '</li><p id="turn">Turn: ' + stats.turn + '</p><p id="villagetier">' + cityTier + '</p>');
    },
    resources: () => {
      $("#resources").replaceWith("<h2>Resources</h2><li>Grain: "+ stats.grain +"</li><li>Wood: "+ stats.wood +"</li><li>Stone: "+ stats.stone +"</li><li>Iron: "+ stats.iron +"</li><li>Steel: "+ stats.steel +"</li><li>Bread: "+ stats.bread +"</li><li>Alcohal: "+ stats.alcohal +"</li>");
    },
    protections: () => {
      $("#protections").replaceWith("<h2>Protections</h2><li>Starvation: " + protections.starvation + " Citizens Protected</li><li>Disease: " + protections.disease + " Citizens Protected</li><li>Fire: " + protections.fire + " Buildings Protected</li><li>Crime: " + protections.crime + " Citizens Protected</li><li>Attack: " + protections.attack + " Citizens Protected, " + protections.attack / 10 + " Buildings Protected</li>");
    },
    workers: () => {
      $("#workers").replaceWith("<li>Laborers: " + workerList.laborers + "</li><li>Farmers: " + workerList.farmers + "</li><li>Wood Cutters: " + workerList.woodCutters + "</li><li>Miners: " + workerList.miners + "</li><li>Smiths: " + workerList.blackSmiths + "</li><li>Bakers: " + workerList.bakers + "</li><li>Brewers: " + workerList.brewers + "</li><li>Doctors: " + workerList.doctors + "</li><li>Fire Fighters: " + workerList.fireFighters + "</li><li>Police: " + workerList.police + "</li><li>Army: " + workerList.army + "</li><li>Unemployed: " + workerList.unemployed + "</li>");
    },
    playerBuildings: () => {
      for (i in buildings.houses){
        if (buildings.houses[i].numberOwned > 0){
          let id = buildings.houses[i].name.replace(/\s/g, '');
          $("#houseBuildings-owned").append("<ul id='" + id + "'><h3>" + buildings.houses[i].name + "</h3><li> Max Residency: " + buildings.houses[i].maxResidency + "</li><li> Number Owned: " + buildings.houses[i].numberOwned + "</li><button id='buySmallHouse'>Buy</button>");
        };
      };
      for (i in buildings.farms){
        if (buildings.farms[i].numberOwned > 0){
          let id = buildings.farms[i].name.replace(/\s/g, '');
          $("#farmBuildings-owned").append("<ul id='" + id + "'><h3>" + buildings.farms[i].name + "</h3><li>Workers: " + buildings.farms[i].numberOfWorkers + "/" + buildings.farms[i].maxNumberOfWorkers * buildings.farms[i].numberOwned + "</li><li>Grain Production: " + buildings.farms[i].grainPerWorker * buildings.farms[i].numberOfWorkers + "</li><li> Number Owned: " + buildings.farms[i].numberOwned + "</li>");
        };
      };
      for (i in buildings.sawMills){
        if (buildings.sawMills[i].numberOwned > 0){
          let id = buildings.sawMills[i].name.replace(/\s/g, '');
          $("#woodCutterBuildings-owned").append("<ul id='" + id + "'><h3>" + buildings.sawMills[i].name + "</h3><li>Workers: " + buildings.sawMills[i].numberOfWorkers + "/" + buildings.sawMills[i].maxNumberOfWorkers * buildings.sawMills[i].numberOwned + "</li><li>Wood Production: " + buildings.sawMills[i].woodPerWorker * buildings.sawMills[i].numberOfWorkers + "</li><li> Number Owned: " + buildings.sawMills[i].numberOwned + "</li>");
        };
      };
      for (i in buildings.mines) {
        if (buildings.mines[i].numberOwned > 0){
          let id = buildings.mines[i].name.replace(/\s/g, '');
          $("#mineBuildings-owned").append("<ul id='" + id + "'><h3>" + buildings.mines[i].name + "</h3><li>Workers: " + buildings.mines[i].numberOfWorkers + "/" + buildings.mines[i].maxNumberOfWorkers * buildings.mines[i].numberOwned + "</li><li>Stone Production: " + buildings.mines[i].stonePerWorker * buildings.mines[i].numberOfWorkers + "</li><li>Iron Production: " + buildings.mines[i].ironPerWorker * buildings.mines[i].numberOfWorkers + "</li><li> Number Owned: " + buildings.mines[i].numberOwned + "</li>");
        };
      };
      for (i in buildings.blackSmiths){
        if (i.numberOwned > 0){
          let id = i.name.replace(/\s/g, '');
          $("#blackSmithBuildings-owned").append("<ul id='" + id + "'><h3>" + i.name + "</h3><li>Workers: " + i.numberOfWorkers + "/" + i.maxNumberOfWorkers * i.numberOwned + "</li><li>Steel Production: " + i.steelPerWorker * i.numberOfWorkers + "</li><li> Number Owned: " + i.numberOwned + "</li>");
        };
      };
      for (i in buildings.bakeries){
        if (buildings.bakeries[i].numberOwned > 0){
          let id = buildings.bakeries[i].name.replace(/\s/g, '');
          $("#bakeryBuildings-owned").append("<ul id='" + id + "'><h3>" + buildings.bakeries[i].name + "</h3><li>Workers: " + buildings.bakeries[i].numberOfWorkers + "/" + buildings.bakeries[i].maxNumberOfWorkers * buildings.bakeries[i].numberOwned + "</li><li>Bread Production: " + buildings.bakeries[i].breadPerWorker * buildings.bakeries[i].numberOfWorkers + "</li><li> Number Owned: " + buildings.bakeries[i].numberOwned + "</li>");
        };
      };
      for (i in buildings.breweries){
        if (buildings.breweries[i].numberOwned > 0){
          let id = buildings.breweries[i].name.replace(/\s/g, '');
          $("#breweryBuildings-owned").append("<ul id='" + id + "'><h3>" + buildings.breweries[i].name + "</h3><li>Workers: " + buildings.breweries[i].numberOfWorkers + "/" + buildings.breweries[i].maxNumberOfWorkers * buildings.breweries[i].numberOwned + "</li><li>alcohal Production: " + buildings.breweries[i].alcohalPerWorker * buildings.breweries[i].numberOfWorkers + "</li><li> Number Owned: " + buildings.breweries[i].numberOwned + "</li>");
        };
      };
      for (i in buildings.graineries){
        if (buildings.graineries[i].numberOwned > 0){
          let id = buildings.graineries[i].name.replace(/\s/g, '');
          $("#graineryBuildings-owned").append("<ul id='" + id + "'><h3>" + buildings.graineries[i].name + "</h3><li>Workers: " + buildings.graineries[i].numberOfWorkers + "/" + buildings.graineries[i].maxNumberOfWorkers * buildings.graineries[i].numberOwned + "</li><li>Citizens Protected from Starvation: " + buildings.graineries[i].populationServedPerWorker * buildings.graineries[i].numberOfWorkers + "</li><li> Number Owned: " + buildings.graineries[i].numberOwned + "</li>");
        };
      };
    }
  }
};

let modifyPopulation = {
  onTurn: () => {
    let baseModifier = 1;
    let modifier = ((stats.morale + stats.hunger + stats.health - 150) / 3) / 200;
    //get lowest stat
    let catastrophe = Math.min(stats.morale, stats.hunger, stats.health);
    //check if lowest stat is below 50 and modify population
    if (catastrophe < 10) {
      stats.population = stats.population * 0.75;
    } else if (catastrophe < 20) {
      stats.population = stats.population * 0.80;
    } else if (catastrophe < 30) {
      stats.population = stats.population * 0.85;
    } else if (catastrophe < 40) {
      stats.population = stats.population * 0.90;
    } else if (catastrophe < 50) {
      stats.population = stats.population * 0.95;
    } else {
      stats.population = Math.round(stats.population * (baseModifier + modifier));
    };
  },
  onEvent: (effect) => {
    stats.population = stats.population + effect;
  }
};

let buildingManager = {
  buyBuildings: (building) => {
    stats.wood -= building.costWood;
    stats.stone -= building.costStone;
    stats.iron -= building.costIron;
    stats.steel -= building.costSteel;
    building.numberOwned++;
  },
};

$(document).on("click", "#buySmallHouse", function() {
  console.log('button press');
  buildingManager.buyBuildings(buildings.houses.smallHouse);
  initiate();
});

$(document).on("click", "#end-turn", function() {
  console.log('ending turn');
  turn();
});

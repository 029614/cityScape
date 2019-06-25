let cityTier = "Village";

let options = {
  dontEatGrain: false,
  dontEatBread: false,
  dontDrinkAlcohal: false,
}

let workerList = {
  army: 0,  //contribute to protection frmo attack
  bakers: 0,  //contribute to production of bread
  blackSmiths: 0,  //contribute to production of steel
  brewers: 0,  //contribute to production of alcohal
  doctors: 0,  //contribute to protection from disease
  farmers: 0,  //contribute to production of grain
  fireFighters: 0, //contribute to protection from fire
  laborers: 0,  //contribute to construction of new buildings
  miners: 0, //contribute to production of stone and iron
  police: 0,  //contribute to protection from crime
  unemployed: 25, //contribute to crime
  woodCutters: 0,  //contribute to production of wood
};
let workerListStartState = {
  army: 0,  //contribute to protection frmo attack
  bakers: 0,  //contribute to production of bread
  blackSmiths: 0,  //contribute to production of steel
  brewers: 0,  //contribute to production of alcohal
  doctors: 0,  //contribute to protection from disease
  farmers: 0,  //contribute to production of grain
  fireFighters: 0, //contribute to protection from fire
  laborers: 0,  //contribute to construction of new buildings
  miners: 0, //contribute to production of stone and iron
  police: 0,  //contribute to protection from crime
  unemployed: 25, //contribute to crime
  woodCutters: 0,  //contribute to production of wood
};
let stats = {
  turn: 0,

  //population modifiers. 50+ means population rises. -50 population declines.
  morale: 50,
  hunger:50,
  health: 50,

  //population data
  population: 25,
  vacancies: 0,
  numberOfBuildings: 0,

  //building resources
  wood: 100,
  stone: 100,
  iron: 25,
  steel: 0,

  //morale resources
  bread: 5, //works as food in place of grain. 1 bread feeds 10 population.
  alcohal: 5,
  grain: 25  //1 grain feeds 1 population.
};
let statsStartState = {
  turn: 0,

  //population modifiers. 50+ means population rises. -50 population declines.
  morale: 50,
  hunger:50,
  health: 50,

  //population data
  population: 25,
  vacancies: 0,
  numberOfBuildings: 0,

  //building resources
  wood: 100,
  stone: 100,
  iron: 25,
  steel: 0,

  //morale resources
  bread: 5, //works as food in place of grain. 1 bread feeds 10 population.
  alcohal: 5,
  grain: 25  //1 grain feeds 1 population.
};
let protections = {
  //amount of protections against specific world events
  starvation: 0, //population
  fire: 0, //buildings
  disease: 0, //population
  crime: 0, //population
  attack: 0 //population and buildings
};
let protectionsStartState = {
  //amount of protections against specific world events
  starvation: 0, //population
  fire: 0, //buildings
  disease: 0, //population
  crime: 0, //population
  attack: 0 //population and buildings
};
let cityTiers = {
  village: {
    name: "Village",
    maxPopulation: 500,
    maxBuildings: 50,
    description: "This settlement is still only a village, filled with hope and dreams and strong people with a sense of freedom and adventure. Villages don't suffer from negative morale or health the same way cities do, but can't afford to run low on food."
  },
  town: {
    name: "Town",
    maxPopulation: 2500,
    maxBuildings: 250,
    description: "This settlement has grown into a town! As mayor, you should start being concerned with morale and health issues."
  },
  bustlingTown: {
    name: "Bustling Town",
    maxPopulation: 5000,
    maxBuildings: 500,
    description: "Still a town, yet now on the verge of becoming a full blown city. This is a dangerous point of developement, as your population is outgrowing the towns infrastructure. disease, morale, and hunger should be strictly monitored at this point."
  },
  city: {
    name: "City",
    maxPopulation: 10000,
    maxBuildings: 1000,
    description: "After many years, your village has finally graduated into a city. Take the good with the bad though, while your cities infrastructure is no longer a concern, you will likely see organized crime rates sore."
  },
  bustlingCity: {
    name: "Bustling City",
    maxPopulation: 50000,
    maxBuildings: 5000,
    description: "Your city is overflowing with busy workers and industry! Once again on the verge of collapse, you'll have to moniter morale and hunger quite carefully as you attempt to help this city accomodate its ever expanding populous."
  },
  metroplis: {
    name: "Metropolis",
    maxPopulation: 100000,
    maxBuildings: 10000,
    description: "Once, a flea bitten village on the edge of nowhere. Now, a center for commerce and tourism on the world scene."
  },
  superCity: {
    type: "Super City",
    maxPopulation: 999999999,
    maxBuildings: 999999,
    description: "Congratulations! You've beaten the game!"
  }
};

let buildings = {
  houses: {
    smallHouse: {
      name: "Small House",
      description: "",
      costWood: 50,
      costStone: 50,
      costIron: 0,
      costSteel: 0,
      laborers: 5,
      numberOwned: 5,
      maxResidency: 5
    },
    mediumHouse: {
      name: "Medium House",
      description: "",
      costWood: 250,
      costStone: 250,
      costIron: 50,
      costSteel: 0,
      laborers: 25,
      numberOwned: 0,
      maxResidency: 10
    },
  },
  farms: {
    smallFarm: {
      name: "Small Farm",
      description: "",
      costWood: 50,
      costStone: 50,
      costIron: 0,
      costSteel: 0,
      laborers: 5,
      numberOwned: 4,
      numberOfWorkers: 0,
      maxNumberOfWorkers: 2,
      grainPerWorker: 50
    },
    mediumFarm: {
      name: "Medium Farm",
      description: "",
      costWood: 250,
      costStone: 250,
      costIron: 50,
      costSteel: 0,
      numberOwned: 0,
      numberOfWorkers: 0,
      maxNumberOfWorkers: 10,
      grainPerWorker: 100
    }
  },
  graineries: {
    smallGrainery: {
      name: "Small Grainery",
      description: "",
      costWood: 50,
      costStone: 50,
      costIron: 0,
      costSteel: 0,
      numberOwned: 0,
      numberOfWorkers: 0,
      maxNumberOfWorkers: 1,
      populationServedPerWorker: 10
    },
    mediumGrainery: {
      name: "Medium Grainery",
      description: "",
      costWood: 250,
      costStone: 250,
      costIron: 50,
      costSteel: 0,
      numberOwned: 0,
      numberOfWorkers: 0,
      maxNumberOfWorkers: 5,
      populationServedPerWorker: 20
    },
  },
  sawMills: {
    smallSawMill: {
      name: "Small Sawmill",
      description: "",
      costWood: 50,
      costStone: 50,
      costIron: 0,
      costSteel: 0,
      laborers: 5,
      numberOwned: 1,
      numberOfWorkers: 0,
      maxNumberOfWorkers: 5,
      woodPerWorker: 10,
    },
    mediumSawMill: {
      name: "Medium Sawmill",
      description: "",
      costWood: 250,
      costStone: 250,
      costIron: 50,
      costSteel: 0,
      numberOwned: 0,
      numberOfWorkers: 0,
      maxNumberOfWorkers: 10,
      woodPerWorker: 25,
    },
  },
  mines: {
    smallMine: {
      name: "Small Mine",
      description: "",
      costWood: 50,
      costStone: 50,
      costIron: 0,
      costSteel: 0,
      laborers: 5,
      numberOwned: 1,
      numberOfWorkers: 0,
      maxNumberOfWorkers: 5,
      stonePerWorker: 10,
      ironPerWorker: 5,
    },
    mediumMine: {
      name: "Medium Mine",
      description: "",
      costWood: 250,
      costStone: 250,
      costIron: 50,
      costSteel: 0,
      numberOwned: 0,
      numberOfWorkers: 0,
      maxNumberOfWorkers: 15,
      stonePerWorker: 25,
      ironPerWorker: 15,
    },
  },
  blackSmiths: {
    smallBlackSmith: {
      name: "Small BlackSmith",
      description: "",
      costWood: 50,
      costStone: 50,
      costIron: 50,
      costSteel: 0,
      numberOwned: 0,
      numberOfWorkers: 0,
      maxNumberOfWorkers: 1,
      steelPerWorker: 5
    },
    mediumBlackSmith: {
      name: "Medium BlackSmith",
      description: "",
      costWood: 250,
      costStone: 250,
      costIron: 100,
      costSteel: 50,
      numberOwned: 0,
      numberOfWorkers: 0,
      maxNumberOfWorkers: 5,
      steelPerWorker: 10
    },
  },
  bakeries: {
    smallBaker: {
      name: "Small Bakery",
      description: "",
      costWood: 50,
      costStone: 50,
      costIron: 50,
      costSteel: 0,
      numberOwned: 0,
      numberOfWorkers: 0,
      maxNumberOfWorkers: 1,
      breadPerWorker: 10,
    },
    mediumBakery: {
      name: "Medium Bakery",
      description: "",
      costWood: 250,
      costStone: 250,
      costIron: 100,
      costSteel: 50,
      numberOwned: 0,
      numberOfWorkers: 0,
      maxNumberOfWorkers: 5,
      breadPerWorker: 25,
    },
  },
  breweries: {
    smallBrewery: {
      name: "Small Brewery",
      description: "",
      costWood: 50,
      costStone: 50,
      costIron: 50,
      costSteel: 0,
      numberOwned: 0,
      numberOfWorkers: 0,
      maxNumberOfWorkers: 1,
      alcohalPerWorker: 10,
    },
    mediumBakery: {
      name: "Medium Brewery",
      description: "",
      costWood: 250,
      costStone: 250,
      costIron: 100,
      costSteel: 50,
      numberOwned: 0,
      numberOfWorkers: 0,
      maxNumberOfWorkers: 5,
      alcohalPerWorker: 25,
    },
  },
  hospitals: {
    clinic: {
      name: "Clinic",
      description: "",
      costWood: 50,
      costStone: 50,
      costIron: 50,
      costSteel: 0,
      numberOwned: 0,
      numberOfWorkers: 0,
      maxNumberOfWorkers: 5,
      populationServedPerWorker: 20,
    },
    mediumHospital: {
      name: "Medium Hospital",
      description: "",
      costWood: 250,
      costStone: 250,
      costIron: 100,
      costSteel: 50,
      numberOwned: 0,
      numberOfWorkers: 0,
      maxNumberOfWorkers: 20,
      populationServedPerWorker: 500,
    },
  },
  fireStations: {
    smallFireStation: {
      name: "Small FireStation",
      description: "",
      costWood: 50,
      costStone: 50,
      costIron: 50,
      costSteel: 0,
      numberOwned: 0,
      numberOfWorkers: 0,
      maxNumberOfWorkers: 5,
      buildingsServedPerWorker: 50,
    },
    mediumFireStation: {
      name: "Medium FireStation",
      description: "",
      costWood: 250,
      costStone: 250,
      costIron: 100,
      costSteel: 50,
      numberOwned: 0,
      numberOfWorkers: 0,
      maxNumberOfWorkers: 20,
      buildingsServedPerWorker: 250,
    },
  },
  police: {
    sheriff: {
      name: "Sheriff",
      description: "",
      costWood: 50,
      costStone: 50,
      costIron: 50,
      costSteel: 0,
      numberOwned: 0,
      numberOfWorkers: 0,
      maxNumberOfWorkers: 5,
      populationServedPerWorker: 25,
    },
    mediumPoliceStation: {
      name: "Medium PoliceStation",
      description: "",
      costWood: 250,
      costStone: 250,
      costIron: 100,
      costSteel: 50,
      numberOwned: 0,
      numberOfWorkers: 0,
      maxNumberOfWorkers: 20,
      populationServedPerWorker: 500,
    },
  },
  military: {
    militiaGarrison: {
      name: "Militia Garrison",
      description: "",
      costWood: 50,
      costStone: 50,
      costIron: 50,
      costSteel: 0,
      numberOwned: 0,
      numberOfWorkers: 0,
      maxNumberOfWorkers: 10,
      militiaryStrengthPerWorker: 10,
    },
    barracks: {
      name: "Barracks",
      description: "",
      costWood: 250,
      costStone: 250,
      costIron: 100,
      costSteel: 50,
      numberOwned: 0,
      numberOfWorkers: 0,
      maxNumberOfWorkers: 50,
      militiaryStrengthPerWorker: 20
    },
  }
};

let message = {
  lost: {
    grain: (amount) => {
      $("#messages").append("<li class='lost'>Turn " + stats.turn + ": You lose " + amount + " Grain.</li>");
    },
    wood: (amount) => {
      $("#messages").append("<li class='lost'>Turn " + stats.turn + ": You lose" + amount + "Wood.</li>");
    },
    stone: (amount) => {
      $("#messages").append("<li class='lost'>Turn " + stats.turn + ": You lose" + amount + "Stone.</li>");
    },
    iron: (amount) => {
      $("#messages").append("<li class='lost'>Turn " + stats.turn + ": You lose" + amount + "Iron.</li>");
    },
    steel: (amount) => {
      $("#messages").append("<li class='lost'>Turn " + stats.turn + ": You lose" + amount + "Steel.</li>");
    },
    population: (amount) => {
      $("#messages").append("<li class='lost'>Turn " + stats.turn + ": " + amount + " Citizens have died!</li>");
    },
    buildings: (building) => {
      $("#messages").append("<li class='lost'>Turn " + stats.turn + ": " + building + " has burned down!</li>");
    },
  },
  gained: {
    grain: (amount) => {
      $("#messages").append("<li class='gained'>Turn " + stats.turn + ": You gain " + amount + " Grain.</li>");
    },
    wood: (amount) => {
      $("#messages").append("<li class='gained'>Turn " + stats.turn + ": You gain " + amount + " Wood.</li>");
    },
    stone: (amount) => {
      $("#messages").append("<li class='gained'>Turn " + stats.turn + ": You gain " + amount + " Stone.</li>");
    },
    iron: (amount) => {
      $("#messages").append("<li class='gained'>Turn " + stats.turn + ": You gain " + amount + " Iron.</li>");
    },
    steel: (amount) => {
      $("#messages").append("<li class='gained'>Turn " + stats.turn + ": You gain " + amount + " Steel.</li>");
    },
    population: (amount) => {
      $("#messages").append("<li class='gained'>Turn " + stats.turn + ": " + amount + " Citizens have joined your " + cityTier + ".</li>");
    },
    buildings: (building) => {
      $("#messages").append("<li class='gained'>Turn " + stats.turn + ": " + building + " construction finished.</li>");
    },
  },

  cantAfford: (building) => {
    $("#messages").append("<li>Turn " + stats.turn + ": You can't afford a " + building + " right now!</li>");
  },
};

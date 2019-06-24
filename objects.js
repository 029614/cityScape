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
}
let stats = {
  turn: 0,

  //population modifiers. 50+ means population rises. -50 population declines.
  morale: 75,
  hunger: 75,
  health: 75,
  food: 50,  //grain + (bread*10)

  //population data
  population: 0,
  vacancies: 0,
  numberOfBuildings: 0,

  //building resources
  wood: 50,
  stone: 50,
  iron: 25,
  steel: 0,

  //morale resources
  bread: 0, //works as food in place of grain. 1 bread feeds 10 population.
  alcohal: 0,
  grain: 50  //1 grain feeds 1 population.
};
let protections = {
  //amount of protections against specific world events
  starvation: 0, //population
  fire: 0, //buildings
  disease: 0, //population
  crime: 0, //population
  attack: 0 //population and buildings
};
let cityTiers = [
  {
    type: "Village",
    maxPopulation: 500,
    maxBuildings: 50,
    description: "This settlement is still only a village, filled with hope and dreams and strong people with a sense of freedom and adventure. Villages don't suffer from negative morale or health the same way cities do, but can't afford to run low on food."
  },
  {
    type: "Town",
    maxPopulation: 2500,
    maxBuildings: 250,
    description: "This settlement has grown into a town! As mayor, you should start being concerned with morale and health issues."
  },
  {
    type: "Bustling Town",
    maxPopulation: 5000,
    maxBuildings: 500,
    description: "Still a town, yet now on the verge of becoming a full blown city. This is a dangerous point of developement, as your population is outgrowing the towns infrastructure. disease, morale, and hunger should be strictly monitored at this point."
  },
  {
    type: "City",
    maxPopulation: 10000,
    maxBuildings: 1000,
    description: "After many years, your village has finally graduated into a city. Take the good with the bad though, while your cities infrastructure is no longer a concern, you will likely see organized crime rates sore."
  },
  {
    type: "Bustling City",
    maxPopulation: 50000,
    maxBuildings: 5000,
    description: "Your city is overflowing with busy workers and industry! Once again on the verge of collapse, you'll have to moniter morale and hunger quite carefully as you attempt to help this city accomodate its ever expanding populous."
  },
  {
    type: "Metropolis",
    maxPopulation: 100000,
    maxBuildings: 10000,
    description: "Once, a flea bitten village on the edge of nowhere. Now, a center for commerce and tourism on the world scene."
  },
  {
    type: "Super City",
    maxPopulation: 999999999,
    maxBuildings: 999999,
    description: "Congratulations! You've beaten the game!"
  }
];
let houseBuildings = [
  {
    type: "residency",
    name: "Small House",
    costWood: 10,
    costStone: 10,
    laborers: 5,
    numberOwned: 5,
    maxResidency: 5
  },
  {
    type: "residency",
    name: "Medium House",
    costWood: 50,
    costStone: 50,
    laborers: 25,
    numberOwned: 0,
    maxResidency: 10
  },
  {
    type: "residency",
    name: "Large House",
    costWood: 100,
    costStone: 100,
    laborers: 50,
    numberOwned: 0,
    maxResidency: 20
  },
  {
    type: "residency",
    name: "Huge House",
    costWood: 250,
    costStone: 250,
    costIron: 100,
    laborers: 75,
    numberOwned: 0,
    maxResidency: 30
  },
  {
    type: "residency",
    name: "Manor",
    costWood: 250,
    costStone: 250,
    costIron: 200,
    laborers: 125,
    numberOwned: 0,
    maxResidency: 40
  },
  {
    type: "residency",
    name: "Mansion",
    costWood: 500,
    costStone: 250,
    costIron: 250,
    costSteel: 125,
    laborers: 175,
    numberOwned: 0,
    maxResidency: 50
  },
  {
    type: "residency",
    name: "Apartment Building",
    costWood: 500,
    costStone: 500,
    costIron: 350,
    costSteel: 250,
    laborers: 250,
    numberOwned: 0,
    maxResidency: 100
  },
];

let farmBuildings = [
  {
    type: "farmer",
    name: "Small Farm",
    costWood: 10,
    costStone: 10,
    laborers: 5,
    numberOwned: 4,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 2,
    grainPerWorker: 50
  },
  {
    type: "farmer",
    name: "Medium Farm",
    costWood: 50,
    costStone: 50,
    costIron: 10,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 10,
    grainPerWorker: 100
  },
  {
    type: "farmer",
    name: "Large Farm",
    costWood: 250,
    costStone: 250,
    costIron: 50,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 25,
    grainPerWorker: 200
  },
  {
    type: "farmer",
    name: "Huge Farm",
    costWood: 500,
    costStone: 500,
    costIron: 250,
    costSteel: 50,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 50,
    grainPerWorker: 500
  },
];

let graineryBuildings = [
  {
    type: "grainHandler",
    name: "Small Grainery",
    cost: 400,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 1,
    populationServedPerWorker: 10
  },
  {
    type: "grainHandler",
    name: "Medium Grainery",
    cost: 2000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 5,
    populationServedPerWorker: 20
  },
  {
    type: "grainHandler",
    name: "Large Grainery",
    cost: 10000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 10,
    populationServedPerWorker: 40
  },
  {
    type: "grainHandler",
    name: "Huge Grainery",
    cost: 50000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 50,
    populationServedPerWorker: 75
  },
];

let woodCutterBuildings = [
  {
    type: "woodCutter",
    name: "Small Wood Cutter's Camp",
    costWood: 20,
    costStone: 5,
    laborers: 5,
    numberOwned: 1,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 5,
    woodPerWorker: 10,
  },
  {
    type: "woodCutter",
    name: "Medium Wood Cutter's Camp",
    cost: 1000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 10,
    woodPerWorker: 25,
  },
  {
    type: "woodCutter",
    name: "Large Wood Cutter's Camp",
    cost: 5000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 50,
    woodPerWorker: 50,
  },
  {
    type: "woodCutter",
    name: "Huge Wood Cutter's Camp",
    cost: 25000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 150,
    woodPerWorker: 100,
  },
];

let mineBuildings = [
  {
    type: "miner",
    name: "Small Mine",
    costWood: 25,
    laborers: 5,
    numberOwned: 1,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 5,
    stonePerWorker: 10,
    ironPerWorker: 5,
  },
  {
    type: "miner",
    name: "Medium Mine",
    cost: 1000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 15,
    stonePerWorker: 25,
    ironPerWorker: 15,
  },
  {
    type: "miner",
    name: "Large Mine",
    cost: 5000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 25,
    stonePerWorker: 50,
    ironPerWorker: 25,
  },
  {
    type: "miner",
    name: "Huge Mine",
    cost: 25000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 150,
    stonePerWorker: 100,
    ironPerWorker: 50,
  },
];

let blackSmithBuildings = [
  {
    type: "blackSmith",
    name: "Small BlackSmith",
    cost: 200,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 1,
    steelPerWorker: 5
  },
  {
    type: "blackSmith",
    name: "Medium BlackSmith",
    cost: 2000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 5,
    steelPerWorker: 10
  },
  {
    type: "blackSmith",
    name: "Large BlackSmith",
    cost: 10000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 25,
    steelPerWorker: 25
  },
  {
    type: "blackSmith",
    name: "Huge BlackSmith",
    cost: 50000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 150,
    steelPerWorker: 50
  },
];

let bakeryBuildings = [
  {
    type: "baker",
    name: "Small Bakery",
    cost: 200,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 1,
    breadPerWorker: 10,
  },
  {
    type: "baker",
    name: "Medium Bakery",
    cost: 2000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 5,
    breadPerWorker: 25,
  },
  {
    type: "baker",
    name: "Large Bakery",
    cost: 10000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 25,
    breadPerWorker: 50,
  },
  {
    type: "baker",
    name: "Huge Bakery",
    cost: 50000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 150,
    breadPerWorker: 100,
  },
];

let breweryBuildings = [
  {
    type: "brewer",
    name: "Small Brewery",
    cost: 200,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 1,
    alcohalPerWorker: 10,
  },
  {
    type: "brewer",
    name: "Medium Brewery",
    cost: 2000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 5,
    alcohalPerWorker: 25,
  },
  {
    type: "brewer",
    name: "Large Brewery",
    cost: 10000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 25,
    alcohalPerWorker: 50,
  },
  {
    type: "brewer",
    name: "Huge Brewery",
    cost: 50000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 150,
    alcohalPerWorker: 100,
  },
];

let hospitalBuildings = [
  {
    type: "doctor",
    name: "Small Hospital",
    cost: 400,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 5,
    populationServed: 100,
  },
  {
    type: "doctor",
    name: "Medium Hospital",
    cost: 2000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 20,
    populationServed: 500,
  },
  {
    type: "doctor",
    name: "Large Hospital",
    cost: 10000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 100,
    populationServed: 5000,
  },
  {
    type: "doctor",
    name: "Huge Hospital",
    cost: 50000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 500,
    populationServed: 25000,
  },
];

let fireFighterBuildings = [
  {
    type: "fireFighter",
    name: "Small FireStation",
    cost: 400,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 5,
    buildingsServed: 50,
  },
  {
    type: "fireFighter",
    name: "Medium FireStation",
    cost: 2000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 20,
    buildingsServed: 250,
  },
  {
    type: "fireFighter",
    name: "Large FireStation",
    cost: 10000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 100,
    buildingsServed: 1000,
  },
  {
    type: "fireFighter",
    name: "Huge FireStation",
    cost: 50000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 500,
    buildingsServed: 5000,
  },
];

let policeBuildings = [
  {
    type: "police",
    name: "Small PoliceStation",
    cost: 400,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 5,
    populationServed: 100,
  },
  {
    type: "police",
    name: "Medium PoliceStation",
    cost: 2000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 20,
    populationServed: 500,
  },
  {
    type: "police",
    name: "Large PoliceStation",
    cost: 10000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 100,
    populationServed: 5000,
  },
  {
    type: "police",
    name: "Huge PoliceStation",
    cost: 50000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 500,
    populationServed: 25000,
  },
];

let militaryBuildings = [
  {
    type: "garrison",
    name: "Militia Garrison",
    cost: 500,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 10,
    militiaryStrength: 100,
  },
  {
    type: "garrison",
    name: "Barracks",
    cost: 2000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 50,
    militiaryStrength: 500
  },
  {
    type: "garrison",
    type: "Fort",
    cost: 10000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 400,
    militiaryStrength: 4000,
  },
  {
    type: "garrison",
    name: "Redoubt",
    cost: 100000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 2000,
    militiaryStrength: 20000
  },
];

let schoolBuildings = [
  {
    type: "school",
    name: "Small School",
    cost: 400,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 5,
    populationServed: 100,
  },
  {
    type: "school",
    name: "Medium School",
    cost: 2000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 20,
    populationServed: 500,
  },
  {
    type: "school",
    name: "Large School",
    cost: 10000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 100,
    populationServed: 5000,
  },
  {
    type: "school",
    name: "Huge School",
    cost: 50000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 500,
    populationServed: 25000,
  },
];

let tradeBuildings = [
  {
    type: "trade",
    name: "Trading Post",
    cost: 100,
    numberOwned: 1,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 1,
    goodsSold: 20,
  },
  {
    type: "trade",
    name: "Mercantile",
    cost: 500,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 5,
    goodsSold:  125,
  },
  {
    type: "trade",
    name: "Market",
    cost: 2000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 20,
    goodsSold: 750,
  },
  {
    type: "trade",
    name: "Trade Center",
    cost: 10000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers:  100,
    goodsSold: 5000,
  },
  {
    type: "trade",
    name: "International Market Place",
    cost: 100000,
    numberOwned: 0,
    numberOfWorkers: 0,
    maxNumberOfWorkers: 1000,
    goodsSold: 20000,
  }
];

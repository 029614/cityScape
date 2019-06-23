let cityTier = Object.keys(cityTiers)[0];
let maxPopulation = Object.keys(cityTier[0]);
let maxBuildings = Object.keys(cityTier[1]);

function calulateMorale (){
  let morale = stats.morale;

};

function calculateHunger (){
  let food = (stats.grain + stats.bread) / totalPopulation;
  if (food < 1){
    stats.hunger -= 1;
  } else if (food = 1){
    stats.hunger += 0;
  } else {
    stats.hunger += food;
  };
  return stats.hunger;
};

function calculateHealth (){
  let health = stats.health;
};

function calculateNumberOfBuildings (){
  let numberOfBuildings = 0;
  buildings.forEach((element) => {
    numberOfBuildings += element.numberOwned;
  });
  stats.numberOfBuildings = numberOfBuildings;
};

function calculateVacancies (){
  let vacancies = 0;
  buildings.forEach((element) => {
    if (element.type === "residency"){
      vacancies += element.maxResidency * element.numberOwned;
    };
  });
  stats.vacancies = vacancies - stats.population;
};

function calculatePopulation (){
  let population = 0;
  if (stats.hunger < 50){

  } else if (stats.hunger > 50){
  }
};

function calculateGrain(){
  let grain = 0;
  buildings.forEach((element) => {
    if (element.type === "farmer"){
      grain += workerlist.farmer * element.grainPerWorker;
    };
  });
  stats.grain = grain - stats.population;
};

function calculateWood(){
  let wood = stats.wood;
  buildings.forEach((element) => {
    if (element.type === "woodCutter"){
      vacancies += workerlist.woodCutter * element.woodPerWorker;
    };
  });
  stats.wood = wood;
};

function calculateStone(){
  let stone = stats.stone;
  buildings.forEach((element) => {
    if (element.type === "miner"){
      stone += workerlist.miner * element.stonePerWorker;
    };
  });
  stats.stone = stone;
};

function calculateIron(){
  let iron = stats.iron;
  buildings.forEach((element) => {
    if (element.type === "miner"){
      stone += workerlist.miner * element.ironPerWorker;
    };
  });
  stats.iron = iron;
};

function calculateSteel(){
  let steel = 0;
  buildings.forEach((element) => {
    if (element.type === "blackSmith"){
      steel += workerlist.blackSmith * element.steelPerWorker;
    };
  });
  stats.steel = steel;
};

function calculateBread(){
  let bread = 0;
  buildings.forEach((element) => {
    if (element.type === "baker"){
      bread += workerlist.baker * element.breadPerWorker;
    };
  });
  stats.bread = bread;
};

function calculateAlcohal(){
  let alcohal = 0;
  buildings.forEach((element) => {
    if (element.type === "brewer"){
      alcohal += workerList.brewer * element.alcohalPerWorker;
    };
  });
  stats.vacancies = vacancies - stats.population;
};

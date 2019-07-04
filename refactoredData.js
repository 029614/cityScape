let buildings = {
  houses: {
    simpleHouse: {
      information: {
        name: 'Simple House',
        description: 'The most basic of all shelters, a Simple House does little more then block the wind and rain. It houses up to 5 citizens, and can be upgraded to a Complex House after unlocking that blue print.',
        address: 'houses',
        id: 'simpleHouse',
        upgrade: 'complexHouse',
        imageSource: 'images/thumbnails/smallHouse.png'
      },
      constantData: {
        numberOfResidents: 5,
        numberOfWorkers: 0,
        numberOfInputs: 0,
        numberOfOutputs: 0,
        materialsIn: 0,
        materialsOut: 0,
        inQuant: 0,
        outQuant: 0,
        tier: 1,
      },
      variableData: {
        numberOwned: 5,
        currentWorkers: 0,
        currentResidents: 0,
      },
      construction: {
        labor: 100,
        wood: 0,
        stone: 0,
        iron: 0,
        steel: 0,
      }
    }
  }
};

let globalVariableData = {
  population: {
    total: 0, //total population
    inHomes: 0, //citizens with homes have jobs.
    homeless: 0,  //homeless citizens need to eat but dont have jobs.
    jobs: {
      laborer: 0, //the default class for citizens, contribute to construction projects.
      skilledLabor: 0,  //everytime you assign a citizen to a job, a laborer becomes a skilled laborer. Skilled laborers do not contribute towards construction.
    }
  },
  health: {
    hunger: 0,
    disease: 0,
    morale: 0,
  },
  resources: {
    food: {
      grain: 0, //1 grain feeds 1 population. 5 grain makes 1 bread.
      bread: 0 //1 bread feeds 10 population.
    },
    buildingMaterials: {
      wood: 0,
      stone: 0,
      iron: 0,
      steel: 0,
    }
  }
}

function eat() {
  //controls the amount of food eaten each turn
  //eats bread first, then grain. !!important!!
  let bread = globalVariableData.resources.food.bread;
  let grain = globalVariableData.resources.food.grain;
  let nutritionalNeeds = globalVariableData.population.total; //each member of the population requires 1 unit of food every turn.

  //calculates amount of bread to eat.
  if (bread - Math.round(nutritionalNeeds / 10) > 0){
    nutritionalNeeds = 0;
    globalVariableData.resources.food.bread -= Math.ceil(nutritionalNeeds / 10);
  } else if (bread - Math.round(nutritionalNeeds / 10) < 1){
    nutritionalNeeds -= bread * 10;
    globalVariableData.resources.food.bread = 0;
  };
  //calculates amount of grain to eat after bread is eaten.
  if (nutritionalNeeds > 0){

  }
}

let buildingHtml = {
  //open html with <li> and define id
  beginHtml: '<li class="building-entry">',
  thumbnail: '<image class="building-thumbnail" src="' + building.information.imageSource + '" alt="' + building.information.name + '">',
  information: {
    beginHtml: '<ul class="building-information">',
    description: '<li class="building-description building-text">' + building.information.description + '</li>',
    cost: {
      start: '<ul class="building-costs building-text">Costs:',
      wood: '<li class="building-text">Wood: ' + building.construction.wood + '</li>',
      stone: '<li class="building-text">Stone: ' + building.construction.stone + '</li>',
      iron: '<li class="building-text">Iron: ' + building.construction.iron + '</li>',
      steel: '<li class="building-text">Steel: ' + building.construction.steel + '</li>',
      labor: '<li class="building-text">Labor: ' + building.construction.labor + '</li>',
      end: '</ul>'
    },
    numberOwned: '<li class="building-text">Number Owned: ' + building.variableData.numberOwned + '</li>',
    workers: '<li class="building-text">' + building.variableData.currentWorkers + '/' + building.constantData.numberOfWorkers + '</li>',
    residents: '<li class="building-text"> Residential Capacity: ' + building.constantData.numberOfResidents + '</li>',
    endHtml: '</ul>'
  },
  buttons: {
    upgrade: '<button class="building-button upgrade" id="' + building.information.id + '">Upgrade Building</button>',
    build: '<button class="building-button build" id="' + building.information.id + '">Build</button>',
    hire: '<button class="building-button hire" id="' + building.information.id + '">Hire</button>',
    fire: '<button class="building-button fire" id="' + building.information.id + '">Fire</button>'
  },
  endHtml: '</li>'
}

function generateMenu(menu, building) {
  let html = buildingHtml.beginHtml + buildingHtml.thumbnail + buildingHtml.information.beginHtml + buildingHtml.information.description + buildingHtml.endHtml;
  if (menu === 'buildings' && building.constantData.numberOfResidents == true) {
    html += buildingHtml.information.numberOwned + buildingHtml.information.endHtml + buildingHtml.buttons.upgrade + buildingHtml.endHtml;
  } else if (menu === 'buildings' && building.constantData.numberOfWorkers == true) {
    html += buildingHtml.information.numberOwned + buildingHtml.information.endHtml + buildingHtml.buttons.upgrade + buildingHtml.information.workers + buidlingHtml.buttons.fire + buidlingHtml.buttons.hire + buildingHtml.endHtml;
  } else if (menu === 'construction' && element.constantData.numberOfResidents == true){
    html += buildingHtml.information.residents + buildingHtml.information.endHtml + buildingHtml.costs.start;
    if (building.construction.wood == true){
      html += buildingHtml.costs.wood;
    };
    if (building.construction.stone == true){
      html += buildingHtml.costs.stone;
    };
    if (building.construction.iron == true){
      html += buildingHtml.costs.iron;
    };
    if (building.construction.steel == true){
      html += buildingHtml.costs.steel
    };
    html += buildingHtml.costs.endHtml + buildingHtml.buttons.build + buildingHtml.endHtml;
  };
  $('#viewBuildingList').replaceWith(html);
};

$(document).on('click', '.upgrade', function(element){
  let buildingId = event.target.id;
  upgradeBuilding(buildingId);
});

function upgradeBuilding(id) {
  let upgradeId = null;
  let type = null;
  let subType = null;
  for (let i in buildings){
    type = buildings[i];
    for (let x in type){
      if (type[x].information.id === id){
        subType = type[x];
        upgradeId = subType.information.upgrade;
        qeueHandler('upgrade', subType, upgradeId);
        break;
      };
    };
  };
};

$(document).on('click', '.build', function(){
  let buildingId = event.target.id;
  let type = null;
  let subType = null;
  for (let i in buildings){
    type = buildings[i];
    for (let x in type){
      if (type[x].information.id === buildingId){
        subType = type[x];
        qeueHandler('build', subType);
        break;
      };
    };
  };
});

$(document).on('click', '.', function(){
  let buildingId = event.target.id;
  let type = null;
  let subType = null;
  for (let i in buildings){
    type = buildings[i];
    for (let x in type){
      if (type[x].information.id === buildingId){
        subType = type[x];
        break;
      };
    };
  };
});

$(document).on('click', '.', function(){
  let buildingId = event.target.id;
  let type = null;
  let subType = null;
  for (let i in buildings){
    type = buildings[i];
    for (let x in type){
      if (type[x].information.id === buildingId){
        subType = type[x];
        break;
      };
    };
  };
});

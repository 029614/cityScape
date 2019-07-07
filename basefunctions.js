function build (building){
  let canBuild = true;
  let newConstruction = null;
  let qeueFull = true;
  //check to make sure there are enough materials
  if (globalVariableData.resources.wood < building.construction.wood){
    message('You dont have enough wood! You need at least ' + building.construction.wood + '.');
    canBuild = false;
  };
  if (globalVariableData.resources.stone < building.construction.stone){
    message('You dont have enough stone! You need at least ' + building.construction.stone + '.');
    canBuild = false;
  };
  if (globalVariableData.resources.iron < building.construction.iron){
    message('You dont have enough iron! You need at least ' + building.construction.iron + '.');
    canBuild = false;
  };
  if (globalVariableData.resources.steel < building.construction.steel){
    message('You dont have enough steel! You need at least ' + building.construction.steel + '.');
    canBuild = false;
  };
  //If you have enough materials
  if (canBuild === true){
    //generate new object information for qeue
    newConstruction = {
      status: 'busy',
      mode: 'build',
      building: building.information.id,
      labor: building.construction.labor,
    };
    //find an empty qeue slot to put new object information into.
    for (let i in constructionQeue){
      if (constructionQeue[i].status === 'empty'){
        constructionQeue[i] = newConstruction;
        qeueFull = false;
        //subtract needed materials from stockpile
        globalVariableData.resources.wood -= building.construction.wood;
        globalVariableData.resources.stone -= building.construction.stone;
        globalVariableData.resources.iron -= building.construction.iron;
        globalVariableData.resources.steel -= building.construction.steel;
        break;
      };
    };
    //if no slots are available,
    if (qeueFull === true){
      message('The building qeue is currently full!');
    };
  };
};

function upgrade (building){
  let canBuild = true;
  let newConstruction = null;
  let qeueFull = true;
  //check to make sure there are enough materials
  if (globalVariableData.resources.wood < building.upgrade.wood){
    message('You dont have enough wood! You need at least ' + building.upgrade.wood + '.');
    canBuild = false;
  };
  if (globalVariableData.resources.stone < building.upgrade.stone){
    message('You dont have enough stone! You need at least ' + building.upgrade.stone + '.');
    canBuild = false;
  };
  if (globalVariableData.resources.iron < building.upgrade.iron){
    message('You dont have enough iron! You need at least ' + building.upgrade.iron + '.');
    canBuild = false;
  };
  if (globalVariableData.resources.steel < building.upgrade.steel){
    message('You dont have enough steel! You need at least ' + building.upgrade.steel + '.');
    canBuild = false;
  };
  //If you have enough materials
  if (canBuild === true){
    //generate new object information for qeue
    newConstruction = {
      status: 'busy',
      mode: 'upgrade',
      building: building.information.id,
      labor: building.upgrade.labor,
    };
    //find an empty qeue slot to put new object information into.
    for (let i in constructionQeue){
      if (constructionQeue[i].status === 'empty'){
        constructionQeue[i] = newConstruction;
        qeueFull = false;
        //subtract needed materials from stockpile
        globalVariableData.resources.wood -= building.upgrade.wood;
        globalVariableData.resources.stone -= building.upgrade.stone;
        globalVariableData.resources.iron -= building.upgrade.iron;
        globalVariableData.resources.steel -= building.upgrade.steel;
        break;
      };
    };
    //if no slots are available,
    if (qeueFull === true){
      message('The building qeue is currently full!');
    };
  };
};

//these functions run every turn in this order
function grain (){
  let grain = 0;
  for (let i in buildings.farms){
    if (buildings.farms[i].variableData.numberOwned > 0){
      grain += buildings.farms[i].outQuant * buildings.farms[i].numberOfWorkers;
    };
  };
  globalVariableData.resources.grain += grain;
};

function lumber (){
  let lumber = 0;
  for (let i in buildings.lumberMills){
    if (buildings.lumberMills[i].variableData.numberOwned > 0){
      lumber += buildings.lumberMills[i].outQuant * buildings.lumberMills[i].numberOfWorkers;
    };
  };
  globalVariableData.resources.wood += lumber;
};

function minerals (){
  let minerals = 0;
  for (let i in buildings.mines){
    if (buildings.mines[i].variableData.numberOwned > 0){
      minerals += buildings.mines[i].outQuant * buildings.mines[i].numberOfWorkers;
    };
  };
  globalVariableData.resources.stone += minerals;
  globalVariableData.resources.iron += Math.abs(minerals/2);
};

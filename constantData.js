//constant data objects
const buildings = {
  //all constant building data
  houses: {
    simpleHouse: {
      name: 'Simple House',
      description: 'Houses provide shelter for citizens. Your population cannot grow beyond available housing.',
      tier: 'simple',
      costModifier: 100,
      laborModifier: 100,
      capacityModifier: 100
    },
    complexHouse: {
      name: 'Complex House',
      description: 'Houses provide shelter for citizens. Your population cannot grow beyond available housing.',
      tier: 'complex',
      costModifier: 100,
      laborModifier: 100,
      capacityModifier: 100
    },
    advancedHouse: {
      name: 'Advanced House',
      description: 'Houses provide shelter for citizens. Your population cannot grow beyond available housing.',
      tier: 'advanced',
      costModifier: 100,
      laborModifier: 100,
      capacityModifier: 100
    }
  },
  productionBuildings: {
    farms: {
      simpleFarm: {
        name: 'Simple Farm',
        description: 'Farms produce grain.',
        tier: 'simple',
        costModifier: 100,
        laborModifier: 100,
        inputType: false,
        workerInputModifier: false,
        outputType: 'grain',
        workerOutputModifier: 100,
        numberOfWorkersModifier: 100
      },
      complexFarm: {
        name: 'Complex Farm',
        description: 'Farms produce grain.',
        tier: 'complex',
        costModifier: 100,
        laborModifier: 100,
        inputType: false,
        workerInputModifier: false,
        outputType: 'grain',
        workerOutputModifier: 100,
        numberOfWorkersModifier: 100
      },
      advancedFarm: {
        name: 'Advanced Farm',
        description: 'Farms produce grain.',
        tier: 'advanced',
        costModifier: 100,
        laborModifier: 100,
        inputType: false,
        workerInputModifier: false,
        outputType: 'grain',
        workerOutputModifier: 100,
        numberOfWorkersModifier: 100
      }
    },
    lumberMills: {
      simpleLumberMill: {
        name: 'Simple Lumber Mill',
        description: 'Lumber Mills produce lumber.',
        tier: 'simple',
        costModifier: 100,
        laborModifier: 100,
        inputType: false,
        workerInputModifier: false,
        outputType: 'lumber',
        workerOutputModifier: 100,
        numberOfWorkersModifier: 100
      },
      complexLumberMill: {
        name: 'Complex Lumber Mill',
        description: 'Lumber Mills produce lumber.',
        tier: 'complex',
        costModifier: 100,
        laborModifier: 100,
        inputType: false,
        workerInputModifier: false,
        outputType: 'lumber',
        workerOutputModifier: 100,
        numberOfWorkersModifier: 100
      },
      advancedLumberMill: {
        name: 'Advanced Lumber Mill',
        description: 'Lumber Mills produce lumber.',
        tier: 'advanced',
        costModifier: 100,
        laborModifier: 100,
        inputType: false,
        workerInputModifier: false,
        outputType: 'lumber',
        workerOutputModifier: 100,
        numberOfWorkersModifier: 100
      }
    },
    mines: {
      simpleMine: {
        name: 'Simple Mine',
        description: 'Mines produce stone and iron.',
        tier: 'simple',
        costModifier: 100,
        laborModifier: 100,
        inputType: false,
        workerInputModifier: false,
        outputType: ['stone', 'iron'],
        workerOutputModifier: 100,
        numberOfWorkersModifier: 100
      },
      complexMine: {
        name: 'Complex Mine',
        description: 'Mines produce stone and iron.',
        tier: 'complex',
        costModifier: 100,
        laborModifier: 100,
        inputType: false,
        workerInputModifier: false,
        outputType: ['stone', 'iron'],
        workerOutputModifier: 100,
        numberOfWorkersModifier: 100
      },
      advancedMine: {
        name: 'Advanced Mine',
        description: 'Mines produce stone and iron.',
        tier: 'advanced',
        costModifier: 100,
        laborModifier: 100,
        inputType: false,
        workerInputModifier: false,
        outputType: ['stone', 'iron'],
        workerOutputModifier: 100,
        numberOfWorkersModifier: 100
      }
    },
    smiths: {
      simpleSmith: {
        name: 'Simple Black Smith',
        description: 'Black Smiths produce steel from iron',
        tier: 'simple',
        costModifier: 100,
        laborModifier: 100,
        inputType: 'iron',
        workerInputModifier: 100,
        outputType: 'steel',
        workerOutputModifier: 100,
        numberOfWorkersModifier: 100
      },
      complexSmith: {
        name: 'Complex Black Smith',
        description: 'Black Smiths produce steel from iron',
        tier: 'complex',
        costModifier: 100,
        laborModifier: 100,
        inputType: 'iron',
        workerInputModifier: 100,
        outputType: 'steel',
        workerOutputModifier: 100,
        numberOfWorkersModifier: 100
      },
      advancedSmith: {
        name: 'Advanced Black Smith',
        description: 'Black Smiths produce steel from iron',
        tier: 'advanced',
        costModifier: 100,
        laborModifier: 100,
        inputType: 'iron',
        workerInputModifier: 100,
        outputType: 'steel',
        workerOutputModifier: 100,
        numberOfWorkersModifier: 100
      }
    },
    bakeries: {
      simpleBakery: {
        name: 'Simple Bakery',
        description: 'Bakeries produce bread from grain',
        tier: 'simple',
        costModifier: 100,
        laborModifier: 100,
        inputType: 'grain',
        workerInputModifier: 100,
        outputType: 'bread',
        workerOutputModifier: 100,
        numberOfWorkersModifier: 100
      },
      complexBakery: {
        name: 'Complex Bakery',
        description: 'Bakeries produce bread from grain',
        tier: 'complex',
        costModifier: 100,
        laborModifier: 100,
        inputType: 'grain',
        workerInputModifier: 100,
        outputType: 'bread',
        workerOutputModifier: 100,
        numberOfWorkersModifier: 100
      },
      advancedBakery: {
        name: 'Advanced Bakery',
        description: 'Bakeries produce bread from grain',
        tier: 'advanced',
        costModifier: 100,
        laborModifier: 100,
        inputType: 'grain',
        workerInputModifier: 100,
        outputType: 'bread',
        workerOutputModifier: 100,
        numberOfWorkersModifier: 100
      }
    }
  }
};

const tiers = {
  //object containing data for construction tiers and city upgrades
  construction: {
    simple: {
      costModifier: 1,
      laborModifier: 1,
      workerInputModifier: 3,
      workerOutputModifier: 1,
      numberOfWorkersModifier: 1,
      capacityModifier: 1
    },
    complex: {
      costModifier: 3,
      laborModifier: 3,
      workerInputModifier: 2,
      workerOutputModifier: 2,
      numberOfWorkersModifier: 3,
      capacityModifier: 3
    },
    advanced: {
      costModifier: 5,
      laborModifier: 5,
      workerInputModifier: 1,
      workerOutputModifier: 3,
      numberOfWorkersModifier: 5,
      capacityModifier: 5
    }
  },
  city:{
    settlement: {
      name: 'Settlement',
      cost: false,
      requiredPopulation: false,
      maxPopulation: 500,
      maxBuildings: 50,
      maxTier: 'basic'
    },
    village: {
      name: 'Village',
      cost: 500,
      requiredPopulation: 500,
      maxPopulation: 1500,
      maxBuildings: 150,
      maxTier: 'simple'
    },
    town: {
      name: 'town',
      cost: 1500,
      requiredPopulation: 1500,
      maxPopulation: 5000,
      maxBuildings: 500,
      maxTier: 'advanced'
    },
    city: {
      name: 'City',
      cost: 5000,
      requiredPopulation: 5000,
      maxPopulation: 20000,
      maxBuildings: 2000,
      maxTier: 'advanced'
    },
    capitalCity: {
      name: 'Capital City',
      cost: 20000,
      requiredPopulation: 20000,
      maxPopulation: 100000,
      maxBuildings: 10000,
      maxTier: 'advanced'
    },
    superCity: {
      name: 'Super City',
      cost: 100000,
      requiredPopulation: 100000,
      maxPopulation: 9999999,
      maxBuildings: 999999,
      maxTier: 'advanced'
    }
  }
};

const resources = { //contains constant data about resources
  grain: {
    name: 'grain',
    type: ['food', 'ingredient', 'resource'], //type of object, may be more then one.
    feeds: 1, //how many people one unit feeds.
    produces: 'bread', //what resource this ingredient makes.
    productionQuantity: 0.2 //how much of a resource this ingredient makes.
  },
  bread: {
    name: 'bread',
    type: 'food', //type of object, may be more then one.
    feeds: 10, //how many people one unit feeds.
    produces: false, //what resource this ingredient makes.
    productionQuantity: false //how much of a resource this ingredient makes.
  },
  lumber: {
    name: 'lumber',
    type: 'resource', //type of object, may be more then one.
    feeds: false, //how many people one unit feeds.
    produces: false, //what resource this ingredient makes.
    productionQuantity: false //how much of a resource this ingredient makes.
  },
  stone: {
    name: 'stone',
    type: 'resource', //type of object, may be more then one.
    feeds: false, //how many people one unit feeds.
    produces: false, //what resource this ingredient makes.
    productionQuantity: false //how much of a resource this ingredient makes.
  },
  iron: {
    name: 'iron',
    type: ['ingredient', 'resource'], //type of object, may be more then one.
    feeds: false, //how many people one unit feeds.
    produces: 'steel', //what resource this ingredient makes.
    productionQuantity: .25 //how much of a resource this ingredient makes.
  },
  steel: {
    name: 'steel',
    type: 'resource', //type of object, may be more then one.
    feeds: false, //how many people one unit feeds.
    produces: false, //what resource this ingredient makes.
    productionQuantity: false //how much of a resource this ingredient makes.
  }
};

const stats = {
  //I dont know what I'm doing with this yet. I just typed it up because I was typing up everything.
  population: 0,
  hunger: 0,
  health: 0,
  morale: 0
};

const worldEvents = {
  //constant object containing all world event data
};

const messages = {
  //constant object containing all event messages
};

//constant data objects
let buildings = {
  //all constant building data
  houses: {
    simpleHouse: {
      name: 'Simple House',
      type: 'house',
      description: 'Houses provide shelter for citizens. Your population cannot grow beyond available housing.',
      tier: 'simple',
      costModifier: 100,
      laborModifier: 100,
      capacityModifier: 5,
      numberOwned: 5,
      residents: 0,
      image: 'images/thumbnails/smallHouse.png'
    },
    complexHouse: {
      name: 'Complex House',
      type: 'house',
      description: 'Houses provide shelter for citizens. Your population cannot grow beyond available housing.',
      tier: 'complex',
      costModifier: 100,
      laborModifier: 100,
      capacityModifier: 25,
      numberOwned: 0,
      residents: 0,
      image: 'images/thumbnails/.png'
    },
    advancedHouse: {
      name: 'Advanced House',
      type: 'house',
      description: 'Houses provide shelter for citizens. Your population cannot grow beyond available housing.',
      tier: 'advanced',
      costModifier: 100,
      laborModifier: 100,
      capacityModifier: 100,
      numberOwned: 0,
      residents: 0,
      image: 'images/thumbnails/.png'
    }
  },
  farms: {
    simpleFarm: {
      name: 'Simple Farm',
      type: 'industry',
      description: 'Farms produce grain.',
      tier: 'simple',
      costModifier: 100,
      laborModifier: 100,
      inputType: false,
      workerInputModifier: false,
      outputType: 'grain',
      workerOutputModifier: 100,
      numberOfWorkersModifier: 100,
      numberOwned: 4,
      workerCapacity: 4,
      workers: 0,
      id: 'simpleFarm',
      image: 'images/thumbnails/smallFarm.png'
    },
    complexFarm: {
      name: 'Complex Farm',
      type: 'industry',
      description: 'Farms produce grain.',
      tier: 'complex',
      costModifier: 100,
      laborModifier: 100,
      inputType: false,
      workerInputModifier: false,
      outputType: 'grain',
      workerOutputModifier: 100,
      numberOfWorkersModifier: 100,
      numberOwned: 0,
      workerCapacity: 4,
      workers: 0,
      id: 'complexFarm',
      image: 'images/thumbnails/.png'
    },
    advancedFarm: {
      name: 'Advanced Farm',
      type: 'industry',
      description: 'Farms produce grain.',
      tier: 'advanced',
      costModifier: 100,
      laborModifier: 100,
      inputType: false,
      workerInputModifier: false,
      outputType: 'grain',
      workerOutputModifier: 100,
      numberOfWorkersModifier: 100,
      numberOwned: 0,
      workerCapacity: 4,
      workers: 0,
      id: 'advancedFarm',
      image: 'images/thumbnails/.png'
    }
  },
  lumberMills: {
    simpleLumberMill: {
      name: 'Simple Lumber Mill',
      type: 'industry',
      description: 'Lumber Mills produce lumber.',
      tier: 'simple',
      costModifier: 100,
      laborModifier: 100,
      inputType: false,
      workerInputModifier: false,
      outputType: 'lumber',
      workerOutputModifier: 100,
      numberOfWorkersModifier: 100,
      numberOwned: 1,
      workerCapacity: 4,
      workers: 0,
      id: 'simpleLumberMill',
      image: 'images/thumbnails/smallMill.png'
    },
    complexLumberMill: {
      name: 'Complex Lumber Mill',
      type: 'industry',
      description: 'Lumber Mills produce lumber.',
      tier: 'complex',
      costModifier: 100,
      laborModifier: 100,
      inputType: false,
      workerInputModifier: false,
      outputType: 'lumber',
      workerOutputModifier: 100,
      numberOfWorkersModifier: 100,
      numberOwned: 0,
      workerCapacity: 4,
      workers: 0,
      id: 'complexLumberMill',
      image: 'images/thumbnails/.png'
    },
    advancedLumberMill: {
      name: 'Advanced Lumber Mill',
      type: 'industry',
      description: 'Lumber Mills produce lumber.',
      tier: 'advanced',
      costModifier: 100,
      laborModifier: 100,
      inputType: false,
      workerInputModifier: false,
      outputType: 'lumber',
      workerOutputModifier: 100,
      numberOfWorkersModifier: 100,
      numberOwned: 0,
      workerCapacity: 4,
      workers: 0,
      id: 'advancedLumberMill',
      image: 'images/thumbnails/.png'
    }
  },
  mines: {
    simpleMine: {
      name: 'Simple Mine',
      type: 'industry',
      description: 'Mines produce stone and iron.',
      tier: 'simple',
      costModifier: 100,
      laborModifier: 100,
      inputType: false,
      workerInputModifier: false,
      outputType: ['stone', 'iron'],
      workerOutputModifier: 100,
      numberOfWorkersModifier: 100,
      numberOwned: 1,
      workerCapacity: 4,
      workers: 0,
      id: 'simpleMine',
      image: 'images/thumbnails/smallMine.png'
    },
    complexMine: {
      name: 'Complex Mine',
      type: 'industry',
      description: 'Mines produce stone and iron.',
      tier: 'complex',
      costModifier: 100,
      laborModifier: 100,
      inputType: false,
      workerInputModifier: false,
      outputType: ['stone', 'iron'],
      workerOutputModifier: 100,
      numberOfWorkersModifier: 100,
      numberOwned: 0,
      workerCapacity: 4,
      workers: 0,
      id: 'complexMine',
      image: 'images/thumbnails/.png'
    },
    advancedMine: {
      name: 'Advanced Mine',
      type: 'industry',
      description: 'Mines produce stone and iron.',
      tier: 'advanced',
      costModifier: 100,
      laborModifier: 100,
      inputType: false,
      workerInputModifier: false,
      outputType: ['stone', 'iron'],
      workerOutputModifier: 100,
      numberOfWorkersModifier: 100,
      numberOwned: 0,
      workerCapacity: 4,
      workers: 0,
      id: 'advancedMine',
      image: 'images/thumbnails/.png'
    }
  },
  smiths: {
    simpleSmith: {
      name: 'Simple Black Smith',
      type: 'industry',
      description: 'Black Smiths produce steel from iron',
      tier: 'simple',
      costModifier: 100,
      laborModifier: 100,
      inputType: 'iron',
      workerInputModifier: 100,
      outputType: 'steel',
      workerOutputModifier: 100,
      numberOfWorkersModifier: 100,
      numberOwned: 0,
      workerCapacity: 4,
      workers: 0,
      id: 'simpleSmith',
      image: 'images/thumbnails/.png'
    },
    complexSmith: {
      name: 'Complex Black Smith',
      type: 'industry',
      description: 'Black Smiths produce steel from iron',
      tier: 'complex',
      costModifier: 100,
      laborModifier: 100,
      inputType: 'iron',
      workerInputModifier: 100,
      outputType: 'steel',
      workerOutputModifier: 100,
      numberOfWorkersModifier: 100,
      numberOwned: 0,
      workerCapacity: 4,
      workers: 0,
      id: 'complexSmith',
      image: 'images/thumbnails/.png'
    },
    advancedSmith: {
      name: 'Advanced Black Smith',
      type: 'industry',
      description: 'Black Smiths produce steel from iron',
      tier: 'advanced',
      costModifier: 100,
      laborModifier: 100,
      inputType: 'iron',
      workerInputModifier: 100,
      outputType: 'steel',
      workerOutputModifier: 100,
      numberOfWorkersModifier: 100,
      numberOwned: 0,
      workerCapacity: 4,
      workers: 0,
      id: 'advancedSmith',
      image: 'images/thumbnails/.png'
    }
  },
  bakeries: {
    simpleBakery: {
      name: 'Simple Bakery',
      type: 'industry',
      description: 'Bakeries produce bread from grain',
      tier: 'simple',
      costModifier: 100,
      laborModifier: 100,
      inputType: 'grain',
      workerInputModifier: 100,
      outputType: 'bread',
      workerOutputModifier: 100,
      numberOfWorkersModifier: 100,
      numberOwned: 0,
      workerCapacity: 4,
      workers: 0,
      id: 'simpleBakery',
      image: 'images/thumbnails/.png'
    },
    complexBakery: {
      name: 'Complex Bakery',
      type: 'industry',
      description: 'Bakeries produce bread from grain',
      tier: 'complex',
      costModifier: 100,
      laborModifier: 100,
      inputType: 'grain',
      workerInputModifier: 100,
      outputType: 'bread',
      workerOutputModifier: 100,
      numberOfWorkersModifier: 100,
      numberOwned: 0,
      workerCapacity: 4,
      workers: 0,
      id: 'complexBakery',
      image: 'images/thumbnails/.png'
    },
    advancedBakery: {
      name: 'Advanced Bakery',
      type: 'industry',
      description: 'Bakeries produce bread from grain',
      tier: 'advanced',
      costModifier: 100,
      laborModifier: 100,
      inputType: 'grain',
      workerInputModifier: 100,
      outputType: 'bread',
      workerOutputModifier: 100,
      numberOfWorkersModifier: 100,
      numberOwned: 0,
      workerCapacity: 4,
      workers: 0,
      id: 'advancedBakery',
      image: 'images/thumbnails/.png'
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
    productionQuantity: 0.2, //how much of a resource this ingredient makes.
    imageSource: 'images/icons/grainLogo.png'
  },
  bread: {
    name: 'bread',
    type: 'food', //type of object, may be more then one.
    feeds: 10, //how many people one unit feeds.
    produces: false, //what resource this ingredient makes.
    productionQuantity: false, //how much of a resource this ingredient makes.
    imageSource: 'images/icons/breadLogo.png'
  },
  lumber: {
    name: 'lumber',
    type: 'resource', //type of object, may be more then one.
    feeds: false, //how many people one unit feeds.
    produces: false, //what resource this ingredient makes.
    productionQuantity: false, //how much of a resource this ingredient makes.
    imageSource: 'images/icons/lumberLogo.png'
  },
  stone: {
    name: 'stone',
    type: 'resource', //type of object, may be more then one.
    feeds: false, //how many people one unit feeds.
    produces: false, //what resource this ingredient makes.
    productionQuantity: false, //how much of a resource this ingredient makes.
    imageSource: 'images/icons/stoneLogo.png'
  },
  iron: {
    name: 'iron',
    type: ['ingredient', 'resource'], //type of object, may be more then one.
    feeds: false, //how many people one unit feeds.
    produces: 'steel', //what resource this ingredient makes.
    productionQuantity: .25, //how much of a resource this ingredient makes.
    imageSource: 'images/icons/ironLogo.png'
  },
  steel: {
    name: 'steel',
    type: 'resource', //type of object, may be more then one.
    feeds: false, //how many people one unit feeds.
    produces: false, //what resource this ingredient makes.
    productionQuantity: false, //how much of a resource this ingredient makes.
    imageSource: 'images/icons/steelLogo.png'
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

//gameState objects
let buildingStates = {
  houses: {
    simple: {
      name: 'simpleHouse',
      tier: 0,
      numberOwned: 0,
      residents: 0
    },
    complex: {
      tier: 0,
      numberOwned: 0,
      residents: 0
    },
    advanced: {
      tier: 0,
      numberOwned: 0,
      residents: 0
    },
  },
  farms: {
    simple: {
      tier: 0,
      numberOwned: 0,
      maxWokers: 0
    },
    complex: {
      tier: 0,
      numberOwned: 0,
      maxWokers: 0
    },
    advanced: {
      tier: 0,
      numberOwned: 0,
      maxWokers: 0
    }
  },
  lumberMills: {
    simple: {
      tier: 0,
      numberOwned: 0,
      maxWokers: 0
    },
    complex: {
      tier: 0,
      numberOwned: 0,
      maxWokers: 0
    },
    advanced: {
      tier: 0,
      numberOwned: 0,
      maxWokers: 0
    }
  },
  mines: {
    simple: {
      tier: 0,
      numberOwned: 0,
      workers: 0
    },
    complex: {
      tier: 0,
      numberOwned: 0,
      workers: 0
    },
    advanced: {
      tier: 0,
      numberOwned: 0,
      workers: 0
    }
  },
  smiths: {
    simple: {
      tier: 0,
      numberOwned: 0,
      wokers: 0
    },
    complex: {
      tier: 0,
      numberOwned: 0,
      wokers: 0,
      workers: 0
    },
    advanced: {
      tier: 0,
      numberOwned: 0,
      wokers: 0,
      workers: 0
    }
  },
  bakeries: {
    simple: {
      tier: 0,
      numberOwned: 0,
      wokers: 0
    },
    complex: {
      tier: 0,
      numberOwned: 0,
      wokers: 0,
    },
    advanced: {
      tier: 0,
      numberOwned: 0,
      workers: 0
    }
  }
};

let workerList = {
  unemployed: {
    count: 25,
    maxCount: 0,
  },
  laborers: {
    count: 0,
    maxCount: 0,
  },
  farmers: {
    count: 0,
    maxCount: 16,
  },
  carpenters: {
    count: 0,
    maxCount: 4,
  },
  miners: {
    count: 0,
    maxCount: 4,
  },
  smiths: {
    count: 0,
    maxCount: 0,
  },
  bakers: {
    count: 0,
    maxCount: 0,
  }
};

let resourceStates = {
  grain: 0,
  bread: 0,
  lumber: 0,
  stone: 0,
  iron: 0,
  steel: 0
};

let statStates = {
  turn: 1,
  population: 0,
  hunger: 0,
  health: 0,
  morale: 0,
  simpleTier: true,
  complexTier: false,
  advancedTier: false
};

let researchStates = {
  simpleTier: true,
  complexTier: false,
  advancedTier: false
}

let cityState = tiers.city.settlement;

let player = {
  cityName: null,
  name: null,
  difficulty: null,
  tier: 'simple'
}

let canBuild = [];

let records = {
  population: 0,
  grain: 0,
  wood: 0,
  stone: 0,
  iron: 0,
  steel: 0,
  bread: 0,
  deaths: 0,
  fires: 0
};

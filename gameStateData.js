//gameState objects
let buildingStates = {
  houses: {
    house: {
      tier: 0,
      numberOwned: 0,
      residents: 0
    }
  },
  farms: {
    farm: {
      tier: 0,
      numberOwned: 0,
      wokers: 0
    }
  },
  lumberMills: {
    lumberMill: {
      tier: 0,
      numberOwned: 0,
      wokers: 0
    }
  },
  mines: {
    mine: {
      tier: 0,
      numberOwned: 0,
      wokers: 0
    }
  },
  smiths: {
    smith: {
      tier: 0,
      numberOwned: 0,
      wokers: 0
    }
  },
  bakeries: {
    bakery: {
      tier: 0,
      numberOwned: 0,
      wokers: 0
    }
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
  cityName: cityState.name + $('#nameCity').value(),
  name: 'Mayor' + $('#nameSelf').value(),
  difficulty: 'Normal',
}

function displayStats (){
  $("#stats").append('<p>Population: ' + calculatePopulation() + '</p>')
  $("#stats").append('<p>Number of Buildings: ' + calculateNumberOfBuildings() + '</p>')
  $("#stats").append('<p>Morale: ' + calculateMorale() + '</p>')
  $("#stats").append('<p>Hunger: ' + calculateHunger() + '</p>')
  $("#stats").append('<p>Health: ' + calculateHealth() + '</p>')
  $("#stats").append('<p>Population: ' + totalPopulation + '</p>')
  $("#stats").append('<p>Population: ' + totalPopulation + '</p>')
  $("#stats").append('<p>Population: ' + totalPopulation + '</p>')
  $("#stats").append('<p>Population: ' + totalPopulation + '</p>')
  $("#stats").append('<p>Population: ' + totalPopulation + '</p>')
  $("#stats").append('<p>Population: ' + totalPopulation + '</p>')
};
buildings.forEach((element) => {
  console.log(element.numberOwned);
});

// Destructuring assignment
var voxel = {x: 3.6, y: 7.4, z: 6.54};
var { x: a, y: b, z: c } = voxel;

console.log(a); // 3.6

// Average temperature calculation
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};
function getTempOfTmrw(avgTemperatures) {
  "use strict";
  const { tomorrow: tempOfTomorrow } = avgTemperatures;
  return tempOfTomorrow;
}
console.log(getTempOfTmrw(AVG_TEMPERATURES)); // 79

// Nested destructuring
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};
function getMaxOfTmrw(forecast) {
  "use strict";
  const { tomorrow: { max: maxOfTomorrow } } = forecast;
  return maxOfTomorrow;
}
console.log(`The maximum temperature tomorrow is ${getMaxOfTmrw(LOCAL_FORECAST)} degrees.`); // 84.6
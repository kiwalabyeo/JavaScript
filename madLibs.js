// madLibs game 
let story = "Today I went to the {place}. I saw a {adjective} {noun} jumping up and down in excitement. It was a {adjective2} day!";

function generateMadLibs(place, adjective, noun, adjective2) {
  let madLib = story.replace("{place}", place)
                    .replace("{adjective}", adjective)
                    .replace("{noun}", noun)
                    .replace("{adjective2}", adjective2);
  return madLib;
}
console.log(generateMadLibs("park", "happy", "dog", "sunny"));
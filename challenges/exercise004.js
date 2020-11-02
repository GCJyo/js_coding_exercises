function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

const smallNums = nums.filter(function(item) {
  if (item < 1) {return true;} else {return false;}
}); return smallNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

const namesBWith = names.filter(function(item) {
  if (item.charAt(0) === char) {return true;} else {return false;}
}); return namesBWith;

}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
const theseVerbs = words.filter(function(item) {
  if(item.slice(0,3) == "to ") {return true;} else {return false;}
}); return theseVerbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const onlyInts = nums.filter(function(item) {
    if(Number.isInteger(item)) {return true;} else {return false;}
  }); return onlyInts;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  const uCities = users.map(function(item) {
    return item.data.city.displayName;
  }); return uCities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  const gtsqrttd = nums.map(function(item) {
    return Math.round((Math.sqrt(item)*100))/100;
  }); return gtsqrttd;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  const wordsMatch = sentences.filter(function(item) {
    if (item.toLowerCase().includes(str.toLowerCase())) {return true;} else {return false;}
  }); return wordsMatch;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  const largestSides = triangles.map(function(item) {
    return Math.max(...item);
  }); return largestSides;
  }

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};

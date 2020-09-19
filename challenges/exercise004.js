function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
const lessnums = [];
for (let i in nums) {
  if (nums[i] < 1) {
    let iteam = nums[i];
    lessnums.push(iteam);
  };
}; return lessnums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  const namesBWith = [];
  for (let i in names) {
    if (names[i].charAt(0) === char) {
      let iteam = names[i];
      namesBWith.push(iteam);
    };
  }; return namesBWith;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  const theseVerbs = [];
  for (let i in words) {
    if (words[i].slice(0,3) == "to ") {
         let iteam = words[i];
         theseVerbs.push(iteam);
    };
  }; return theseVerbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const onlyInts = [];
  for (let i in nums) {
    let iteam = nums[i];
    if (Number.isInteger(iteam)) {
      onlyInts.push(iteam);
    };
  }; return onlyInts;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  const uCities = [];
  for (let i in users) {
     let iteam = users[i].data.city.displayName;
     uCities.push(iteam);
  }; return uCities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const gtsqrttd = [];
  for (let i in nums) {
    let iteam  = Math.round((Math.sqrt(nums[i])*100))/100;
    gtsqrttd.push(iteam);
  }; return gtsqrttd;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  const lcsentences = [];
  const wordsMatch = [];
  let lcstr = str.toLowerCase();
    // Your code here
  for (let i in sentences) {
    lcsentences.push(sentences[i].toLowerCase());
    if (lcsentences[i].includes(str)) {
      let iteam = sentences[i];
      wordsMatch.push(iteam);
    };
  }; return wordsMatch;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  const largestNumber = [];
  for (let i in triangles) {
    const itriangle = triangles[i];
    let iteam = Math.max(...itriangle);
    largestNumber.push(iteam);
    //console.log(largestNumber);
  }; return largestNumber;
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

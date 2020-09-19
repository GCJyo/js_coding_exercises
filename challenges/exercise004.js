function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

const smallNums = nums.filter(function(item) {
  if (item < 1) {return true;} else {return false;}
}); return smallNums;

  /*const lessnums = [];
  nums.forEach(function(item) {
    if (item < 1) {lessnums.push(item)};
  }); return lessnums;
  /* Your code here
const lessnums = [];
for (let i in nums) {
  if (nums[i] < 1) {
    let iteam = nums[i];
    lessnums.push(iteam);
  };
}; return lessnums;*/
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

const namesBWith = names.filter(function(item) {
  if (item.charAt(0) === char) {return true;} else {return false;}
}); return namesBWith;

  /*const namesBWith = [];
  names.forEach(function(item) {
    if (item.charAt(0) === char) {namesBWith.push(item)};
  }); return namesBWith;
  // Your code here
  /*const namesBWith = [];
  for (let i in names) {
    if (names[i].charAt(0) === char) {
      let iteam = names[i];
      namesBWith.push(iteam);
    };
  }; return namesBWith;*/
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here

const theseVerbs = words.filter(function(item) {
  if(item.slice(0,3) == "to ") {return true;} else {return false;}
}); return theseVerbs;
  /*const theseVerbs = [];
  words.forEach(function(item) {
    if(item.slice(0,3) == "to ") {theseVerbs.push(item)};
  }); return theseVerbs;
  /*const theseVerbs = [];
  for (let i in words) {
    if (words[i].slice(0,3) == "to ") {
         let iteam = words[i];
         theseVerbs.push(iteam);
    };
  }; return theseVerbs;*/
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const onlyInts = nums.filter(function(item) {
    if(Number.isInteger(item)) {return true;} else {return false;}
  }); return onlyInts;
  /*const onlyInts = [];
  nums.forEach(function(item) {
    if (Number.isInteger(item)) { onlyInts.push(item)}
  }); return onlyInts;
  /*const onlyInts = [];
  for (let i in nums) {
    let iteam = nums[i];
    if (Number.isInteger(iteam)) {
      onlyInts.push(iteam);
    };
  }; return onlyInts;*/
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  const uCities = users.map(function(item) {
    return item.data.city.displayName;
  }); return uCities;
  /*const uCities = [];
  users.forEach(function(item) {
    let uc = item.data.city.displayName;
    uCities.push(uc);
  }); return uCities;
  /*const uCities = [];
  for (let i in users) {
     let iteam = users[i].data.city.displayName;
     uCities.push(iteam);
  }; return uCities;*/
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const gtsqrttd = nums.map(function(item) {
    return Math.round((Math.sqrt(item)*100))/100;
  }); return gtsqrttd;
  /*const gtsqrttd = [];
  nums.forEach(function(item) {
    gtsqrttd.push(Math.round((Math.sqrt(item)*100))/100);
  }); return gtsqrttd;
  /*const gtsqrttd = [];
  for (let i in nums) {
    let iteam  = Math.round((Math.sqrt(nums[i])*100))/100;
    gtsqrttd.push(iteam);
  }; return gtsqrttd;*/
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  const wordsMatch = sentences.filter(function(item) {
    if (item.toLowerCase().includes(str.toLowerCase())) {return true;} else {return false;}
  }); return wordsMatch;
  /*const wordsMatch = [];
  sentences.forEach(function(item) {
    if (item.toLowerCase().includes(str.toLowerCase())) {wordsMatch.push(item);};
  }); return wordsMatch;
    // Your code here
    /*const lcsentences = [];
    const  wordsMatch = [];
   for (let i in sentences) {
    lcsentences.push(sentences[i].toLowerCase());
    if (lcsentences[i].includes(str)) {
      let iteam = sentences[i];
      wordsMatch.push(iteam);
    };
  }; return wordsMatch;*/
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  const largestSides = triangles.map(function(item) {
    return Math.max(...item);
  }); return largestSides;
  /*const largestNumber = [];
  triangles.forEach(function(item) {
    largestNumber.push(Math.max(...item))
  }); return(largestNumber);
  /*const largestNumber = [];
  for (let i in triangles) {
    const itriangle = triangles[i];
    let iteam = Math.max(...itriangle);
    largestNumber.push(iteam);
    //console.log(largestNumber);
  }; return largestNumber;*/
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

function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.substring(0,1).toUpperCase() + word.substring(1, word.length);
  // Add your code here!
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.substring(0,1).toUpperCase()+"."+lastName.substring(0,1).toUpperCase();
  // Add your code here!
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return originalPrice+(originalPrice*vatRate)/100;
  console.log(originalPrice+(originalPrice*vatRate)/100);
  // Add your code here!
}
function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return getSalePrice = originalPrice - (originalPrice*reduction)/100 ;
  // Add your code here!
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  return str.substr(Math.ceil(str.length / 2 - 1), str.length % 2 === 0 ? 2 : 1);
  //console.log(str.substr(Math.ceil(str.length / 2 - 1), str.length % 2 === 0 ? 2 : 1));
  // Add your code here!
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
  //console.log(word.split("").reverse().join(""))
  // Add your code here!
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  revwrds = []
  for(var i= 0; i<words.length; i++)
  {x= words[i].split("").reverse().join("");
    revwrds.push(x);}
  //console.log(revwrds);
  return revwrds;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let count = 0;
  for (let i=0; i<users.length; i++) {
    if (users[i].type === "Linux")
       count++;}
   return count;
    //console.log(count);
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  var total = 0;
  for (var i = 0; i < scores.length; i++) {
    total += scores[i];
    }
    //var mn = (total / (scores.length));
    // var result = (mn - Math.floor(mn)) !== 0;
    // if (result)
    // {return Number(mn.toFixed(2));}
    // else {return mn;}
  if ((Number.isInteger(total/scores.length)) == false) {
    result = Number(parseFloat(total/scores.length).toFixed(2));}
  else {
    result = (total/scores.length);}
    return result;
  }

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}
module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};

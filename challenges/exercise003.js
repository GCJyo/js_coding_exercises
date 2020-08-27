function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  var sqrs = [ ];
  for(let i in nums) {
  sqrs.push(Math.pow(nums[i], 2));} return sqrs;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  var result="";
  words.forEach(myFunction);
  function myFunction(i, indx) {
          var add = i.toLowerCase();
    result += (indx === 0 ? add : add[0].toUpperCase() + add.slice(1));
      };
      return result;
  }

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let count, tc = 0;
  for (let i = 0; i<=people.length; i++) {
    //console.log(people[i]);
    for (let j = 0; j<=people[i].subjects.length; j++){
        //console.log((people.[i].subjects[j]) === "undefined");
        //console.log(people.[i].subjects[j]);
        if (typeof(people.[i].subjects[j]) !== "undefined") {
          //console.log((people.[i].subjects[j]));}
          count++;}
        } //return count;
      } tc = tc + count;
      console.log(count);
    }

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
 }

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};

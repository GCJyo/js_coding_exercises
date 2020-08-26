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
  //-------------------------/does not work on 2+words
  // var ccWrd, result = " ";
  // for ( let i in words) {
  //   ccWrd = words.join("_");
  //   console.log(ccWrd);
  //   result = (ccWrd.replace(/_([a-z])/,function(m)
  //             {return m.toUpperCase();})).replace(/_/g,'').trim('');
  //   } return result;
  //}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
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

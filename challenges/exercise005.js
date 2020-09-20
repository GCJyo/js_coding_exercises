const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  let ind = nums.findIndex(num => num === n)
  if (ind < 0 || ind == (nums.length -1)) {return null} else {return nums[ind + 1]};
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  var a = 0;
  var b = 0;
  const numbers = str.split("");
  numbers.forEach(number => (number == 0) ? a++ : b++)
  return {0:a, 1:b};
  //console.log(a);
  //console.log(b);
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  return parseInt(n.toString().split("").reverse().join(""));
  };

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  let aSum = 0;
  for (let i in arrs){
    let s = 0;
    arrs[i].forEach(function(item) {
       s += item;});
       //console.log(s);
       aSum += s;
     }; return aSum;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
   if (arr.length == 0) {return []}
   else {
   ([arr[0], arr[arr.length - 1]] = [arr[arr.length-1], arr[0]]);
   return arr;
   }
  };

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!

};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  const wordfrq = {};
  let words = str.toLowerCase().replace(/[^\w\s]/gi, '').split(" ");
  words.forEach(word => (wordfrq[word] === undefined) ? wordfrq[word] = 1 : wordfrq[word]++);
  return wordfrq;
  };

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};


const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if(!Array.isArray(arr)) throw new Error("an Array is required");
  let total = 0;
  arr.forEach(n=> {
    if (n%5 === 0 || n%3 === 0) {
    total += n;
    }
  });
  return total;
};


const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (typeof(str) !== "string") throw new Error("str must be a String");
  if (str.match(/(^[CGTA]*$)/)) {return true} else {return false};
};

const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (typeof(str) !== "string") throw new Error("must be a String");
  if (str.match(/[^GCTA]/)) throw new Error("must have only CGTA");
  return str.split("").map(char => {
    if (char == "C") { return "G" }
    if (char == "G") { return "C" }
    if (char == "T") { return "A" }
    if (char == "A") { return "T" }
  }).join("")
};

  const isItPrime = n => {
    if (n === undefined) throw new Error("Number required");
    if (typeof(n) !== "number") throw new Error("must be a Number");
    let p = true
    if(n < 3) { p = false }
    for (let  i = 2; i < n; i++) {
      if(n % i == 0) { p = false }
    }
    return p
};

const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  let r = []
  let c = []
  for (let i = 0; i < n; i++) {
    r.push(fill)
  }
  for (let x = 0; x < n; x++) {
    c.push(r)
  }
  return c
};

const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  let covered = false;
  let count =0;
  staff.forEach(elt=>{
  if( elt.rota.indexOf(day)>-1) count++;
  })
  if (count >=3) covered=true;
  return covered;
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};

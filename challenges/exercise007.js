
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  let s = 0
  n.toString().split("").forEach(i => s += parseInt(i))
  return s
};

const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  if(step === undefined) step =1;

  const arrCr = [];
  for (let i = start; i<=end; i+=step) {
    arrCr.push(i);
  }
  return arrCr;
  };
  const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  let userScrTime=[]
  users.forEach(element => {
    element.screenTime.forEach (arrele=>{
      
      if(arrele.date==date){
        console.log(arrele.usage);
          if(Object.values(arrele.usage).reduce((a, b) => a+b, 0)>=100){     
            userScrTime.push(element.username);
          }
      }
    })
  });
  return userScrTime;
};
 const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  hexstr =hexStr.replace("#","");
    hexstr = hexstr.trim();
    let tab = hexstr.match(/.{1,2}/g);
    let rgb = [parseInt(tab[0],16),parseInt(tab[1],16),parseInt(tab[2],16)];
    return rgb;
};
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");
  if (!Array.isArray(board)) throw new Error("board must be an Array");
  if (board.length !== 3 || board[0].length !== 3 || board[1].length !== 3 || board[2].length !== 3 ) throw new Error("board must contain a 3x3 array");

  let winner = null

  for (let row = 0; row <= 2; row++) { if(board[row][0] == board[row][1] && board[row][0] == board[row][2]) { winner = board[row][0] }}
  for (let col = 0; col <= 2; col++) { if(board[0][col] == board[1][col] && board[0][col] == board[2][col]) { winner = board[0][col] }}

  if(board[0][0] == board[1][1] && board[0][0] == board[2][2]) { winner = board[0][0] }
  if(board[2][0] == board[1][1] && board[2][0] == board[0][2]) { winner = board[2][0] }

  return winner

};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};

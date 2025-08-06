/* Setup */
let opt1 = document.getElementById("opt1");
let opt2 = document.getElementById("opt2");
let start = document.getElementById("start");
let score = document.getElementById("score");

start.addEventListener("click", appear);
opt1.addEventListener("click", function(event) {
  check(opt1);
});
opt2.addEventListener("click", function(event) {
  check(opt2);
});
/* Passwords */
const strong =
["i2oNRIE$to1G7m","7Vu8teD@IX9iO1u","TiN2ti3!oN4v8or","uE0R7n1%IAng1r","r731aktIrF!01ri","zE$8ry6Cha8Mo","Cr4S#R69I^d1","A0L%vZ9elE9t","Art#2hU@4sp","3a#y4We6lIn$e","Nt#3OA%bl7eN","^Ho%mPer6$bLz","D#5Gn%Dp4aiT","P#n93bs%iAI2st","Rt$0a7tuF4y","PT@ia30a9AG#n60d","n5GiC#L59aTi%oM!","i@A1vka5bU%ib!C","IaN7t@in%ARDp8","@pl#Ys*LNa9D2"];
const weak =
["passWord55", "2903guest", "654321", "pass@231", "a1b2c3", "super3000", "Aa82357", "lady77bug!", "Qwert%", "pAssw0rd", "Bonjour)", "roBot209", "zxcVbn", "c0mp.uter", "asD360fgh","1qaz2wsx", "102938Hi!", "chick3n/","LetMeIn_2","!cheese76"];

/* Functions */
// making the options appear & removing the play button
function appear() {
  opt1.style.display = "block";
  opt2.style.display = "block";
  start.style.display = "none";
  refresh();
}
// refreshing the options
function refresh() {
  opt1.disabled = false;
  opt2.disabled = false;
  document.getElementById("opt1").style.backgroundColor = "rgba(255, 255, 255, 0.2)";
  document.getElementById("opt2").style.backgroundColor = "rgba(255, 255, 255, 0.2)";
  
  var indexStrong = Math.floor(Math.random()*(20));
  var indexWeak = Math.floor(Math.random()*(20));
  var correctAnswer = Math.floor(Math.random()*(2));

  if (correctAnswer == 0) {
    opt1.innerHTML = strong[indexStrong];
    opt2.innerHTML = weak[indexWeak];
  } else {
    opt1.innerHTML = weak[indexWeak];
    opt2.innerHTML = strong[indexStrong]; 
    }
}
// checking for accuracy & updating the score
function check(answer) {
  for (let i = 0; i < 20; i++) {
    if (answer.innerHTML == strong[i]) {
      let count = parseInt(localStorage.count);
      let increment = parseInt(localStorage.increment);
      count += increment;
      localStorage.count = count;
      score.innerHTML = count;

      if (answer == opt1){
        document.getElementById("opt1").style.backgroundColor = "rgba(8,160,98,0.4)";
      } else {
        document.getElementById("opt2").style.backgroundColor = "rgba(8,160,98,0.4)";
      }
      
      opt1.disabled = true;
      opt2.disabled = true;
      const delay = setTimeout(refresh, 600);
      return;
    } 
  }
  
  if (answer == opt1){
    document.getElementById("opt1").style.backgroundColor = "rgba(220,101,104,0.4)";
  } else {
    document.getElementById("opt2").style.backgroundColor = "rgba(220,101,104,0.4)";
  }
  opt1.disabled = true;
  opt2.disabled = true;
  const delay = setTimeout(refresh, 600);
}
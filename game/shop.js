const steelRod = 10; 
const goldRod = 200;
const rubyRod = 3000;
let hasSteel = false; 
let hasGold = false;
let hasRuby = false;
let callSteel = document.getElementById("steel");
let callGold = document.getElementById("gold");
let callRuby = document.getElementById("ruby");
callSteel.addEventListener("click", buySteel);
callGold.addEventListener("click", buyGold);
callRuby.addEventListener("click", buyRuby);

localStorage.count = 0;
localStorage.increment = 1;

function buySteel(){
  let fishCount = parseInt(localStorage.count);
  if (hasSteel == false) {
    if(fishCount>=10){
      fishCount -= steelRod;
      localStorage.count = fishCount;
      document.getElementById("score").innerHTML = fishCount;
      hasSteel=true;
      document.getElementById("currentRod").src = '/images/steel.png';
      increment=10;
      localStorage.increment = 10;
    } else {
      alert("You do not have enough fish");
    }
  } else {
    alert("You have already bought this");
  }      
} 
function buyGold(){
  var fishCount = parseInt(localStorage.count);
  if (hasGold==false){
    if(fishCount>=200){
      fishCount-=goldRod
      localStorage.count = fishCount;
      document.getElementById("score").innerHTML = fishCount;
      hasSteel=true;
      hasGold=true;
      document.getElementById("currentRod").src = '/images/gold.png';
      localStorage.increment = 100;
    } else{
      alert("You do not have enough fish");
    }
  } else{
    alert("You have already bought this");
  }
}
function buyRuby(){
  var fishCount = parseInt(localStorage.count);
  if(hasRuby==false){
    if(fishCount>=3000){
      fishCount-=rubyRod
      localStorage.count = fishCount;
      document.getElementById("score").innerHTML = fishCount;
      hasSteel=true;
      hasGold=true;
      hasRuby=true;
      document.getElementById("currentRod").src = '/images/ruby.png';
      localStorage.increment = 1000;
    }
    else{
      alert("You do not have enough fish");
    }
  }
  else{
    alert("You already have this rod");
  }
}
'use strict';
// console.log(document.querySelector(".message").textContent) 
// console.log(document.querySelector(".message")) 

// document.querySelector(".message").textContent = "marijus lopas"
// document.querySelector(".number").textContent=13;
// document.querySelector(".score").textContent = 25;
// document.querySelector(".guess").value = 23;
const randNumber  = function(){
  return  Math.trunc(Math.random()*20 +1)
};
randNumber() ;
// document.querySelector(".number").textContent = number;
const message = document.querySelector(".message")
let score = 20;

document.querySelector(".check").addEventListener("click", function(){
  let guess = Number(document.querySelector(".guess").value);
  if(!guess){
    document.querySelector(".message").textContent = "no number"
  }else if(guess!== number) {
    if(guess >= number){
      message.textContent="number too high"
      score--;
      document.querySelector(".score")
      .textContent=score;
    }else{
      message.textContent = "number too low";
      score--
      document.querySelector(".score")
      .textContent=score;
    }
  }else {
    message.textContent = "correct guess !"
  }
})

document.querySelector(".again").addEventListener("click", function(){
  number();
  score = 20
  document.querySelector(".score") .textContent = score;
  guess = Number(document.querySelector(".guess").value)= "";
       
})
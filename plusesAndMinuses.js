// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.
    
let counter = 0;

const plusFunction = function(){
   counter = counter+1;   
   console.log(`count is ${counter}`)
   document.getElementById('para').innerHTML = `Counter is now: ${counter}`; 
   };

const minusFunction = function (){
  if(counter>=1){ 
    counter = counter-1;   
    console.log(`count is ${counter}`)
        document.getElementById('para').innerHTML = `Counter is now: ${counter}`;
   }
   else{
        document.getElementById('para').innerHTML = "Counter is less than zero";
        console.log(`count is lesss than zero`)
   }   
 }
 let plusEl = document.getElementById('plus')
 plusEl.addEventListener('click', plusFunction);

 let minusEl = document.getElementById('minus')
 plusEl.addEventListener('click', minusFunction);
    
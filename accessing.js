// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"

//let headEl= document.querySelector('#weather-head');

let headEl = document.getElementById('weather-head');
headEl.innerText = "February 10 Weather Forecast"

//console.log(headEl);

// Change the styling of every element with class "sun" to set the color to "orange"

const listSunClassItems = document.getElementsByClassName('sun');
console.log(listSunClassItems)

Array.from(listSunClassItems).forEach(function(listSunClassItems){
     listSunClassItems.style.color = 'orange';
  })

Array.from(listSunClassItems)[0].className = "cloudy";  
  
/* //========= Second method to solve this is ============
//const sunClass = document.querySelectorAll('.sun');
//console.log(sunClass);
//Array.from(sunClass).forEach(function(sunClass){
  // sunClass.style.color = 'orange';
//})
*/

// Change the class of the second <li> from to "sun" to "cloudy"

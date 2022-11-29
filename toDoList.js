// If an li element is clicked, toggle the class "done" on the <li>

// If a delete link is clicked, delete the li element / remove from the DOM

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)

const toggleList = function(e) {
  e.preventDefault();
   
  Array.from(document.getElementsByClassName("done")).forEach(element => {
    element.classList.remove("done")
  });
  e.target.parentNode.classList.add("done");
  e.stopPropagation();
}

document.getElementsByClassName("today-list")[0].addEventListener('click', toggleList);
const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  let elemSpan = document.createElement('span')
  elemSpan.innerHTML = input.value;
  //let textNode = document.createTextNode(inputString); // use this text to create a new <li>
  const li = document.createElement("li");
 // li.appendChild(textNode);
 li.appendChild(elemSpan); 
 let listItem = document.getElementsByClassName("today-list")[0].appendChild(li);
 listItem.addEventListener('click', toggleList);

 /* delete button code */
  let deleteElem = document.createElement('a');
  deleteElem.setAttribute('class', 'delete');
  deleteElem.appendChild(document.createTextNode("Delete"));
  listItem.appendChild(deleteElem).addEventListener("click", removeListItem) //append delete button to newly added list element
  // Finish function here
};


const removeListItem = function(e) {
  e.preventDefault();
  toDayList = document.getElementsByClassName("today-list")[0];
  
  let deleteBtnNode = e.target;
  let parentNode = deleteBtnNode.parentNode;
    
  deleteBtnNode.parentNode.removeChild(deleteBtnNode);
  toDayList.removeChild(parentNode);
}

document.getElementById('addBtn').addEventListener('click', addListItem);
document.getElementsByClassName('delete')[0].addEventListener('click', removeListItem);
document.getElementsByClassName("today-list")[0].addEventListener('click', toggleList); 
  // Finish function here
/*
// Get the input field
var input = document.getElementById("myInput");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});
*/ 
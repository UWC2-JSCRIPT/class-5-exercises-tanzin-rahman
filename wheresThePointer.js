// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click
let counter = 0;
const body = document.body;
body.addEventListener('click', e =>{
    let x = e.clientX;
    let y = e.clientY;
    console.log(e.clientX);
    console.log(e.clientY);
    document.elementFromPoint(x, y).innerHTML = `x: ${e.clientX} ,y: ${e.clientY}`;
})
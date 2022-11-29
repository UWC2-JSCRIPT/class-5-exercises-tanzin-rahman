// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage

document.getElementById('more-info').addEventListener('click', (e)=>{
  e.preventDefault();
  alert("Here's some info");
})

// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"

document.getElementById('dog').addEventListener('click', (e)=>{
  e.stopPropagation();
  alert(`Bow wow`);
})

class Animal {
  name;
  constructor(name) {
    this.name = name
  }
  getDetails() {
    console.log("name: "+this.name);
  }
}

class Cat extends Animal{
  sound;
  constructor (name, sound) {
    super(name)
    this.sound = sound
  }

  getDetails() {
    super.getDetails()
    console.log("Sound: "+ this.sound)
  }

}

let cat = new Cat("Sunshine", "Meaow")
cat.getDetails()

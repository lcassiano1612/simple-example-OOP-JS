class Animal {

  constructor(type, name, sound, age) {
    this.type = type;
    this.name = name;
    this.sound = sound;
    this.age = age;
  }

  makeASound() {
    console.log(`$this.name says: ${this.sound}`);
  }

}

const cat = new Animal('cat', 'passa fome', 'meauuuuu', 5);
const dog = new Animal('dog', 'DUDU', 'AU AU', 1);
const horse = new Animal('horse', 'pé de pano', 'HiiiiHiiiiii', 10);
const bird = new Animal();

console.log(cat);
console.log(dog);
console.log(horse);
console.log(bird);

cat.makeASound();
dog.makeASound();
horse.makeASound();
bird.makeASound();
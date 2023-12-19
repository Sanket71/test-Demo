class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }
  static myType() {
    console.log("Animal");
  }
  speak() {
    console.log("hi there " + this.speaks);
  }
}

const dog = new Animal("bella", 4, "barks");
dog.speak();
Animal.myType();

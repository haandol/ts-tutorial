class Greeter {
  constructor(public name: string) { }
  greet() {
    return `Hello world ${this.name}!!`;
  }
  hugeGreet() {
    return `HELLO WORLD, ${this.name}!!!!!`;
  }
};

const greeter = new Greeter("Vincent");
console.log(greeter.hugeGreet());

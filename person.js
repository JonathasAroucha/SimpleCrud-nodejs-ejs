class Person{
  constructor(name){
    this.name = name;
  }
  sayMyName(){
    return `Hi Guys, My name is ${this.name}!`;
  }
}

module.exports = {
  Person,
}
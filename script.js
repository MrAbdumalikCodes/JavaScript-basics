//1)  Funksiya konstruktor

function User(name,id){
    this.name = name
    this.id = id
    this.human = true
}
const employ = new User('Jack',1)
const some = new User('John',21)
console.log(employ);
console.log(some);
var data = {
    name:'John',
    age:32,
    job:true
}

var user = {
    isMaried:true
}

user.__proto__= data
console.log(user.name);
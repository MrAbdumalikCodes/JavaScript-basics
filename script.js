//Bind 
const data ={
    name:'John',
    age:23,
    job:'Androind developer',
    personInfo:function(){
        console.group(`${this.name} info:`) // Console group bu huddi object ga uxshatib consolega chiqaradi yani group ga olib masala John info: shu kurinishda
        console.log('My name is ' + this.name + '.' + 'My ' + this.age + ' years old' + '.' + 'My job is ' + this.job)
        console.groupEnd()
    }
}
const employes = {
    name:'Harry',
    age:18,
    job:'Software engineer'
}
const coder = {
    name:'Jimy',
    age:25,
    job:'Graphic designer'
}

data.personInfo.bind(employes)()
data.personInfo.bind(coder)()
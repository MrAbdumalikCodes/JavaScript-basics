//Bind 
const data ={
    name:'John',
    age:23,
    job:'Androind developer',
    personInfo:function(contact){
        console.group(`${this.name} info:`) // Console group bu huddi object ga uxshatib consolega chiqaradi yani group ga olib masala John info: shu kurinishda
        console.log('My name is ' + this.name + '.' + 'My ' + this.age + ' years old' + '.' + 'My job is ' + this.job + '.' +  `My number ${contact}`)
        console.groupEnd()
    }
}
const employes = {
    name:'Harry',
    age:18,
    job:'Software engineer'
}

const fullInfo = data.personInfo.bind(employes,'+998-91-425-4848')()

//1. const fullInfo = data.personInfo.bind(employes)
// fullInfo('+998-91-222-7878');

//2.const fullInfo = data.personInfo.bind(employes,'+998-91-425-4848')();
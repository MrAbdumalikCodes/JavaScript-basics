// Call , Apply
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
const employes2 = {
    name:'Jack',
    age:27,
    job:'Full stack'
}

const fullInfo = data.personInfo.apply(employes,['+998-91-425-4848'],['+998-91-222-3434']) // apply - bunga ikkinchi qiymatida [] massiv berishimiz kerak.

const fulltext = data.personInfo.apply(employes,['+998-91-425-4848'],['+998-91-222-3434']) // ikkita qiymat berilsa birinichisini olib ketadi

const fullInfos = data.personInfo.call(employes,'+998-91-425-4848') // call - bunda biz funksiyani chaqirishimiz kerak emas call ni uzi funksiya chaqirib ketadi.
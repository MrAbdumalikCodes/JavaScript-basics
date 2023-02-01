const number = 8;

localStorage.setItem('number',number.toString()) 
console.log(localStorage.getItem('number')); // 8
console.log(localStorage.removeItem('number')) // itemlarni localStoragedan uchirish uchun foydalaniladi.
localStorage.clear() // localStorageni bo'sh qilib quyadi hammasini uchirib tashlaydi.

const array = [1,2,3,4,5]
Array.prototype.mult = function(num){
    return this.map((i) => {
        return i * num
    })
}
console.log(array.mult(2));
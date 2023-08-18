//Ham sort

const arr = [1,30,4,21,1000];

let sortArr = arr.sort(function(a,b){
    return a - b;
})

console.log(sortArr);
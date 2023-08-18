//Arrow Function
const myFunc = () => {
    return 'Phan Thanh Trí';
}

console.log(myFunc());

//Callback

let mySum = function(a,b,callback) {
    let sum = a + b;
    setTimeout(function(){
        callback(sum);
    },5000);
}

let myPrint = function(param) {
    console.log('Sum: ', param);
}

mySum(3,5,myPrint);

let timer = setInterval(function(){
    console.log(1);
},2000) 


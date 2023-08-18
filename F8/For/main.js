// Lay random 1 phan tu trong mang viet ham
function getRandNumbers(min,max,length) {
    let array = [];
    for(let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * (max - min) + min));
    }
    return array;

}

// 👉 Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length. 
// Hàm này sẽ trả về một mảng gồm length phần tử, các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max

// console.log(getRandomItems(5,10,5));

// For in
let myInfo = {
    name: 'PT',
    age: 20,
    address: 'Tra Vinh'
}

function run(object) {
    let arr = [];
    for(let key in object) {
        arr.push(`Thuộc tính ${key} có giá trị là ${object[key]}`);
    }
    return arr;
}

console.log(run(myInfo));

// For of

for (let value of Object.values(myInfo)) {
    console.log(value);
}
/* ----------------------------------------------------------------------------------------------------------------------------------------------------------- */

// VD Đệ Quy:

function countDown (number) {
    if(number > 0 ) {
        console.log(number);
        return countDown(number - 1);
    }
    return number;
}

countDown(10);

// Xóa các phần tử không bị trùng trong mảng và tạo ra một mảng mới

// Cách 1: Sử dụng hàm build in

let array = [1,2,3,1,2,3];

let print = [...(new Set(array))];

console.log(print);

// Cách 2: Đệ quy
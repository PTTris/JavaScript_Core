// Khái niệm về callback: là hàm (function) được truyền qua đối số của hàm khác!

function myFunc(param) {
    // Phải check có phải là function không trước đã;
    if(typeof param === 'function'){
        return param(123);
    }
    return console.log('is not a function');
}

function myCallBack(value){
    console.log('Value: ' + value);

}

myFunc(myCallBack);

///////////////////////////////////////////////////////////////

//          THỰC HÀNH CALLBACK

const number = [1,2,3,4,5];

const course = [
    'Javascript',
    'HTML',
    'CSS'
];

const courses = [
    {
        id: 1,
        name: 'JS',
        coin: 0,
        isFinish: true
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0,
        isFinish: true
    },
    {
        id: 3,
        name: 'Java',
        coin: 2,
        isFinish: true
    },
    {
        id: 4,
        name: 'PHP',
        coin: 333,
        isFinish: true
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 250,
        isFinish: true
    }

];

///////////////////////////////////////////////////////////////
//  Tự định nghĩa hàm map

Array.prototype.map2 = function(callback) {
    //Đầu tiên cần lặp qua tất cả phần tử
    let arrayLength = this.length;
    //Biến lưu trữ push từ phần tử vào sau đó return ra
    let output = [];

    for(let i = 0; i < arrayLength; i++){
        let result = callback(this[i], i);
        output.push(result);
    };
    return output;
};

course.map2(function(currentValue, index) {
    console.log(currentValue,index);
})

// Sử dụng

let htmls = course.map2(function(course){
    return `<h2>${course}</h2>`;
})

console.log(htmls.join(''));

///////////////////////////////////////////////////////////////
// Tự định nghĩa hàm forEach();

Array.prototype.forEach2 = function(callback){
    let arrayLength = this.length;
    // Ở đây phải sử dụng for in vì sẽ ko phụ thuộc vào độ dài của mảng và trở ngại là duyệt luôn phần tử của PROTOTYPE nên giải pháp cần có hasOwnProperty()
    for(let index in this) {
        if(this.hasOwnProperty(index)) { // Phải kiểm tra và cũng để lọc ra cái foreach2 
            callback(this[index],index,this);    // vì tự định nghĩa bằng prototype sẽ sáng lên và for in sẽ lập qua
        }
    }
};
course.length = 100;
// Sử dụng
course.forEach2(function(course){
    console.log(course);
});
///////////////////////////////////////////////////////////////
// Tự định nghĩa hàm reduce
    //Có initial
Array.prototype.reduce2 = function(callback,result) {
    let arrayLength = this.length;
    for(let i = 0; i < arrayLength; i++) {
        result = callback(result,this[i], i, this);
    }
    return result;
};

        // Tinh tổng trong mảng
        let  sum = number.reduce2(function(total, item){
            return total + item;
        },0);

        console.log(sum);

    //Không có initial và đây là tối ưu nhất nên dùng thằng này
Array.prototype.reduce3 = function(callback, result) {
    let arrayLength = this.length;
    let i = 0;
    if(arguments.length < 2) {
        result = this[0];
        i = 1;
    }
    for(; i < arrayLength; i++) {
        result = callback(result,this[i], i, this);
    }
    return result;
};
        // Tinh tổng trong mảng
        let  sum2 = number.reduce3(function(total, item){
            return total + item;
        });

        console.log(sum2);


///////////////////////////////////////////////////////////////
// Tự tay code filter()

Array.prototype.filter2 = function(callback) {
    let result, output = [];
    for(let index in this) {
        if(this.hasOwnProperty(index)){
            result = callback(this[index], index, this); // nhận vào true or false từ bên dưới gán vào result
            if(result) {
                output.push(this[index]);
            }
        };
    }
    return output;
};

    // Lấy ra mảng có coin >= 250
    let Coin250 = courses.filter2(function(course){
        return course.coin >= 250; //ở đây trả về DK true or false
    });

    console.log(Coin250);

///////////////////////////////////////////////////////////////
//Tự tay code some()

Array.prototype.some2 = function(callback) {
    for(let index in this) {
        if(this.hasOwnProperty(index)){
            if(callback(this[index], index, this)) return true;
        }
    }
    return false;
};

    //Kiểm tra đã học xong tối thiểu 1 khóa chưa
    let isFinish = courses.some2(function(course){
        return course.isFinish;
    });

    console.log(isFinish);

///////////////////////////////////////////////////////////////
//Tự tay code every()
Array.prototype.every2 = function(callback) {
    for(let index in this) {
        if(this.hasOwnProperty(index)) {
            if(!callback(this[index], index, this)){
                return false;
            }
        }
    }
    return true;
}

    //Kiểm tra xem đã học xong tất cả khóa học chưa
    let isAllFinish = courses.some2(function(value){
        return value.isFinish;
    });

    console.log(isAllFinish);
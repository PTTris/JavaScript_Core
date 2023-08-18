
let fruit = ['Banana', 'Orange','Apple'];

let result = [1,23,10,32,43,31];

function getMaxArr(arr) {
    return Math.max.apply(null,arr);
}

function sortArr(arr) {
    return arr.sort(function(a,b) {
        return a - b;
    });
}

document.getElementById('PT').innerHTML = getMaxArr(result);

document.getElementById('PT2').innerHTML = sortArr(result);


 const numbers = [45,4,9,16,25];

 let txt = "";

 numbers.forEach(myFunction);

 document.getElementById('PT3').innerHTML = txt;

 function myFunction(value, index, array) {
    txt += value + '<br>';
}

// Array part 2 more more more

let courses = [
    {
        id: 1,
        name: 'JS',
        coin: 0
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Java',
        coin: 2
    },
    {
        id: 4,
        name: 'PHP',
        coin: 333
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 250
    }
];

//Bắt đầu các method của Array

//forEach sử dụng callback
console.log('forEach');
courses.forEach(function(course,index) { 
    console.log(index,course['coin']);  
});

console.log('Every');
//every() hàm này dùng để kiểm tra xem tất cả phần tử có đạt điều kiện đã cho ko
let isFrees = courses.every(function(course, index) {
    return course.coin === 0; // Check điều kiện true/false
})

// Cơ chế duyệt qua từng 1 phần tử

console.log(isFrees);

console.log('Some');
//some() ngược với every chỉ cần 1 phần tử trong mảng thỏa đk thì dừng lại luôn

let isFree = courses.some(function(course, index) {
    console.log(index);
    return course.coin === 0; // Check điều kiện true/false
});

console.log(isFree);

console.log('Find');
//find() đơn giản là chỉ tìm kiếm nhưng chỉ trả về một phần tử

let courseFree = courses.find(function(course, index){
        return course.name === 'ReactJS';
});

console.log(courseFree.name);


console.log('Filter');
//filter() đơn giản là ngược với find() sẽ trả về tất cả phần tử

let coinsFree = courses.filter((course,index) => {
    return course.coin === 0;
});
// Muốn hiển thị ra tất cả value của key nào đó khi sử dụng filter thì sử dụng forEach() để lặp lấy ra các phần tử
coinsFree.forEach((course) => {
    console.log(course.name);
});

console.log('Map');
//map() dùng để thêm key value hoặc sửa đổi chúng, có thể tách ra 1 key ra 1 mảng mới, return cái gì mảng mới trả về cái đấy!!
let courseNew = courses.map((course,index) => {
    return {
        index: index,
        id: course.id,
        name: `Name's course: ${course.name}`,
        coin: course.coin,
        coinText: `Tuition fee: ${course.coin}`
    }
}) 
courseNew.forEach((course => {
    console.log(course.coinText);
}));

// thêm 1 ví dụ là render 

let courseHandle = courses.map((course,index) => {
    return `<h2>${course.name}</h2>`
})

console.log(courseHandle.join(''));

//reduce() nhận về giá trị duy nhất khi tính toán trong array
// Ví dụ là có thể lấy giá trị tổng số coin trong mảng này 
    // Đây là cách truyền thống
    let totalCoin = 0;
    
    for(let course of courses) {
        totalCoin += course.coin;
    }

    console.log('Tổng là',totalCoin);

    let i = 0;
    // Đây là cách sử dụng phương thức reduce(), hàm này cũng sẽ return cái gì tính lặp cái đó
    // let totalCoinReduce = courses.reduce(function(accumulator, currentValue){
    //     i++
    //     console.table({
    //         'Lượt chạy: ': i,
    //         'Gia coin: ' : currentValue.coin,
    //         'So da coin tich tru: ': accumulator,
    //         'Tong coin tich tru: ' : accumulator + currentValue.coin
    //     })
    //     return accumulator + currentValue.coin;
    // },0);

    totalCoinReduce = courses.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.coin;
    },0);
    console.log(totalCoinReduce);

    // Còn ví dụ này thì không cần đối số thứ 2 initial 
    let a = [100,200,300,400];
    let totalA = a.reduce(function(total, number) {
        return total + number;
    });
    console.log(totalA);

    // Còn ví dụ này chức năng Flat - 'làm phẳng' mảng từ Depth array: 'Mảng sâu'
    let depthArray = [1,2,3,[4,5],6,7,[8,9,10]];

    let flatArray = depthArray.reduce(function(flat) {
        return flat.concat(depthArray); // sử dụng nối mảng
    },[])// initial ở đây sẽ là mảng nếu không mặc định là số 
    
    //Ví dụ lấy ra khóa học xong đưa ra 1 mảng mới
    let topic = [
        {
            topic: 'Font-end',
            courses: 
            [
                {
                    id: 1,
                    title: 'HTML-CSS'
                },
                {
                    id: 2,
                    title: 'JS'
                }
            ]
        },
        {
            topic: 'Back-end',
            courses: 
            [
                {
                    id: 1,
                    title: 'NodeJS'
                },
                {
                    id: 2,
                    title: 'JavaWeb'
                }
            ]
        }
    ]

    let getCoursesTopics = topic.reduce(function(topic,course){
        return topic.concat(course.courses);
    },[]);

    console.log(getCoursesTopics);

    let getCourseList = getCoursesTopics.map(function(course) {
        return `
            <div>
                <h2>${course.id}</h2>
                <p>${course.title}</p>
            </div>
        `;
    });

    console.log(getCourseList.join(''));


    //BT F8

    var watchList = [
        {
          "Title": "Inception",
          "Year": "2010",
          "Rated": "PG-13",
          "Released": "16 Jul 2010",
          "Runtime": "148 min",
          "Genre": "Action, Adventure, Crime",
          "Director": "Christopher Nolan",
          "Writer": "Christopher Nolan",
          "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
          "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
          "Language": "English, Japanese, French",
          "Country": "USA, UK",
          "imdbRating": "8.8",
          "imdbVotes": "1,446,708",
          "imdbID": "tt1375666",
          "Type": "movie",
        },
        {
          "Title": "Interstellar",
          "Year": "2014",
          "Rated": "PG-13",
          "Released": "07 Nov 2014",
          "Runtime": "169 min",
          "Genre": "Adventure, Drama, Sci-Fi",
          "Director": "Christopher Nolan",
          "Writer": "Jonathan Nolan, Christopher Nolan",
          "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
          "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
          "Language": "English",
          "Country": "USA, UK",
          "imdbRating": "8.6",
          "imdbVotes": "910,366",
          "imdbID": "tt0816692",
          "Type": "movie",
        },
        {
          "Title": "The Dark Knight",
          "Year": "2008",
          "Rated": "PG-13",
          "Released": "18 Jul 2008",
          "Runtime": "152 min",
          "Genre": "Action, Adventure, Crime",
          "Director": "Christopher Nolan",
          "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
          "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
          "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
          "Language": "English, Mandarin",
          "Country": "USA, UK",
          "imdbRating": "9.0",
          "imdbVotes": "1,652,832",
          "imdbID": "tt0468569",
          "Type": "movie",
        },
        {
          "Title": "Batman Begins",
          "Year": "2005",
          "Rated": "PG-13",
          "Released": "15 Jun 2005",
          "Runtime": "140 min",
          "Genre": "Action, Adventure",
          "Director": "Christopher Nolan",
          "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
          "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
          "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
          "Language": "English, Urdu, Mandarin",
          "Country": "USA, UK",
          "imdbRating": "8.3",
          "imdbVotes": "972,584",
          "imdbID": "tt0372784",
          "Type": "movie",
        },
        {
          "Title": "Avatar",
          "Year": "2009",
          "Rated": "PG-13",
          "Released": "18 Dec 2009",
          "Runtime": "162 min",
          "Genre": "Action, Adventure, Fantasy",
          "Director": "James Cameron",
          "Writer": "James Cameron",
          "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
          "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
          "Language": "English, Spanish",
          "Country": "USA, UK",
          "imdbRating": "7.9",
          "imdbVotes": "876,575",
          "imdbID": "tt0499549",
          "Type": "movie",
        }
      ];

      function calculateRating(watchList) {
        let filmOfNolan = watchList.filter(function(items){
            return items.Director === "Christopher Nolan";
        });

        let totalImdb = filmOfNolan.reduce(function(total, items){
            return total += parseFloat(items.imdbRating);
        }, 0)

        return totalImdb / filmOfNolan.length;
      }

      console.log(calculateRating(watchList));


// Tự tay code ra reduce()
Array.prototype.reduce2 = function(callback, result) {
    for(let i = 0; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
}

const number = [1,2,3,4,5];

const results = number.reduce2(function(total, number) {
    return total + number;
},0)

console.log(results);

// argument.length dùng để kiểm tra xem ng dùng có truyền đối số vào không như ví dụ ở dưới

Array.prototype.reduce3 = function (callback, result) {
    let i = 0
    if(arguments.length < 2) { // Chổ này kiểm tra user có truyền đối số thứ 2 ko?
        // Nếu không truyền sẽ ráng biến result là phần tử đầu tiên của mảng
        result = this[0];
        i = 1; // Và sẽ lập từ phần tử thứ 2 trở đi
    }

    for(; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
}

const results2 = number.reduce3(function(total, number) {
    return total + number;
});

console.log(results2);


// Chuyển đổi mảng thành object
function arrToObj(arr) {
    return arr.reduce3(function(ob, arr){
        ob[arr[0]] = arr[1]; // thuật toán chuyển đổi
        return ob;
    },{})
};
 
// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }


// So sánh 2 mảng

let mang1 = [2]

let mang2 = [2]

function checkSame(arr1, arr2) {
    if(arr1.length !== arr2.length) return false

    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) return false
    }

    return true;
}

console.log(checkSame(mang1,mang2));

// method includes() có sẳn trong string and array
    //Dung voi String
    let tilte = 'Learn Javascript';
    console.log(tilte.includes('Javascript')); //true

    
// Bonus Knowledge


//Sử dụng mảng quốc gia trên, tìm quốc gia chứa số ký tự lớn nhất.
let countries =   [
    ['Albania', 'ALB', 7],
    ['Bolivia', 'BOL', 7],
    ['Canada', 'CAN', 6],
    ['Denmark', 'DEN', 7],
    ['Ethiopia', 'ETH', 8],
    ['Finland', 'FIN', 7],
    ['Germany', 'GER', 7],
    ['Hungary', 'HUN', 7],
    ['Ireland', 'IRE', 7],
    ['Iceland', 'ICE', 7],
    ['Japan', 'JAP', 5],
    ['Kenya', 'KEN', 5]
  ];
  let maxLengthCountries = [];
  let lengthCountries = countries[0][0].length;

  for(let  i = 0; i < countries.length; i++) {
    if(countries[i][0].length > lengthCountries) {
        maxLengthCountries = countries[i][0];
        lengthCountries = countries[i][0].length;
    }
  }

  console.log(maxLengthCountries);







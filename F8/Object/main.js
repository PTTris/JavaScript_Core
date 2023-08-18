// Object in JS

let myInfo = {
    fullName : 'Phan Thanh Tri',
    age : 20,
    address: 'Tra Vinh'
}

// Them keys và values

myInfo.email = 'tript2609@gmail.com';

myInfo['email-private'] = 'tritv233@gmail.com';

let myKey = 'address'

let emailKey = 'email';

let yourInfo = {
    fullName : 'Tran Tu Khanh',
    age : 17,
    address: 'Tra Vinh',
    [emailKey] : 'tukhanh@gmail.com',
    myFunction: function() {
        return this.fullName;
    }
}



// Object Constructor

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    //Phương thức
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

let author = new User('PT', 'Tri', 'Avatar');
let user = new User('Tu', 'Khanh', 'Avatar');

author.title = 'Day la PT26'

user.comment = 'Đẹp trai quá'

console.log(author);
console.log(user);

console.log(author.getName());
console.log(user.getName());

//Object prototype
// Thêm thuộc tính mới vào OBJECT
User.prototype.className = 'PT269'; 

User.prototype.getClassName = function() {
    return this.className;
}

// Đối tượng DATE khi làm việc với đối tượng time



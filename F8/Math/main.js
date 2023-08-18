// Lay random 1 phan tu trong mang viet ham

let array = [];

function getRandomItems(array) {
    let random = Math.floor(Math.random() * array.length)

    return array[random];
}
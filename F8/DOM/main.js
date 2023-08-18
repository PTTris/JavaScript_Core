/**
 * HTML DOM
 * 
 * 1. Element: ID, Class, Tag, CSS selector, HTML collection
 * 
 * 2. Attribute:
 * 
 * 3. Text: 
 */

/**
 * Trả về 1 phần tử duy nhất: getElementByID, querySelector
 * Trả về NodeList: querySelectorALL
 * Trả về HTML Collection: getElementsByClassName, getElementsByTagName
 */

// Mọi thứ phải đi từ gốc rễ là document

// --------------------- Node Element-------------------
// Lấy từ ID
    let headingNode = document.getElementById('heading');

    console.log({
        element: headingNode
    });
    // output: h1#heading đây là nodeElement 

// Lấy từ Class name

    let headingNodes = document.getElementsByClassName('heading');

    // Cơ chế nó như là mảng như không có map, reduce,... 
    // Vẫn chứa các phần tử bằng mảng HTMLCollection[h1.heading,...]
    // Như thường lệ để lấy phần tử thì thông qua vòng lặp

// CSS Selector cái này ngon nhất oke nhất
    let cssSelector = document.querySelector('.heading');
    // Ứng dụng nhưng css selector luôn
    let cssSelector1 = document.querySelector('.box .heading-2:first-child');
    console.log(cssSelector1);

// Cách này cũng khá là oke la
let boxNode = document.querySelector('.box-1');
console.log(boxNode);

let liList = document.getElementsByTagName('li');
console.log(liList);

let liNodeBox1 = boxNode.querySelectorAll('li');
console.log(liNodeBox1);

// Lấy phần tử ra từ Node hay HTML Collection thì dùng vòng lặp
for(let i = 0; i < liNodeBox1.length; i++) {
    console.log(liNodeBox1[i]);
}

// InnerHTML và OuterHTML
    // Với innerHTML thì dùng để thêm tag attribute text và trong 1 tag trong mã html
    let boxElement = document.querySelector('.box');

    boxElement.innerHTML = '<h1 style="color: green;">Phan Thanh Trí</h1>';

    // Với outer thì sẽ lấy chính nó và in ra thì in ra luôn chính nó và thay đổi thì đè lên chính nó (* trong thực tế ta cũng ít xài đc thay thế bằng phương thức khác tối ưu hơn)
    
    console.log(boxElement.outerHTML);

    // *** VÍ DỤ innerHTML ***
    var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

        function render(courses) {
            let ulElement = document.querySelector('.courses-list');

            let newCourses = courses.map(function(course){
                return `<li>${course}</li>`;
            })

            return ulElement.innerHTML = newCourses.join('');
        }

        render(courses);


// DOM ELEMENT CSS (STYLE)
    let domCSS = document.querySelector('.Dom-CSS');

    console.log(domCSS.style);

    // Gán giá trị thì sẽ là CSS inline

    domCSS.style.width = '100px';
    domCSS.style.height = '100px';
    domCSS.style.backgroundColor = 'green';

    // Thêm nhiều thuộc tính 1 lượt dùng assign(đối tượng muốn dùng,{Các thuộc tính tương ứng là key và value})

    Object.assign(document.querySelector('.assign').style,{
        width: '50px',
        height: '50px',
        backgroundColor: 'red',
    });

// Classlist Property
    // add : thêm class vào tag
    let classList = document.querySelector('.classList');

    classList.classList.add('red');

    // contains : dùng để kiểm tra có class đó hay không
    console.log(classList.classList.contains('red'));

    // remove : dùng để xóa class
    classList.classList.remove('red');

    // toggle : có thì xóa, không có thì thêm vào
    classList.classList.toggle('red');

// --------------------- Node Attribute -------------------
// Là các id , class , name, href là những thuộc tính trong thẻ mở của Element
// Là 1 nhánh đi ra từ Element nên phải get element trước sau đó mới có đc attribute
// Và có thể set giá trị trực tiếp tại đây nhưng sẽ không hiện vào mã HTML

let headingElement = document.querySelector('.Attribute');

//----- Đây là cách set trực tiếp Attribute nhưng phải hợp lệ đúng quy chuẩn
headingElement.id = 'Attribute';

headingElement.className = 'blue';

console.log(headingElement);

//----- Đây là cách set có thể nói là gián tiếp dùng phương thức và có thể tùy biến nhiều hơn cũng như ko nhất thiết đúng quy chuẩn
let headingElementID = document.querySelector('#attr');

headingElementID.setAttribute('data-id','1'); //DST1: là attribute, DST2: là value

console.log(headingElementID);
//Cũng như còn có thể lấy ra giá trị từ attribute bất kì
headingElementID.title = 'PT26';

console.log(headingElementID.getAttribute('title'));

// --------------------- Node Text -------------------
// Các chữ trong Element
// Có 2 phương thức chủ yếu để truy xuất: innerText, textContent

//----- Sự khác nhau của 2 tk trên là: 
//--- Đây là lấy dữ liệu
// innerText: sẽ trả về những gì hiện ở trên browser;
// textContent: sẽ trả về giá trị thật sự trong mã HTML và bỏ qua luôn các thẻ tag nhưng các textNode trong thẻ tag sẽ đc in ra hết

let textNode = document.querySelector('.textNode');

console.log(textNode.innerText);
console.log(textNode.textContent);

// Ngoài ra có vài trường hợp đặc biệt

let test = document.querySelector('.test');

//--- Đây là truyền dữ liệu
// 2 cái đều như nhau chỉ là text hết
test.innerText = '<i>New Heading</i>';
test.textContent = '<i>New Heading</i>';

// ***Nhưng khi sử dụng template string thì có sự khác biệt***
// Đối với innerText thì trong mã HTML mỗi đoạn xuống dòng như vậy là một tag <br>
test.innerText = `

    PT260903

`
// Sẽ trả về bth nhất vì nó trả về đúng như bên dưới trong mã HTML nên là HTMl sẽ coi sự xuống dòng là ko tồn tại
// test.textContent = `

//     PT260903

// `

// --------------------- Node Properties -------------------

let nodeElement = document.querySelector('.nodeProperties');

console.log([nodeElement]);

// Có rất nhiều thuộc tính và khoảng cách xuống dòng cũng là textNode, với elementNode độ rộng và cao là clientHeight và clientWidth
// Cũng có của Type đc đánh số 1-3 là element: 1, attribute: 2, text: 3


// --------------------- DOM EVENTS -------------------

// 1. Attribute Events : các thuộc tính trực tiếp trên tag html (*** khi sử dụng thì thêm tiền tố 'on' vào vd: onclick())

// 2. Assign event using the element node : lấy ra element để thực hiện các phương thức lắng nghe sự kiện trong file main.js (này nên hơn)

// 3. Khi sử dụng các events sẽ các sự kiện nổi bọt vd: click vào tk con nhận đc luôn tk cha

let changeH1 = document.querySelector('.test_event');

changeH1.onclick = function (e) {
    console.log(e.target); // Khi click mà trả về chính tag hay value thì phải sử dụng target chứ ko thể gọi trực tiếp
}

// Lấy các element thông qua LOOP

let htmls = document.querySelectorAll('.loopElement');

for(let i = 0; i < htmls.length; i++) {
    htmls[i].onclick = function(event) { // đây vẫn là callback và mouseEvent thay thế cho từng value trong htmls
        console.log(event.target);
    }
}

// *** Khi dùng mouseEvent thì có thể tùy biến nhiều hơn với nhiều phương thức trong mouseEvent

// VD: Khi click thì thay đổi nền background

let boxChange = document.querySelector('.boxChange');

boxChange.onclick = function(e) {
    e.target.style.backgroundColor = 'red';
}

//--- Practice với DOM EVENT
    // Process form
    // 1. Input(text, checkbox) / select => use onchange
    // 2. Key up / down

    // Input
        let inputElement = document.querySelector('input[type="text"]');
        // C1: Sử dụng onchange
            // inputElement.onchange = function(e) {
            //     console.log(e.target.value);
            // }
        
        // C2: Sử dụng oninput
            inputElement.oninput = function(e) {
                console.log(e.target.value);
            }
        
    // Select
        let selectElement = document.querySelector('select');
        
        selectElement.onchange = function(e) {
            console.log(e.target.value); // value="value 1" sẽ lấy value từ attribute value chứ ko phải trong tag html
        }
    
    // Check

    let checkElement = document.querySelector('input[type="checkbox"]');
        
    checkElement.onchange = function(e) {
        console.log(e.target.checked); 
    }


    // Key up / down (xử lí những bài toàn về hành vi người dùng khi sử dụng bàn phím)
        // Cách để lấy mã của key
        let inputElementKey = document.querySelector('.inputKey');

        inputElementKey.onkeyup = function(e) {
            console.log(e.which);
        }
        // Ví dụ trong thực tế dùng esc để thoát và enter để chọn
        document.onkeydown = function(e) {
            switch(e.which) {
                case 27: alert('Out'); break;
                case 13: alert('Enter'); break;
            }
        }

// PreventDefault and StopPropagation
    // Ví dụ về yêu cầu chỉ có url của F8 mới chuyển tới đc 
    let aElement = document.querySelectorAll('a');

    aElement.forEach((element) => {
        element.onclick = (event) => {
            // trỏ tới thuộc tính href mới lấy đc cái startsWith(kiểm tra chuỗi của mình có bắt đầu giống với chuỗi đối số hay ko)
            if(!event.target.href.startsWith("https://fullstack.edu.vn/")){
                event.preventDefault();
            }
        }
    })

    // Ví dụ vì input focus click và danh sách đề cử (ul) không bị mất focus

    let ulElement = document.querySelector('.ulE').onmousedown = function(e) {e.preventDefault()};


// Event Listener

/**
 * Bài tập: Cho trước thẻ button, hãy viết code JS sao cho mỗi lần click vào button sẽ đổi màu chữ 
 * của button lần lượt sang màu red, blue, green và sau 3 giây chỉ đổi màu red và blue (bỏ màu green)
 */
        let btn = document.querySelector('button');
        let spanElement = document.querySelector('span');
        // Tạo một mảng để lưu trữ màu
        const arrChangeColor = ['red','blue','green']; 
        // Tạo 1 hằng số để gán giá trị ban đầu của mảng
        const initialLength = arrChangeColor.length;
        // Tạo 1 biến đếm
        let colorIndex = 0;

        function changeColor() { 
            // Gán từng phần tử trong mảng
            btn.style.color = arrChangeColor[colorIndex];
            // Mỗi lần click sẽ tăng index trong mảng
            colorIndex += 1;
            // Tạo một biến để lưu trữ hàm setTimeout để có thể clear được
            let flagTimeOut;
            if(colorIndex >= arrChangeColor.length) {
                // Reset lại mảng
                colorIndex = 0;
                spanElement.style.display = 'inline';
                // Dùng hàm setTimeout để bỏ đi phần tử cuối trong mảng sau 3s
                flagTimeOut = setTimeout(function(){
                    arrChangeColor.pop();
                    spanElement.style.display = 'none'; // Sau 3s tự ẩn
                },3000)
                // Khi độ dài hiện tại của mảng không bằng độ dài ban đầu thì sẽ hủy hàm setTimeout
                if(arrChangeColor.length !== initialLength) {
                    clearTimeout(flagTimeOut);
                    spanElement.style.display = 'none'; // Hết bằng nhau ròi ẩn luôn ko thể quay về đâu cu
                }
            }
        }
btn.addEventListener('click', changeColor);
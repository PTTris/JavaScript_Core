// Promise 

    // Sync / Async

    // Async : setTimeout, setInterval, fetch, 
    // XMLHttpRequest, file reading,
    // request animation frame

    // Để khi nào biết thực hiện xong Async thì chính là Call Back (xử lý các thao tác bất đồng bộ)

    setTimeout(function() {
        console.log('Dòng này sẽ in ra sau')
    }, 0);
    // setTimeout là tác vụ bất động bộ (async)
    
    console.log('Dòng này sẽ in ra trước');// Đây là tác vụ đồng bộ (sync)

// Promise sinh ra để xử lý vấn đề về Callback hell (công việc 2 phụ thuộc vào kết quả trả về công việc 1)
// VD: Callback hell
setTimeout(function() {
    console.log(1); // Việc 1
    setTimeout(function() {
        console.log(2); // Việc 2
        setTimeout(function() {
            console.log(3); // Việc 3
        },1000)
    },1000)
},1000);

// Promise
    // Lấy API sử dụng promise 
    // Promise có 3 trạng thái:
        // 1. Pending: trạng thái mới khởi tạo promise
        // 2. Fulfilled (Resolved): trạng thái mà promise hoàn thành thành công
        // 3. Rejected: trạng thái mà promise thất bại hoặc bị từ chối

    // Cấu trúc khi tạo ra Promise
        let promise = new Promise (function (resolve, reject) {
            // Function này gọi là Execute Function
            // Hai tham số trên đều là hàm
            // Thành công trả về resolve()
            // Ngược lại trả về reject()
            // Bắt buộc phải trả về 1 in 2 không thì sẽ bị rơi vào trạng thái pending và rò rỉ bộ nhớ (memory leak)

            resolve('Successfully');
        });

    // Ba phương thức chủ yếu thường được sử dụng khi làm việc với Promise
        // Khi thành công resolve sẽ gọi đến callback của then 
        promise.then(function(result) {
            console.log(result);            
        })
        // Khi thất bại reject sẽ gọi đến callback của catch 
        promise.catch(function(result) {
            console.log(result);            
        })
        // Khi 1 in 2 thằng được gọi thì sẽ đều gọi đến callback của finally
        promise.finally(function() {
            console.log('Done!!!');            
        });

    //------------------------------------------------------------------------------------------------------------------------- 

    // Promise chain
        let promiseChain = new Promise((resolve, reject) => {
            resolve();
        });
        // **** Callback của tk đầu return result gì sẽ là tham số của tk dưới
            // promiseChain.then(function() {
            //     return 1;
            // })
            // .then(function(result) {
            //     console.log(result);
            //     return 2;
            // })
            // .then(function(result) {
            //     console.log(result);
            // })
            // .then(function(result) {
            //     console.log(result);
            //     return 3;
            // })
        // *** Khi return là Promise thì phải chờ Promise được giải quyết mới tiếp tục, còn lại thì là tức thì
            // .then(function(){
            //     return new Promise((resolve, reject) => {
            //         setTimeout(function(){
            //             resolve('Successfully');
            //         },3000);
            //     })
            // })
            // .then(function(result) {
            //     console.log(result);
            // })
            // .finally(function(){
            //     console.log('DONE');
            // });

            // VD: Cách tạo đếm 1 2 3 sau mỗi 1s (nhưng ko sử dụng setInterval)

                // function sleep(ms) {
                //     return new Promise((resolve) => {
                //         return setTimeout(resolve,ms);
                //     })
                // }

                // sleep(1000)
                //     .then(function(){
                //         console.log(1);
                //         return sleep(1000);
                //     })
                //     .then(function(){
                //         console.log(2);
                //         return sleep(1000);
                //     })
                //     .then(function(){
                //         console.log(3);
                //         return sleep(1000);
                //     })
                //     .then(function(){
                //         console.log(4);
                //     })
                //     .finally(function(){
                //         console.log("Done!!!")
                //     })

        // VD: Từ hell biến thành ko hell
            function hell(value, cb) {
                return cb(value);
            }

            hell(1, (valueA) => {
                hell(valueA + 1, (valueB) =>{
                    hell(valueB + 1, (valueC) =>{
                        hell(valueC + 1, (valueD) => {
                            console.log(valueD + 1)
                        })
                    })
                })
            })
            // Giải quyết bằng promise

            function notHell(value) {
                return new Promise((resolve) => {
                    resolve(value);
                })
            }

            notHell(1)
                .then((value) => {
                    return value + 1;
                })
                .then((value) => {
                    return value + 1;
                })
                .then((value) => {
                    return value + 1;
                })
                .then((value) => {
                    console.log(value + 1);
                })
                .catch((err) => {
                    console.log('Error!');
                }) 
                .finally(() => {
                    console.log('Done!');
                })
         
    // Các trường hợp khác:

        // Trường mong muốn luôn đúng trả về resolve (ngược lại thì reject) 
            let promiseResolve = Promise.resolve("Luôn luôn thành công");

            promiseResolve.then((result) => {
                console.log(result);
            });

        // Trường hợp không phụ thuộc vào kết quả hàm trước, và cần xử lý song song nhầm tối ưu time
            let promiseW1 = new Promise((resolve, reject) => {
                setTimeout(() => {
                    return resolve([1,2]);
                },1000)
            });

            let promiseW2 = new Promise((resolve, reject) => {
                setTimeout(() => {
                    return resolve([3,4]);
                },2000)
            });
            // Dùng phương thức all để lưu 2 promise 
            Promise.all([promiseW1,promiseW2])
                .then(([result1,result2]) => {
                    console.log(result1.concat(result2));
                })
                .catch((err) => {
                    console.log("Err: ",err);
                })

        // *** Lưu ý: Một promise bị reject thì tất cả trong phương thức Promise.all đều sẽ lỗi và trả về catch(); 

    // Bài tập về mô phỏng lấy thông lấy API (user, comment) xuất ra màn hình  (này khá khó đấy)

    let users = [
        {
            id: 1,
            name: "Phan Thanh Tri"
        },
        {
            id: 2,
            name: "Tran Tu Khanh"
        },
        {
            id: 3,
            name: "Stranger"
        }
    ];

    let comments = [
        {
            id: 1,
            user_id: 1,
            content: "Tôi là chồng của Tú Khanh"
        },
        {
            id: 2,
            user_id: 2,
            content: "Tôi là vợ của Thanh Trí" 
        },
        {
            id: 3,
            user_id: 3,
            content: "Empty" 
        }
    ];

    //Đầu tiên cần có hàm để lấy được nội dung comment (setTimeout() chỉ là mô phỏng việc lấy API do mạng nhanh chậm)
    function getComments() {
        return new Promise((resolve, reject) => {
            setTimeout(function(){
                resolve(comments);
            },1000);
        })
    }

    // Khi đã mảng chứa các userIDs thì từ đó lấy tương ứng ID của mảng users
    function getUsersByIds(userIDs) {
        return new Promise((resolve, reject) => {
            let result = users.filter(function(user) {
                // Lấy ra các Id có trong mảng userIDs
                return userIDs.includes(user.id);
            })
            setTimeout(function(){
                resolve(result);
            },1000)
        });
    }

    getComments()
        .then(function(comment) {
            // Từ mảng comment vừa lấy được ta nhặt ra mảng mới chứa các userIDs
            let userIDs = comment.map(function(comment) {
                return comment.user_id;
            });

            return getUsersByIds(userIDs)
                .then(function(user) {
                    // Để hiển thị ra cả tên và comment thì dùng object để chứa
                    return {
                        users: user,
                        comments: comment
                    }
                })
        })

        .then(function(data) {
            let commentBlock = document.getElementById('comment-block');

            let html = '';

            data.comments.forEach(comment => {
                // Từ comment phải lấy ra user
                let user = data.users.find(function(user) {
                    return user.id === comment.user_id;
                });

                html += `<li>${user.name}: ${comment.content}</li>`
            });

            commentBlock.innerHTML = html;
        })

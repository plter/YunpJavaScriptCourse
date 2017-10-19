(function () {

    var container = document.getElementById("container");


    // function loadData(url, okCallback) {
    //     var xhr = new XMLHttpRequest();
    //     xhr.onload = function () {
    //         okCallback(xhr.responseText);
    //     };
    //     xhr.open("get", url);
    //     xhr.send();
    // }


    function loadData(url) {
        return new Promise(function (resolve) {
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(xhr.responseText);
            };
            xhr.open("get", url);
            xhr.send();
        });
    }


    function init() {
        // loadData("data.txt", function (result) {
        //     console.log(result);
        // });
        // loadData("data1.txt", function (result) {
        //     console.log(result);
        // });
        // loadData("data2.txt", function (result) {
        //     console.log(result);
        // });

        // loadData("data.txt", function (result) {
        //     console.log(result);
        //
        //     loadData("data1.txt", function (result) {
        //         console.log(result);
        //
        //         loadData("data2.txt", function (result) {
        //             console.log(result);
        //         });
        //     });
        // });


        // new Promise(function (resolve, reject) {
        //     // console.log("Hello");
        //     // resolve("Hello World");
        //     reject("my error");
        // }).then(function (result) {
        //     console.log(result);
        // }).catch(function (error) {
        //     console.log(error);
        // });


        // loadData("data.txt").then(function (result) {
        //     console.log(result);
        //
        //     loadData("data1.txt").then(function (result) {
        //         console.log(result);
        //
        //         loadData("data2.txt").then(function (result) {
        //             console.log(result);
        //         });
        //     });
        // });


        // loadData("data.txt").then(function (result) {
        //     console.log(result);
        //
        //     return loadData("data1.txt");
        // }).then(function (result) {
        //
        //     console.log(result);
        //
        //     return loadData("data2.txt");
        // }).then(function (result) {
        //     console.log(result);
        // });

        let urls = ["data.txt", "data1.txt", "data2.txt"];
        urls.slice(1).reduce(function (promise, url) {
            return promise.then(function (result) {
                console.log(result);
                return loadData(url);
            });
        }, loadData(urls[0])).then(function (result) {
            console.log(result);
        });

    }


    init();

})();
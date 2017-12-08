(function () {

    // localStorage.setItem("name", "ZhangSan");

    // console.log(localStorage.getItem("name"));


    var storage = sessionStorage;
    var ta = document.querySelector("textarea");


    function writeData() {
        storage.setItem("data", ta.value);
    }

    function readData() {
        ta.value = storage.getItem("data");
    }


    function main() {
        ta.onkeyup = function (ev) {
            writeData();
        };

        readData();
    }

    main();

})();
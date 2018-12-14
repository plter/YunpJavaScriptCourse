(function () {

    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        let f = new Function(xhr.response);
        f();
    };
    xhr.responseType = 'text';
    xhr.open("get", "hello.js");
    xhr.send();

})();
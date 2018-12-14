(function () {

    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        eval(xhr.response);
    };
    xhr.responseType = 'text';
    xhr.open("get", "hello.js");
    xhr.send();

})();
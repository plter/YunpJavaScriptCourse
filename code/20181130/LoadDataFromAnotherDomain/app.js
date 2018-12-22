(function () {

    let xhr = new XMLHttpRequest();

    xhr.onload = function () {
        console.log(xhr.response);
    };

    xhr.responseType = 'text';
    xhr.open("get", "http://localhost:3000/data");
    xhr.send();

})();
(function () {

    let result = document.querySelector("#result");
    let btnLoad = document.querySelector("#btn-load-content");

    btnLoad.onclick = function () {
        result.innerHTML = "Loading...";

        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            result.innerHTML = xhr.responseText;

            console.log(xhr);
        };
        xhr.onerror = function () {
            result.innerHTML = "Error loading.";
        };
        xhr.open('get', '/ajax');
        xhr.send();
    };
})();
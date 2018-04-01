(function () {

    var form = document.querySelector("form");
    var progressDiv = document.querySelector("#progress");

    form.onsubmit = function (e) {
        e.preventDefault();

        var xhr = new XMLHttpRequest();
        xhr.upload.onprogress = function (ev) {
            progressDiv.innerHTML = ((ev.loaded / ev.total) * 100) + "%";
        };
        xhr.open('post', "/hello");
        xhr.send(new FormData(this));
    }


})();
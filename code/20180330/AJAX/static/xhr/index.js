(function () {

    let form = document.querySelector("form");
    let result = document.querySelector("#result");

    form.onsubmit = function (e) {
        e.preventDefault();

        let xhr = new XMLHttpRequest();
        xhr.onload = () => {
            result.innerHTML = decodeURI(xhr.responseText);
        };

        // xhr.open("get", `/hello?name=${this['name'].value}`);
        xhr.open("post", '/hello');
        // xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        // xhr.send(`name=${this['name'].value}`);
        // xhr.send(new FormData(this));

        var data = new FormData();
        data.append("name", this['name'].value);
        xhr.send(data);
    }

})();
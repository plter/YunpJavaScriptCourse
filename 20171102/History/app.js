(function () {


    var content = document.querySelector("#content");


    content.innerHTML = location.search;

    document.querySelector("#btn-back").onclick = function () {
        history.back();
    };

    document.querySelector("#btn-forward").onclick = function () {
        history.forward();
    };

    document.querySelector("#btn-back2").onclick = function () {
        history.go(-2);
    };

})();
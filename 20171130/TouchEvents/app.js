(function () {


    var rect = document.querySelector(".rect");

    rect.addEventListener("touchstart", function (e) {
        console.log(e);
    });

    rect.addEventListener("touchend", function (e) {
        console.log(e);
    });

    rect.addEventListener("touchmove", function (e) {
        console.log(e);
    });

})();
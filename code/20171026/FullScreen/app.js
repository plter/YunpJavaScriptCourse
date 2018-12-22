(function () {
    var rect = document.querySelector(".rect");

    rect.onclick = function () {
        rect.requestFullscreen = rect.requestFullscreen || rect.webkitRequestFullscreen || rect.mozRequestFullscreen || rect.msRequestFullscreen;
        rect.requestFullscreen();
    };
})();
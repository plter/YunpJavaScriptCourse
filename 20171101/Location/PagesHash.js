(function () {

    var currentPageDiv = document.querySelector("#page1");

    function showCurrentDivByHash() {
        if (location.hash) {
            if (currentPageDiv) {
                // currentPageDiv.style.display = "none";
                fadeOut(currentPageDiv);
            }

            currentPageDiv = document.querySelector(location.hash);
            fadeIn(currentPageDiv);
        }
    }

    function fadeOut(target) {
        var count = 0;

        var value = 1;
        target.style.opacity = value;
        var speed = 1 / 50;
        var timerId = setInterval(function () {
            count++;

            value -= speed;
            target.style.opacity = value;

            if (count >= 50) {
                clearInterval(timerId);
                target.style.display = "none";
            }
        }, 20);
    }

    function fadeIn(target) {
        var count = 0;

        var value = 0;
        target.style.display = "block";
        target.style.opacity = value;
        var speed = 1 / 50;
        var timerId = setInterval(function () {
            count++;

            value += speed;
            target.style.opacity = value;

            if (count >= 50) {
                clearInterval(timerId);
            }
        }, 20);
    }


    function addListeners() {
        window.onhashchange = function () {
            showCurrentDivByHash();
        };
    }

    function main() {
        addListeners();

        if (location.hash) {
            currentPageDiv = document.querySelector(location.hash);
        }
        fadeIn(currentPageDiv);
    }

    main();
})();
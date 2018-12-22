(function () {

    var container = document.querySelector("#container");
    var webContent = document.querySelector("#web-content");
    var links = document.querySelectorAll("a");

    function setContainerHeightWithWindow() {
        container.style.height = window.innerHeight + "px";
    }

    function windowResizeHandler() {
        setContainerHeightWithWindow();
    }

    function link_clickedHandler(e) {
        e.preventDefault();

        webContent.src = this.href;
    }

    function addListeners() {
        window.onresize = windowResizeHandler;

        links.forEach(function (t) {
            t.onclick = link_clickedHandler;
        });
    }


    function init() {
        setContainerHeightWithWindow();
        addListeners();
    }

    init();

})();
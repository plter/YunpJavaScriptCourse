(function () {

    var containers = document.querySelectorAll(".container");
    var myTextDiv = document.querySelector("#my-text");
    var yunpTextDiv = document.querySelector("#yunp-text");

    function container_dragOverHandler(e) {
        e.preventDefault();
    }

    function container_dropHandler(e) {
        var id = e.dataTransfer.getData("text/plain");
        if (id) {
            var node = document.querySelector("#" + id);
            node.parentNode.removeChild(node);
            e.target.appendChild(node);
        }
    }

    function dragStartHandler(e) {
        e.dataTransfer.setData("text/plain", e.target.id);
    }


    function addListeners() {
        containers.forEach(function (c) {
            c.addEventListener("dragover", container_dragOverHandler);
            c.addEventListener("drop", container_dropHandler);
        });

        myTextDiv.addEventListener("dragstart", dragStartHandler);
        yunpTextDiv.addEventListener("dragstart", dragStartHandler);
    }


    function main() {
        addListeners();
    }

    main();
})();
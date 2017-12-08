(function () {

    var targetDiv = document.querySelector("#target-div");

    targetDiv.addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    targetDiv.addEventListener("drop", function (e) {
        e.stopPropagation();
        e.preventDefault();

        var data = e.dataTransfer.getData("text/plain");
        if (data) {
            targetDiv.innerHTML = data;
        }
    });


})();
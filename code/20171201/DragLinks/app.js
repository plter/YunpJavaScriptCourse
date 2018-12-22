(function () {


    var targetDiv = document.querySelector("#target-div");
    var yunpLogo = document.querySelector("#yunp-logo");


    yunpLogo.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("text/uri-list", "http://yunp.top");
        e.dataTransfer.setData("text/plain", "http://yunp.top");
    });

    targetDiv.addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    targetDiv.addEventListener("drop", function (e) {
        e.preventDefault();
        e.stopPropagation();

        console.log(e.dataTransfer.getData("text/plain"));
        console.log(e.dataTransfer.getData("text/html"));
        console.log(e.dataTransfer.getData("text/uri-list"));
    })

})();
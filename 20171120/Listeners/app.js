(function () {

    var btnClickme = document.querySelector("#btn-click-me");

    // btnClickme.onclick = function () {
    //     alert("Hello");
    //     btnClickme.onclick = null;
    // }

    function btnClickmeClickedHandler() {
        alert("Hello");

        btnClickme.removeEventListener("click", btnClickmeClickedHandler);
    }

    btnClickme.addEventListener("click", function () {
        console.log("Hello");

        btnClickme.removeEventListener("click", arguments.callee);
    });

    btnClickme.addEventListener("click", btnClickmeClickedHandler);
})();
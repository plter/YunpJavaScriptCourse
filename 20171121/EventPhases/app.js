(function () {

    var a = document.querySelector(".a");
    var b = document.querySelector(".b");
    var b1 = document.querySelector(".b1");
    var c = document.querySelector(".c");

    // a.addEventListener("click", function (e) {
    //     console.log("a clicked");
    //
    //     console.log(e.eventPhase);
    // });
    //
    // b.addEventListener("click", function (e) {
    //     console.log("b clicked");
    //     console.log(e.eventPhase);
    // });
    //
    // b1.addEventListener("click", function (e) {
    //     console.log("b1 clicked");
    //     console.log(e.eventPhase);
    // });
    //
    // c.addEventListener("click", function (e) {
    //     console.log("c clicked");
    //     console.log(e.eventPhase);
    // });
    //
    // a.addEventListener("click", function (e) {
    //     console.log("a clicked");
    //
    //     console.log(e.eventPhase);
    //
    //     e.stopPropagation();
    // }, true);
    //
    // b.addEventListener("click", function (e) {
    //     console.log("b clicked");
    //     console.log(e.eventPhase);
    // }, true);
    //
    // c.addEventListener("click", function (e) {
    //     console.log("c clicked");
    //     console.log(e.eventPhase);
    // }, true);


    a.addEventListener("click", function (e) {
        console.log("a clicked 1");
        // e.stopPropagation();
        e.stopImmediatePropagation();
    });

    a.addEventListener("click", function (e) {
        console.log("a clicked 2");
    });

})();
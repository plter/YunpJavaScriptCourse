(function () {

    var div = document.createElement("div");
    div.className = "red-rect";

    document.body.appendChild(div);


    // div.addEventListener("click", function (e) {
    //     console.log("Div clicked");
    // });
    //
    // div.addEventListener("dblclick", function (e) {
    //     console.log("Div double clicked");
    // });
    //
    //
    // div.addEventListener("contextmenu", function (e) {
    //     console.log("Show context menu");
    // });


    div.addEventListener("mousedown", function (e) {
        // console.log("Mouse down", e);
        // 001 010 100
        //  001    |   101
        // |100    |  &010
        // =101    |  =000

        if ((e.buttons & 1) > 0) {
            console.log("左键被按下" + Date.now());
        }
        if (e.buttons & 4) {
            console.log("中键被按下" + Date.now());
        }
        if (e.buttons & 2) {
            console.log("右键被按下" + Date.now());
        }
    });

})();
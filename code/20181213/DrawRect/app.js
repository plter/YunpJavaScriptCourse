(function () {

    let canvas = document.querySelector("canvas");
    let context2d = canvas.getContext("2d");


    context2d.lineWidth = 10;
    // context2d.strokeStyle = "#0000ff";
    // context2d.lineCap = "round";
    context2d.lineJoin = "round";
    // context2d.moveTo(20, 20);
    // context2d.lineTo(100, 100);
    // context2d.lineTo(200, 100);
    // context2d.lineTo(20, 20);
    // context2d.stroke();
    //
    // context2d.moveTo(200, 200);
    // context2d.lineTo(200, 250);
    // context2d.stroke();


    context2d.fillStyle = "#ff0000";
    context2d.strokeStyle = "#0000ff";
    context2d.fillRect(100, 100, 200, 100);
    context2d.strokeRect(100, 100, 200, 100);
})();
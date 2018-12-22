(function () {

    let canvas = document.querySelector("canvas");
    let context2d = canvas.getContext("2d");

    // context2d.arc(100, 100, 50, 0, Math.PI / 2, true);
    context2d.fillStyle = "blue";
    context2d.lineWidth = 5;
    context2d.lineCap = "round";
    context2d.lineJoin = "round";
    context2d.moveTo(100, 100);
    context2d.lineTo(150, 100);
    context2d.arc(100, 100, 50, 0, Math.PI / 2);
    context2d.lineTo(100, 100);
    context2d.fill();
    context2d.stroke();
})();
(function () {

    let canvas = document.querySelector("canvas");
    let context2d = canvas.getContext("2d");

    // context2d.arc(100, 100, 50, 0, Math.PI / 2, true);
    context2d.fillStyle = "blue";
    context2d.arc(100, 100, 50, 0, Math.PI / 2);
    context2d.fill();
    context2d.stroke();
})();
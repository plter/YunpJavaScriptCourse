(function () {

    let canvas = document.querySelector("canvas");
    let context2d = canvas.getContext("2d");

    // context2d.translate(50, 50);
    // context2d.scale(1, 2);
    context2d.save();
    context2d.translate(300, 100);
    context2d.rotate(Math.PI / 4);
    context2d.fillRect(-50, -25, 100, 50);
    context2d.restore();

    context2d.save();
    context2d.beginPath();
    context2d.translate(100, 100);
    context2d.arc(0, 0, 50, 0, Math.PI * 2);
    context2d.closePath();
    context2d.fill();
    context2d.restore();

})();
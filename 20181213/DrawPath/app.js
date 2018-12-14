(function () {

    let canvas = document.querySelector("canvas");
    let context2d = canvas.getContext("2d");


    // context2d.lineWidth = 5;
    // context2d.beginPath();
    // context2d.arc(50, 50, 50, 0, Math.PI / 2);
    // // context2d.closePath();
    // context2d.stroke();

    // context2d.beginPath();
    // context2d.arc(200, 50, 50, 0, Math.PI / 2);
    // // context2d.closePath();
    // context2d.stroke();


    let p2d = new Path2D();
    context2d.translate(100, 100);
    p2d.arc(0, 0, 50, 0, Math.PI * 2);

    context2d.stroke(p2d);

})();
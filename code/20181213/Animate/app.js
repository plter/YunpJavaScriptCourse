(function () {

    let canvas = document.querySelector("canvas");
    let context2d = canvas.getContext("2d");


    function rotateRect(angle) {
        context2d.clearRect(0, 0, 500, 400);
        context2d.save();
        context2d.translate(100, 100);
        context2d.rotate(angle);
        context2d.fillRect(-50, -25, 100, 50);
        context2d.restore();
    }

    let angle = 0;
    // setInterval(function () {
    //     angle += 0.01;
    //     rotateRect(angle);
    // }, 100);

    function animate() {
        angle += 0.01;
        rotateRect(angle);

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

})();
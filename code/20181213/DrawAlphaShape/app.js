(function () {

    let canvas = document.querySelector("canvas");
    let context2d = canvas.getContext("2d");


    context2d.fillStyle = 'blue';
    context2d.fillRect(0, 0, 100, 100);

    context2d.globalAlpha = 0.3;
    context2d.fillStyle = 'red';
    context2d.fillRect(50, 50, 100, 100);
})();
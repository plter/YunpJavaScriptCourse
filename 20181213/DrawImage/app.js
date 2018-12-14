(function () {

    let canvas = document.querySelector("canvas");
    let context2d = canvas.getContext("2d");

    let img = document.createElement("img");
    img.src = "icon_128x128.png";
    img.onload = function () {
        // context2d.drawImage(img, 0, 0, 50, 50, 0, 0, 50, 50);
        context2d.drawImage(img, 0, 0);
    };
})();
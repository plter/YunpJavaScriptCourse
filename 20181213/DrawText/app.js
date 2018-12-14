(function () {

    let canvas = document.querySelector("canvas");
    let context2d = canvas.getContext("2d");

    let fontSize = 50;
    context2d.font = `${fontSize}px Courier`;
    context2d.fillText("Hello World", 0, fontSize);
})();
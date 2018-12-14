(function () {

    let canvas = document.querySelector("canvas");
    let context2d = canvas.getContext("2d");

    function loadImg(src) {
        return new Promise(resolve => {
            let img = new Image();
            img.src = src;
            img.onload = function () {
                resolve(img);
            };
        });
    }

    async function main() {
        context2d.beginPath();
        context2d.arc(100, 100, 100, 0, Math.PI * 2);
        context2d.closePath();
        context2d.clip();

        let img = await loadImg("dog.jpg");
        context2d.drawImage(img, 0, 0,);
    }

    main();
})();
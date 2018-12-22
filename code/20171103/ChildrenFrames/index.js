(function () {

    // console.log(frames);


    var firstIFrame = document.querySelector("iframe");

    var child = firstIFrame.contentWindow;
    // var child = frames[0];

    child.onload = function () {
        child.document.body.innerHTML = "<h1>Hello</h1>";
    };

})();
(function () {

    var container = document.querySelector("#container");


    container.addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    container.addEventListener("drop", function (e) {
        e.preventDefault();

        var files = e.dataTransfer.files;

        if (files && files.length) {
            var first = files[0];

            if (first.type === "image/png") {
                var reader = new FileReader();
                reader.onload = function () {
                    container.innerHTML = "<img width='600' src='" + reader.result + "'>"
                };
                reader.readAsDataURL(first);
            }
        }
    });

})();
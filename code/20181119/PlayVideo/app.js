(function () {

    let player = document.querySelector("video");
    let btnBrowseForVideo = document.querySelector("#btn-browse-file");

    function main() {
        btnBrowseForVideo.onchange = function (e) {
            if (this.files.length) {
                let file = this.files[0];

                let reader = new FileReader();
                reader.onload = e => player.src = reader.result;
                reader.readAsDataURL(file);
            }
        }
    }

    main();

})();
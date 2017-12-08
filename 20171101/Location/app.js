(function () {


    var btnReload, urlInput, btnAssign, btnReplace;

    function findElements() {
        btnReload = document.querySelector(".btn-reload");
        btnAssign = document.querySelector(".btn-assign");
        btnReplace = document.querySelector(".btn-replace");

        urlInput = document.querySelector(".url-input");
    }

    function btnReloadClickedHandler() {
        location.reload();
    }

    function btnAssignClickedHandler() {
        location.assign(urlInput.value);
    }

    function btnReplaceClickedHandler() {
        location.replace(urlInput.value);
    }

    function addListeners() {
        btnReload.onclick = btnReloadClickedHandler;
        btnAssign.onclick = btnAssignClickedHandler;
        btnReplace.onclick = btnReplaceClickedHandler;
    }

    function main() {
        findElements();
        addListeners();
    }


    main();
})();
(function () {

    var result = document.querySelector("#result");

    document.querySelector("#btn-show-alert").onclick = function () {
        alert("Hello World");
    };

    document.querySelector("#btn-show-confirm").onclick = function () {
        result.innerHTML = confirm("请确认该操作");
    };

    var rects = document.querySelectorAll(".rect");

    function r_clickedHandler() {
        if (confirm("你真的要删除该项吗？")) {
            this.parentNode.removeChild(this);
        }
    }

    rects.forEach(function (r) {
        r.onclick = r_clickedHandler;
    });

    document.querySelector("#btn-show-prompt").onclick = function () {
        result.innerHTML = prompt("请输入内容", "");
    };
})();
(function () {

    function Rect(num) {
        var e = document.createElement("div");
        e.className = "rect";
        e.innerHTML = "点击移除 " + num;

        e.onclick = function () {
            e.parentNode.removeChild(e);
        };

        return e;
    }

    function RedRect(num) {
        var r = Rect(num);

        r.style.backgroundColor = "red";

        return r;
    }

    function GreenRect(num) {
        var r = Rect(num);

        r.style.backgroundColor = "green";

        return r;
    }


    function main() {
        var e;
        for (var i = 0; i < 1000; i++) {
            e = GreenRect(i);
            document.body.appendChild(e);
        }
    }

    main();
})();
(function () {

    var container = document.querySelector("#container");

    function Rect(width, height, color) {

        var self = document.createElement("div");

        self._width = width;
        self._height = height;
        self._color = color;

        self.style.width = self._width + "px";
        self.style.height = self._height + "px";
        self.style.backgroundColor = self._color;
        self.style.margin = "2px";

        self.innerHTML = "Click to remove";

        self.onclick = function () {
            if (self.dispatchEvent(new Event("rectWillClose", {cancelable: true}))) {
                self.parentNode.removeChild(self);
                self.dispatchEvent(new Event("rectClosed"));
            }
        };

        return self;
    }


    for (var i = 0; i < 3; i++) {
        var r = Rect(100, 100, "red");
        container.appendChild(r);

        r.addEventListener("rectWillClose", function (e) {
            if (!confirm("你确定要移除这个方块吗？")) {
                e.preventDefault();
            }
        });
    }


})();
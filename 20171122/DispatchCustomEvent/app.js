(function () {


    var container = document.querySelector("#container");

    function Rect(color, width, height) {
        this._color = color;
        this._width = width;
        this._height = height;

        yunp.EventTarget.call(this);
    }

    Rect.prototype = new yunp.EventTarget();

    Rect.prototype.getHTMLNode = function () {
        if (!this._htmlNode) {
            this._htmlNode = document.createElement("div");
            this._htmlNode.innerHTML = "Click to close";
            with (this._htmlNode.style) {
                backgroundColor = this._color;
                width = this._width + "px";
                height = this._height + "px";
                margin = "2px";
            }

            (function (self) {
                self._htmlNode.onclick = function () {
                    self.dispatchEvent({type: "rectWillClose"});

                    if (this.parentNode) {
                        this.parentNode.removeChild(this);
                    }
                }
            })(this);
        }

        return this._htmlNode;
    };


    var r = new Rect("red", 100, 100);
    r.addEventListener("rectWillClose", function () {
        alert("方块即将关闭");
    });
    container.appendChild(r.getHTMLNode());
})();
(function () {

    var clockElements = document.querySelectorAll(".clock");

    function Clock(clockElement) {
        this._element = clockElement;
        this._shadowDom = this._element.attachShadow({mode: "closed"});

        this.showTime = function (time) {
            this._shadowDom.innerHTML = "<div>" + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + "</div>";
        }
    }

    var clocks = [];
    clockElements.forEach(function (ce) {
        clocks.push(new Clock(ce));
    });

    function showTime() {
        var t = new Date();

        clocks.forEach(function (c) {
            c.showTime(t);
        });
    }

    setInterval(showTime, 1000);
    showTime();
})();
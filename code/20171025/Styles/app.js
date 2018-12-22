(function () {

    // var rect = document.querySelector("#rect");
    // rect.style.width = "100px";
    // rect.style.height = "100px";
    // rect.style.backgroundColor = "red";


    var rects = document.querySelectorAll(".rect");


    function rectClicked() {
        if (this.isRed) {
            // this.style.backgroundColor = "green";
            // this.classList.remove("red-rect");
            // this.classList.add("green-rect");
            removeClass(this, "red-rect");
            addClass(this, "green-rect");
            this.isRed = false;
        } else {
            // this.style.backgroundColor = "red";
            // this.classList.remove("green-rect");
            // this.classList.add("red-rect");
            removeClass(this, "green-rect");
            addClass(this, "red-rect");
            this.isRed = true;
        }
    }


    function hasClass(element, className) {
        return element.className.indexOf(className) > -1;
    }

    function removeClass(element, className) {
        var classes = element.className.split(" ");
        var index = classes.indexOf(className);
        if (index > -1) {
            classes.splice(index, 1);
            element.className = classes.join(" ");
        }
    }

    function addClass(element, className) {
        var classes = element.className.split(" ");
        var index = classes.indexOf(className);
        if (index === -1) {
            classes.push(className);
            element.className = classes.join(" ");
        }
    }


    rects.forEach(rect => {
        // rect.style.backgroundColor = "red";
        // rect.className = "rect red-rect";
        // rect.classList.add("red-rect");
        addClass(rect, "red-rect");
        rect.isRed = true;
        rect.onclick = rectClicked;
    });

})();
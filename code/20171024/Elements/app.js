(function () {

    var container = document.getElementById("container");
    // container.innerHTML = "<a href='http://yunp.top'>TOP YUNP</a>";

    var aNode = document.createElement("a");
    aNode.href = "http://yunp.top";
    aNode.innerHTML = "TOP YUNP";
    container.appendChild(aNode);


    function addButton(id) {
        var div = document.createElement("div");
        var btn = document.createElement("button");
        btn.innerHTML = "Click button[" + id + "] to remove me";
        btn.onclick = function () {
            div.parentNode.removeChild(div);
        };
        div.appendChild(btn);
        container.appendChild(div);
    }

    for (var i = 0; i < 10; i++) {
        addButton(i);
    }

})();
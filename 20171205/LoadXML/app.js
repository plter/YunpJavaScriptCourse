(function () {

    var xhr = new XMLHttpRequest();

    xhr.onload = function () {
        var doc = xhr.responseXML;

        var s = doc.querySelector("student");
        console.log(s.getAttribute("name"));
    };

    xhr.open("get", "data.xml");
    xhr.send();

})();
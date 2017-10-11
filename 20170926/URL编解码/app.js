(function () {

    var arg = "http://localhost:63342/URL%E7%BC%96%E8%A7%A3%E7%A0%81/index.html?_ijt=ijepqv0kgj2ikaqs4jo88fnot4";
    // var value = encodeURI(arg);
    var value = decodeURI(arg);
    // value = encodeURIComponent(value);
    value = encodeURI(value);

    console.log(value);

})();
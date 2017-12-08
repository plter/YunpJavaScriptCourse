(function () {

    // document.cookie = "World";

    // document.cookie = "name=yunp";

    document.cookie = "age=2";

    console.log(document.cookie);

    console.log(getCookieValue("age"));


    function getCookieValue(key) {
        var start = document.cookie.indexOf(key + "=");
        var value;

        if (start > -1) {
            var end = document.cookie.indexOf(";", start);
            if (end === -1) {
                end = document.cookie.length;
            }
            value = document.cookie.substring(start + key.length + 1, end);
        }

        return value;
    }


})();
(function () {
    // console.log("Hello World");


    // window.callback = function (data) {
    //     console.log(data);
    // };


    function loadJsonpData(url, callback) {
        window.callbackId = window.callbackId || 1;
        (function (currentId) {
            let callbackName = "callback_" + currentId;
            window[callbackName] = function (data) {
                delete window[callbackName];

                callback(data);
            };

            let script = document.createElement("script");
            script.src = `${url}?callback=${callbackName}`;
            document.body.appendChild(script);
        })(window.callbackId);

        window.callbackId++;
    }

    loadJsonpData("http://127.0.0.1:3000/jsonp", function (data) {
        console.log(data);
    });
    // loadJsonpData("http://127.0.0.1:3000/jsonp", function (data) {
    //     console.log(data);
    // });
})();
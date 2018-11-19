(function () {

    let socket = io();

    let outputText = document.querySelector("textarea");

    socket.on('chat', function (data) {
        console.log(data);
        outputText.value += data + "\n";
    });

    document.querySelector("form").onsubmit = function (e) {
        e.preventDefault();

        let inputValue = this['input'].value;
        if (inputValue) {
            this['input'].value = '';

            socket.emit('chat', inputValue);
        }
    };

})();
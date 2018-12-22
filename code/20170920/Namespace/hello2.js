window.myns = window.myns || {};

(() => {
    function hello() {
        console.log("Hello from hello2");
    }

    window.myns.h2 = hello;
})();


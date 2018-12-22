window.myns = window.myns || {};

(() => {
    function hello() {
        console.log("Hello from hello1");
    }

    window.myns.h1 = hello;
})();

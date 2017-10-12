(function () {


    let s = new Set();
    s.add("Hello");
    s.add(1);
    s.add(1);
    s.add("Hello");

    // console.log(s);
    // s.forEach(item => console.log(item));

    for (let [key, value] of s.entries()) {
        console.log(key, value);
    }

})();
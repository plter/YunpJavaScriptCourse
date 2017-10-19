(function () {

    function* run() {
        console.log("Step 1");
        yield;
        console.log("Step 2");

        let count = 0;
        while (true) {
            count++;
            console.log(count);
            yield;
        }
    }

    let g = run();

    // g.next();
    // g.next();

    // console.log(g);


    document.getElementById("btn-next").onclick = function () {
        g.next();
    };

})();
(function () {

    // console.log("立即执行");
    //
    // var timerId = setTimeout(function (name) {
    //     console.log("一秒后执行," + name);
    // }, 3000, "yunp.top");
    //
    // console.log(timerId);
    //
    // clearTimeout(timerId);


    var count = 0;
    var timerId = setInterval(function () {
        count++;
        console.log("count:" + count);

        if (count >= 10) {
            clearInterval(timerId);
        }
    }, 1000);

})();
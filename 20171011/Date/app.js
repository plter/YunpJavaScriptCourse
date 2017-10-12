(function () {

    // var d = new Date();
    // console.log(d.getTime());

    var d = new Date(Date.now() - 50 * 24 * 60 * 60 * 1000);

    console.log(`${d.getMonth() + 1}月${d.getDate()}日，星期${d.getDay()}`);
})();
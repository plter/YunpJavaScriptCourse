(function () {

    var str = "Hello world 1000 hello , hello world 100 200 price:￥100 price:￥200 price:$100";

    // var rp = /\w+/ig;
    // var rp = /[a-zA-Z]+/g;
    // var rp = /[a-zA-Z]+/g;
    // var rp = /\d+/ig;
    // var rp = /[^0-9]+/g;

    var rp = /price:([￥\$])(\d+)/g;


    // console.log(rp.test(str));
    // console.log(rp.exec(str));
    // console.log(rp.exec(str));

    var result;

    while (result = rp.exec(str)) {
        console.log(result);
    }

})();
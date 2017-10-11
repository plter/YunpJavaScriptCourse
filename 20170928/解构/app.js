(function () {

    // let arr = [2, "Hello", "目标值"];
    //
    // let [num, str, arg = "yunp.top"] = arr;
    //
    // console.log(num, str, arg);


    // let obj = {name: "yunp", age: 1, data: "yunp.top"};
    // let {name, age, data = "Hello World"} = obj;
    // console.log(name, age, data);

    function getNumbers() {
        return [2, 3, 4];
    }

    let [a, b, c] = getNumbers();

    console.log(a, b, c);

})();
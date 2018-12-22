(function () {

    var obj = {name: "yunp", age: 1};
    // obj.name = 'yunp';
    // obj.age = 1;

    // obj.name = undefined;
    // delete obj.name;
    // console.log(obj);
    // console.log(obj.hasOwnProperty("name"));

    // if (obj.hasOwnProperty("name")) {
    //     console.log("该对象拥有name成员");
    // } else {
    //     console.log("该对象没有name成员");
    // }
    //
    // if (obj.name) {
    //     console.log("该对象有name值");
    // } else {
    //     console.log("该对象没有name值");
    // }

    obj["name"] = "yunp.top";
    console.log(obj["name"]);

})();
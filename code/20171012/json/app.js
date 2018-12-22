(function () {

    // var data = "XiaoMing";
    // var student = {name: "XiaoMing", age: 10};
    //
    // var studentJSONString = JSON.stringify(student);
    // console.log(studentJSONString);

    var json = "{\"name\":\"XiaoMing\",\"age\":10}";
    var obj = JSON.parse(json);
    console.log(obj.name);


})();
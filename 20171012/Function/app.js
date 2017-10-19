"use strict";//使用严格模式

(function () {

    // function hello() {
    //     console.log("Hello " + this.name);
    // }

    // var hello = function () {
    //     console.log("Hello World");
    // };

    // hello();

    // hello("XiaoMing");

    var student = {
        name: "XiaoMing",
        age: 10,
        hello: function () {
            console.log("Hello " + this.name);
        }
    };
    // var h = hello.bind(student);

    // h();

    // h.call(student, "XiaoMing");
    // h.apply(null, ["XiaoMing"]);

    // h();

    // student.hello.call(null);
    student.hello();
})();
(function () {

    // console.log(Symbol("name") === Symbol("name"));
    // console.log(Symbol.for("name") === Symbol.for("name"));


    // let student = {};
    // student.name = "XiaoMing";
    // student.sayHello = function () {
    //     console.log("Hello " + this.name);
    // };
    //
    // console.log(student.name);


    function createStudent(name) {

        let nameSymbol = Symbol();

        let s = {};

        s[nameSymbol] = name;

        s.sayHello = function () {
            console.log("Hello " + s[nameSymbol]);
        };

        return s;
    }

    let s = createStudent("XiaoMing");
    s.sayHello();
    // console.log(s[Symbol()]);

})();
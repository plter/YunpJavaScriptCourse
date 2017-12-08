(function () {


    function Student(name, age, gender) {
        this._name = name;
        this._age = age;
        this._gender = gender;

        this.sayHello = function () {
            console.log(this._name + " say hello");
        };

        // this.setName = function (value) {
        //     this._name = value;
        // };
        //
        // this.getName = function () {
        //     return this._name;
        // }
    }

    // Object.defineProperty(Student.prototype, "name", {
    //     get: function () {
    //         return this._name;
    //     },
    //     set: function (value) {
    //         this._name = value;
    //     }
    // });

    Object.defineProperties(Student.prototype, {
        name: {
            get: function () {
                return this._name;
            },
            set: function (value) {
                this._name = value;
            }
        },
        age: {
            get: function () {
                return this._age;
            },
            set: function (value) {
                this._age = value;
            }
        },
        gender: {
            get: function () {
                return this._gender;
            },
            set: function (value) {
                this._gender = value;
            }
        }
    });


    function BoyStudent(name, age) {
        Student.call(this, name, age, "男");
    }

    BoyStudent.prototype = new Student();

    // var b = new BoyStudent("张三", 12);
    // b.sayHello();
    //
    // var s = new Student("小丽", 10, "女");
    //
    // console.log(b instanceof Student);


    var s = new Student("张三", 10, "男");
    s.name = "李四";
    console.log(s.name);


})();
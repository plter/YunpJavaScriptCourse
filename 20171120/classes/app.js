(function () {


    class Student {


        constructor(name, age, gender) {
            this._name = name;
            this._age = age;
            this._gender = gender;
        }

        sayHello() {
            console.log(this._name + " say hello");
        }

        get name() {
            return this._name;
        }

        set name(value) {
            this._name = value;
        }


        get age() {
            return this._age;
        }

        set age(value) {
            this._age = value;
        }

        get gender() {
            return this._gender;
        }

        set gender(value) {
            this._gender = value;
        }
    }

    var s = new Student("张三", 12, "男");
    console.log(s.name);
    s.name = "李四";
    console.log(s.name);


})();
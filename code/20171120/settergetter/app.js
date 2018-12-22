(function () {


    function Student(name, age, gender) {
        return {
            _name: name,
            _age: age,
            _gender: gender,
            sayHello: function () {
                console.log(this._name + " say Hello");
            },
            get name() {
                return this._name;
            },
            set name(value) {
                this._name = value;
            }
        };
    }

    var s = Student("张三", 12, "男");
    s.name = "李四";
    console.log(s.name);

})();
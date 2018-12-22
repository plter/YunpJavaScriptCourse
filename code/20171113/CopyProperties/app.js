(function () {


    var EatAble = {
        eat: function (food) {
            console.log(this._name + " eat " + food);
        }
    };


    function copyProperties(dist, src) {
        for (var k in src) {
            dist[k] = src[k];
        }
        return dist;
    }


    function Student(name, age, gender) {
        var o = {};
        o._name = name;
        o._age = age;
        o._gender = gender;

        o.sayHello = function () {
            console.log(this._name + ' say hello');
        };

        return o;
    }

    function BoyStudent(name, age) {
        return copyProperties(copyProperties({}, Student(name, age, "男")), EatAble);
    }

    var s = BoyStudent("张三", 12);
    s.sayHello();
    s.eat("苹果");


})();
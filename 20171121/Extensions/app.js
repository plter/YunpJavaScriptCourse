(function () {


    Array.prototype.remove = function (value) {
        var index = this.indexOf(value);
        if (index > -1) {
            this.splice(index, 1);
        }
    };


    var arr = ["Hello", "World", 100];
    arr.remove("Hello");

    console.log(arr);

})();
(function () {

    // var arr = ["hello", 10];
    // arr.length = 100;
    // arr.fill(0);

    // arr.push("world");
    // arr.pop();
    // arr.shift();
    // arr.splice(1, 1, "yunp");
    // arr.splice(0, arr.length);

    // var arr1 = [1, 2, 3];
    // var newArr = arr.concat(100, "你好");
    // var newArr = arr.concat(arr1);
    // newArr.reverse();

    // console.log(newArr);

    // var words = "Hello World";

    // console.log(words.split("").reverse());
    // words = words.split("").reverse().join("");
    // console.log(words);

    // let en = arr.entries();
    // let item = en.next();
    // console.log(item);

    // let item;
    // while (!(item = en.next()).done) {
    //     console.log(`index:${item.value[0]},value:${item.value[1]}`);
    // }

    // for (let key of arr.keys()) {
    //     console.log(`key:${key},value:${arr[key]}`);
    // }

    // for (let i = 0; i < arr.length; i++) {
    //     console.log(arr[i]);
    // }

    // for(let value of arr){
    //     console.log(value);
    // }

    // arr.forEach(function (value, index, arr) {
    //     console.log(value, index, arr);
    // });


    // let arr = [11, 15, 13, 6, 2, 5, 20, 13, 8, "hello", "world", 'apple'];
    let arr = [11, 15, 13, 6, 2, 5, 20, 13, 8];

    // console.log(arr.every(value => value > 10));
    // console.log(arr.some(value => value > 10));

    // console.log(arr.filter(value => value > 10));


    // console.log(arr.indexOf(13));
    // console.log(arr.lastIndexOf(13));

    // console.log(arr.findIndex(value => value > 17));
    // console.log(arr.find(value => value > 17));

    // console.log(arr.map(value => value * 2));

    // console.log(arr.reduce((a, b) => a + b));

    // arr.sort();

    arr.sort((a, b) => b - a);

    console.log(arr);

})();
(function () {

    // for (let i = 0; i < 100; i++) {
    //     // console.log(i);
    // }

    // var arr = [1, "Hello", 10, "World"];
    // for (var index in arr) {
    //     console.log(arr[index]);
    // }
    //
    // for (var value of arr) {
    //     console.log(value);
    // }

    // console.log(i);

    // let index = 0;
    // while (index < 100) {
    //     console.log(index);
    //     index++;
    // }

    // do {
    //     console.log(index);
    //     index++;
    // } while (index < 100);

    // do {
    //     console.log("Hello World");
    // } while (false);

    // for (let i = 0; i < 100; i++) {
    //     if (i === 50) {
    //         // break;
    //         continue;
    //     }
    //
    //     console.log(i);
    // }

    // var a = '10';
    // var b = 10;
    //
    // console.log(a === b);

    // function print0To100() {
    //     for (let i = 0; i < 100; i++) {
    //         if (i === 50) {
    //             return;
    //         }
    //         console.log(i);
    //     }
    // }
    // print0To100();

    OUTER_LOOP:
        for (let i = 0; i < 100; i++) {
            let line = "第" + i + "行";
            for (let j = 0; j < 10; j++) {
                line += j + ",";

                if (i + j === 50) {
                    break OUTER_LOOP;
                }
            }
            console.log(line);
        }

})();
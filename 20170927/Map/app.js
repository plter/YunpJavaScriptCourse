(function () {

    let map = new Map();
    map.set("name", "yunp");
    map.set("age", 1);
    // map.delete("age");
    // console.log(map.has("age"));

    // for(let value of map){
    //     console.log(value);
    // }

    // for(let value of map.values()){
    //     console.log(value);
    // }

    // for (let key of map.keys()) {
    //     console.log(key, map.get(key));
    // }

    for (let [key, value] of map) {
        console.log(key + "=" + value);
    }

})();
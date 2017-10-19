(function () {

    // var numsTarget = {};
    //
    // var nums = new Proxy(numsTarget, {
    //     get: function (target, property) {
    //         return target[property] || 0;
    //     }
    // });
    // // nums.score = 100;
    //
    // console.log(nums.score);


    function requireAdminRole(f) {
        return new Proxy(f, {
            apply: function (target, thisArg) {
                if (thisArg.role === "admin") {
                    target.call(thisArg);
                } else {
                    console.error("Access denied");
                }
            }
        });
    }


    let user = {
        role: "normal",
        name: "ZhangSan",
        deleteContent: requireAdminRole(function () {
            console.log("Delete content");
        })
    };


    user.deleteContent();
})();
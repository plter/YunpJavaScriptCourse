(function () {

    function showLevel(score) {
        if (score > 100) {
            console.log("不在范围内");
        } else if (score >= 90) {
            console.log("优秀");
        } else if (score >= 80) {
            console.log("良好");
        } else if (score >= 70) {
            console.log("还可以");
        } else if (score >= 60) {
            console.log("及格");
        } else if (score >= 0) {
            console.log("不及格");
        } else {
            console.log("不在范围内");
        }
    }

    // showLevel(71);

    function showLevel1(score) {
        // console.log(score / 10);
        switch (Math.floor(score / 10)) {
            case 10:
                console.log("满分");
                break;
            case 9:
                console.log("优秀");
                break;
            case 8:
                console.log("良好");
                break;
            case 7:
                console.log("还可以");
                break;
            case 6:
                console.log("及格");
                break;
            case 5:
            case 4:
            case 3:
            case 2:
            case 1:
            case 0:
                console.log("不及格");
                break;
            default:
                console.log("不在范围内");
        }
    }

    showLevel1(-10);
    
})();
(function () {

    function loadData(url) {
        return new Promise(function (resovle, reject) {
            let xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resovle(xhr.responseText);
            };
            xhr.open("get", url);
            xhr.send();
        });
    }

    async function init() {
        // let result = await loadData("data1.txt");
        // console.log(result);

        let urls = ["data1.txt", "data2.txt", "data3.txt"];
        for (let url of urls) {
            console.log(await loadData(url));
        }
    }

    init();

})();
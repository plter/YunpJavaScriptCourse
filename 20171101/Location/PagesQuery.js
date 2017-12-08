(function () {


    var index = location.href.indexOf("?");
    var query;
    var page = "page1";

    if (index > -1) {
        query = location.href.substring(index + 1);
        page = query;
    }

    var currentPageDiv = document.querySelector("#" + page);
    if (currentPageDiv) {
        currentPageDiv.style.display = "block";
    }


})();
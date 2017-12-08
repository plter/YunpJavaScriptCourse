(function () {

    var form = document.querySelector("form");
    var resultDiv = document.querySelector("#result");


    form.addEventListener("submit", function (e) {
        e.preventDefault();

        var files = this["file"].files;
        var firstFile = files[0];

        var reader = new FileReader();
        reader.onload = function () {
            resultDiv.innerHTML = reader.result;

            var p = new DOMParser();
            var doc = p.parseFromString(reader.result, "application/xml");
            var students = doc.getElementsByTagName("student");
            var firstStudent = students[0];
            console.log(firstStudent.getAttribute("name"), firstStudent.getAttribute("age"));

            var content = document.querySelector("content");
            console.log(content.innerHTML);

        };
        reader.readAsText(firstFile);
    });


})();
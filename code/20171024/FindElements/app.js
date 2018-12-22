(function () {

    // var div1 = document.getElementById("div1");
    // div1.innerHTML = "Hello World";

    // var divs = document.getElementsByTagName("div");
    // console.log(divs);
    // divs.div1.innerHTML = "Hello World";

    // divs[0].innerHTML = "Hello World";

    // for (var i = 0; i < divs.length; i++) {
    //     divs[i].innerHTML = "Hello World";
    // }

    // for (var value of divs) {
    //     value.innerHTML = "<button>Click me</button>";
    // }


    // var divs = document.getElementsByClassName("mydiv");
    // console.log(divs);


    // document.querySelector("#div1").innerHTML = "Hello World";//HTML5 API

    var divs = document.querySelectorAll("div");
    divs.forEach(e => e.innerHTML = "Hello World");

})();
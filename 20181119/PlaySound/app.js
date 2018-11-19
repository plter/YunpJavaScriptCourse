(function () {

    let player = document.querySelector("audio");
    let btnPlay = document.querySelector("#btn-play");
    let btnStop = document.querySelector("#btn-stop");
    let currentTimeDiv = document.querySelector("#current-time-div");


    function btnPlay_clickedHandler() {
        player.play();
    }

    function btnStop_clickedHandler() {
        player.pause();
    }

    function timerHandler() {
        currentTimeDiv.innerHTML = player.currentTime + "/" + player.duration;
    }

    function addListeners() {
        btnPlay.onclick = btnPlay_clickedHandler;
        btnStop.onclick = btnStop_clickedHandler;
        setInterval(timerHandler, 1000);
    }

    function main() {
        addListeners();
    }

    main();
})();
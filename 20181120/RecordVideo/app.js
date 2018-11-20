(function () {
    let btnStartRecord = document.querySelector("#btn-start-record");
    let btnStopRecord = document.querySelector("#btn-stop-record");
    let stream;
    let mediaRecorder;
    let statusDiv = document.querySelector("#status-div");
    let player = document.querySelector("video");

    function addListeners() {
        btnStartRecord.onclick = async function () {
            if (!mediaRecorder) {
                statusDiv.innerHTML += '开始获取数据流<br>';
                stream = await navigator.mediaDevices.getUserMedia({video: true, audio: true});
                statusDiv.innerHTML += '已获取数据流<br>';

                mediaRecorder = new MediaRecorder(stream);
                mediaRecorder.ondataavailable = e => {
                    let reader = new FileReader();
                    reader.onload = function () {
                        player.src = reader.result;
                        console.log(e);
                    };
                    reader.readAsDataURL(e.data);
                    // player.src = URL.createObjectURL(e.data);
                };
                mediaRecorder.start();
                statusDiv.innerHTML += '正在录制...<br>';
            }
        };
        btnStopRecord.onclick = function () {
            if (mediaRecorder) {
                mediaRecorder.stop();
                mediaRecorder = null;
                stream = null;
                statusDiv.innerHTML += '已停止录制<br>';
            }
        };
    }

    function main() {
        addListeners();
    }

    main();
})();
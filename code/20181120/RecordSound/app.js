(function () {
    let btnStartRecord = document.querySelector("#btn-start-record");
    let btnStopRecord = document.querySelector("#btn-stop-record");
    let stream;
    let mediaRecorder;
    let statusDiv = document.querySelector("#status-div");
    let blobs;
    let player = document.querySelector("video");

    function addListeners() {
        btnStartRecord.onclick = async function () {
            if (!mediaRecorder) {
                statusDiv.innerHTML += '开始获取数据流<br>';
                stream = await navigator.mediaDevices.getUserMedia({video: false, audio: true});
                statusDiv.innerHTML += '已获取数据流<br>';

                blobs = [];
                mediaRecorder = new MediaRecorder(stream);
                mediaRecorder.ondataavailable = e => {
                    blobs.push(e.data);
                };
                mediaRecorder.start(1000);
                statusDiv.innerHTML += '正在录制...<br>';
            }
        };
        btnStopRecord.onclick = function () {
            if (mediaRecorder) {
                mediaRecorder.stop();
                mediaRecorder = null;
                stream = null;
                statusDiv.innerHTML += '已停止录制<br>';

                if (blobs && blobs.length) {
                    let allData = new Blob(blobs);
                    player.src = URL.createObjectURL(allData);
                }
            }
        };
    }

    function main() {
        addListeners();
    }

    main();
})();
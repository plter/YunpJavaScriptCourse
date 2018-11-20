(async function () {

    // navigator.mediaDevices.enumerateDevices().then(result => {
    //     console.log(result);
    // });

    // let result = await navigator.mediaDevices.enumerateDevices();
    // console.log(result);

    let canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 300;
    let context2d = canvas.getContext('2d');
    let video = document.querySelector("video");
    let btnTakePhoto = document.querySelector("#btn-take-photo");
    let photosContainer = document.querySelector("#photos-container");

    let cameraStream = await navigator.mediaDevices.getUserMedia({video: true, audio: false});
    video.srcObject = cameraStream;

    btnTakePhoto.onclick = function () {
        context2d.drawImage(video, 0, 0, 400, 300);

        let img = document.createElement("img");
        img.src = canvas.toDataURL();
        img.width = 120;
        img.height = 90;
        photosContainer.appendChild(img);
    };
})();
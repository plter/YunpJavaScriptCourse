// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const electron = require("electron");
const fs = require("fs");

document.querySelector("#btn-show-message-box").onclick = function () {
    electron.remote.dialog.showMessageBox(electron.remote.getCurrentWindow(), {
        message: "这是一个对话框"
    });
    // alert("简单对话框");
};

document.querySelector("#btn-show-error-message").onclick = function () {
    electron.remote.dialog.showErrorBox("错误提示", "对话框内容");
};

document.querySelector("#input-file").onchange = function () {
    console.log(this.files);
};


document.querySelector("#btn-browse-for-open").onclick = function () {
    let files = electron.remote.dialog.showOpenDialog(electron.remote.getCurrentWindow(), {
        // properties: ["multiSelections", "openFile"]
        properties: ["openDirectory", "createDirectory"]
    });
    if (files && files.length) {
        alert(`选择了 ${files[0]}`);
    } else {
        alert("取消选择任何文件");
    }
};

document.querySelector("#btn-browse-for-save").onclick = function () {
    let file = electron.remote.dialog.showSaveDialog(electron.remote.getCurrentWindow());
    fs.writeFileSync(file, "Hello World");
};
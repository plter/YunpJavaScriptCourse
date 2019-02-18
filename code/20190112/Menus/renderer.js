// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const electron = require("electron");
const path = require("path");

document.querySelector("#btn-show-menu").onclick = function () {

    let menu = new electron.remote.Menu();
    menu.append(new electron.remote.MenuItem(
        {
            label: "顶级云加", click() {
                electron.shell.openExternal("http://yunp.top");
            }
        }
    ));
    menu.append(new electron.remote.MenuItem({type: "separator"}));
    menu.append(new electron.remote.MenuItem({
        label: "关闭", click() {
            window.close();
        }
    }));
    menu.append(new electron.remote.MenuItem({label: "视频", icon: path.join(__dirname, "video_library_18.png")}));
    menu.popup();
};
(function () {

    let infoString = "";

    infoString += `
<div>buildId:${navigator.buildID}</div>
<div>appCodeName:${navigator.appCodeName}</div>
<div>appName:${navigator.appName}</div>
<div>appVersion:${navigator.appVersion}</div>
<div>cookieEnabled:${navigator.cookieEnabled}</div>
<div>language:${navigator.language}</div>
<div>onLine:${navigator.onLine}</div>
<div>oscpu:${navigator.oscpu}</div>
<div>platform:${navigator.platform}</div>
<div>vendor:${navigator.vendor}</div>
<div>userAgent:${navigator.userAgent}</div>
`;

    console.log(screen);


    document.querySelector("#content").innerHTML = infoString;

})();
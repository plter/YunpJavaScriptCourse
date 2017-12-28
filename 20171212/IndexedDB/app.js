(function () {

    var dbOpenRequest = indexedDB.open("mydb", 2);
    /**
     * @type {IDBDatabase}
     */
    var db;
    var logOl = document.querySelector("#log");
    var metaForm = document.querySelector("#meta-form");
    var metaContainer = document.querySelector("#meta-container");
    var userForm = document.querySelector("#user-form");
    var usersContainer = document.querySelector("#users-container");


    function puts(s) {
        var li = document.createElement("li");
        li.innerHTML = s;
        logOl.insertBefore(li, logOl.firstChild);
    }

    function readMeta() {
        var os = db.transaction("meta", "readonly").objectStore("meta");
        var mt = new yunp.MetaTable(os, db);
        metaContainer.innerHTML = "";
        metaContainer.appendChild(mt.getHtmlNode());
    }

    function readUsers() {
        usersContainer.innerHTML = "";
        usersContainer.appendChild(new yunp.UserTable(db).getHtmlNode());
    }

    function db_openSuccessHandler(e) {
        db = dbOpenRequest.result;

        readMeta();
        readUsers();

        puts("Db open");
    }

    /**
     * @param e {IDBVersionChangeEvent}
     */
    function db_upgradeneededHandler(e) {
        db = dbOpenRequest.result;

        if (e.newVersion === 1) {
            db.createObjectStore("meta");
        }
        if (e.newVersion === 2) {
            var os = db.createObjectStore("user", {keyPath: "id", autoIncrement: true});
            os.createIndex("name", "name");
            os.createIndex("age", "age");
        }

        puts("Db upgrade");
    }

    function metaForm_submitHandler(e) {
        e.preventDefault();

        var key = e.target["key"].value;
        var value = e.target["value"].value;

        var req = db.transaction("meta", "readwrite").objectStore("meta").put(value, key);
        req.onsuccess = function (ev) {
            puts("写入键值对成功");
            readMeta();
        };
        req.onerror = function (ev) {
            puts("写入键值对失败");
        }
    }

    function userForm_submitHandler(e) {
        e.preventDefault();

        var name = e.target["name"].value;
        var age = e.target["age"].value;

        db.transaction("user", "readwrite").objectStore("user").put({name: name, age: age}).onsuccess = function (ev) {
            readUsers();
            puts("添加用户成功");
        };
    }

    function addListeners() {
        dbOpenRequest.onsuccess = db_openSuccessHandler;
        dbOpenRequest.onupgradeneeded = db_upgradeneededHandler;

        metaForm.addEventListener("submit", metaForm_submitHandler);
        userForm.addEventListener("submit", userForm_submitHandler);
    }


    function main() {
        addListeners();
    }

    main();

})();
(function () {
    window.yunp = window.yunp || {};


    function UserTable(db) {
        this._htmlNode = document.createElement("table");
        this._htmlNode.border = 1;
        var self = this;

        //add table header
        var tr = document.createElement("tr");
        tr.innerHTML = "<th>id</th><th>name</th><th>age</th><th>操作</th>";
        this._htmlNode.appendChild(tr);

        //add table body
        db.transaction("user", "readonly").objectStore("user").getAll().onsuccess = function (e) {
            e.target.result.forEach(function (user) {
                self._htmlNode.appendChild(new yunp.UserTableRow(db, user).getHtmlNode());
            });
        };
    }

    UserTable.prototype.getHtmlNode = function () {
        return this._htmlNode;
    };

    yunp.UserTable = UserTable;

})();
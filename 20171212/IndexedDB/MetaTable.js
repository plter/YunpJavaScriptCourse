(function () {
    window.yunp = window.yunp || {};

    yunp.MetaTable = function (os, db) {
        this._htmlNode = document.createElement("table");
        this._htmlNode.border = 1;

        //add table header
        var tr = document.createElement("tr");
        tr.innerHTML = "<th>Key</th><th>Value</th><th>操作</th>";
        this._htmlNode.appendChild(tr);

        var self = this;

        //add table body
        os.getAllKeys().onsuccess = function (e) {
            e.target.result.forEach(function (key) {
                self._htmlNode.appendChild(new yunp.MetaTableRow(key, os, db).getHtmlNode());
            });
        };
    };

    yunp.MetaTable.prototype.getHtmlNode = function () {
        return this._htmlNode;
    }
})();
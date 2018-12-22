(function () {

    window.yunp = window.yunp || {};

    /**
     *
     * @param key
     * @param os {IDBObjectStore}
     * @constructor
     */
    yunp.MetaTableRow = function (key, os, db) {
        this._htmlNode = document.createElement("tr");


        var self = this;

        function createTd(innerHTML) {
            var td = document.createElement("td");
            td.innerHTML = innerHTML;
            return td;
        }

        function btnDelete_clickedHandler() {
            db.transaction("meta", "readwrite").objectStore("meta").delete(key).onsuccess = function (ev) {
                self._htmlNode.parentNode.removeChild(self._htmlNode);
            }
        }

        function addDeleteButton() {
            var td = createTd("");
            self._htmlNode.appendChild(td);

            var btn = document.createElement("button");
            btn.innerHTML = "Delete";
            btn.onclick = btnDelete_clickedHandler;
            td.appendChild(btn);
        }

        //get value
        os.get(key).onsuccess = function (ev) {
            self._htmlNode.appendChild(createTd(key));
            self._htmlNode.appendChild(createTd(ev.target.result));

            addDeleteButton();
        }
    };

    yunp.MetaTableRow.prototype.getHtmlNode = function () {
        return this._htmlNode;
    }

})();
(function () {

    window.yunp = window.yunp || {};


    function UserTableRow(db, user) {
        this._htmlNode = document.createElement("tr");
        var self = this;
        var nameInput, ageInput;

        function createElement(tag, innerHTML) {
            var e = document.createElement(tag);
            e.innerHTML = innerHTML;
            return e;
        }

        function addTdWithInput(inputType, value) {
            var e = createElement("td", "");
            var input = createElement("input");
            input.type = inputType;
            input.value = value;
            e.appendChild(input);

            self._htmlNode.appendChild(e);
            return input;
        }

        function addOperationButtons() {
            var td = createElement("td", "");
            self._htmlNode.appendChild(td);

            //add delete button
            var btn = createElement("button", "Delete");
            td.appendChild(btn);
            btn.onclick = function () {
                db.transaction("user", "readwrite").objectStore("user").delete(user.id).onsuccess = function (ev) {
                    self._htmlNode.parentNode.removeChild(self._htmlNode);
                };
            };

            //add save button
            btn = createElement("button", "Save");
            td.appendChild(btn);
            btn.onclick = function () {
                db.transaction("user", "readwrite").objectStore("user").openCursor(IDBKeyRange.only(user.id)).onsuccess = function (ev) {
                    /**
                     * @type {IDBCursorWithValue}
                     */
                    var c = ev.target.result;
                    var data = c.value;
                    data.name = nameInput.value;
                    data.age = ageInput.value;
                    c.update(data);
                };
            };
        }


        function buildUI() {
            self._htmlNode.appendChild(createElement("td", user.id));

            nameInput = addTdWithInput("text", user.name);
            ageInput = addTdWithInput("number", user.age);

            //add operation buttons
            addOperationButtons();
        }


        buildUI();
    }

    UserTableRow.prototype.getHtmlNode = function () {
        return this._htmlNode;
    };

    yunp.UserTableRow = UserTableRow;

})();
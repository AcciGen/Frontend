var items = [];
var Form = document.getElementById("Form");
var Table = document.getElementById("Table").getElementsByTagName("tbody")[0];
Form.addEventListener("submit", function (event) {
    event.preventDefault();
    var itemNameInput = document.getElementById("Name");
    var itemName = itemNameInput.value;
    if (itemName.trim() !== "") {
        var newItem = {
            id: Date.now(),
            name: itemName,
        };
        items.push(newItem);
        displayItems();
        Form.reset();
    }
});
function displayItems() {
    Table.innerHTML = "";
    items.forEach(function (item) {
        var row = Table.insertRow();
        row.innerHTML = "\n                  <td>".concat(item.id, "</td>\n                  <td>").concat(item.name, "</td>\n                  <td>\n                      <button onclick=\"editItem(").concat(item.id, ")\" class=\"btn btn-warning\">Edit</button>\n                      <button onclick=\"deleteItem(").concat(item.id, ")\" class=\"btn btn-danger\">Delete</button>\n                  </td>");
    });
}
function editItem(id) {
    var selectedItem = items.find(function (item) { return item.id === id; });
    if (selectedItem) {
        var newName = prompt("Enter new name for item:", selectedItem.name);
        if (newName !== null && newName.trim() !== "") {
            selectedItem.name = newName;
            displayItems();
        }
    }
}
function deleteItem(id) {
    var index = items.findIndex(function (item) { return item.id === id; });
    if (index !== -1) {
        items.splice(index, 1);
        displayItems();
    }
}

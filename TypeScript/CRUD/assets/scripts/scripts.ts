interface Item {
    id: number;
    name: string;
  }
  
  let items: Item[] = [];
  const Form = document.getElementById("Form") as HTMLFormElement;
  const Table = document.getElementById("Table")!.getElementsByTagName("tbody")[0];
  
  Form.addEventListener("submit", function (event) {
    event.preventDefault();
    const itemNameInput = document.getElementById("Name") as HTMLInputElement;
    const itemName = itemNameInput.value;
    if (itemName.trim() !== "") {
      const newItem: Item = {
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
      const row = Table.insertRow();
      row.innerHTML = `
                  <td>${item.id}</td>
                  <td>${item.name}</td>
                  <td>
                      <button onclick="editItem(${item.id})" class="btn btn-warning">Edit</button>
                      <button onclick="deleteItem(${item.id})" class="btn btn-danger">Delete</button>
                  </td>`;
    });
  }
  
  function editItem(id: number) {
    const selectedItem = items.find((item) => item.id === id);
    if (selectedItem) {
      const newName = prompt("Enter new name for item:", selectedItem.name);
      if (newName !== null && newName.trim() !== "") {
        selectedItem.name = newName;
        displayItems();
      }
    }
  }
  
  function deleteItem(id: number) {
    const index = items.findIndex((item) => item.id === id);
    if (index !== -1) {
      items.splice(index, 1);
      displayItems();
    }
  }
  
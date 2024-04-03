document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    fetch('https://api.sardorsohinazarov.uz/api/Auth/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        var accessToken = data.accessToken;

        function fetchDataAndPopulateTable() {
            fetch('https://api.sardorsohinazarov.uz/api/Devices/GetAll', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                populateTable(data);
            })
            .catch(error => {
                console.error('Fetch request failed:', error);
            });
        }

        function populateTable(data) {
            var tableBody = document.getElementById('data-table-body');
            tableBody.innerHTML = '';

            data.forEach(item => {
                var row = tableBody.insertRow();
                row.insertCell().textContent = item.id;
                row.insertCell().textContent = item.name;
                row.insertCell().textContent = item.description;

                var updateButton = document.createElement('button');
                updateButton.textContent = 'Update';
                updateButton.addEventListener('click', function() {
                    updateItem(item.id);
                });
                row.insertCell().appendChild(updateButton);

                var deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', function() {
                    deleteItem(item.id);
                });
                row.insertCell().appendChild(deleteButton);
            });
        }

        function updateItem(itemId) {
            console.log('Updating item with ID:', itemId);
        }

        function deleteItem(itemId) {
            console.log('Deleting item with ID:', itemId);
        }

        fetchDataAndPopulateTable();

        alert('Login successful!');
    })
    .catch(error => {
        console.error('Fetch request failed:', error);
        alert('Login failed. Please try again.');
    });
});

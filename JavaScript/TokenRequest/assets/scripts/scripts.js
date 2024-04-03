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
        fetch('https://api.sardorsohinazarov.uz/api/Devices/GetAll', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + data.accessToken
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            alert('Login successful!');
        })
        .catch(error => {
            console.error('Fetch request failed:', error);
        });

    })
    .catch(error => {
        console.error('Fetch request failed:', error);
        alert('Login failed. Please try again.');
    });
});
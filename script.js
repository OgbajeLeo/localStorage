 // Wait for the DOM to load
 document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the form and user list
    const form = document.getElementById("userInputForm1");
    const userList = document.getElementById("userList");

    // Add an event listener to the form
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Get user input values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const track = document.getElementById("track").value;

        // Create a user object
        const user = { name, email,track };

        // Save user data to local storage
        saveUser(user);

        // Clear the form
        form.reset();

        // Refresh the user list
        displayUsers();
    });

    // Function to save user data to local storage
    function saveUser(user) {
        // Check if local storage is supported
        if (typeof (Storage) !== "undefined") {
            // Retrieve the existing user data or create an empty array
            let users = JSON.parse(localStorage.getItem("users")) || [];

            // Add the new user data to the array
            users.push(user);

            // Save the updated array back to local storage
            localStorage.setItem("users", JSON.stringify(users));
        } else {
            alert("Local storage is not supported by your browser.");
        }
    }

    // Function to display user data from local storage
    function displayUsers() {
        // Retrieve user data from local storage
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Clear the user list
        userList.innerHTML = "";

        // Iterate through the user data and display it
        users.forEach(function (user, index) {
            const userDiv = document.createElement("div");
            userDiv.innerHTML = `
                <p><strong>Name:</strong> ${user.name}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Track:</strong> ${user.track}</p>
                
                <hr>
            `;
            userList.appendChild(userDiv);
        });
    }

    // Initial display of users
    displayUsers();
});

function deleteLocal(){
    localStorage.clear();
    displayUsers();
}
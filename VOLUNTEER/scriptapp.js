const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const skillsSelect = document.getElementById("skills");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    let isValid = true;

    // Check name
    if (nameInput.value.trim() === "") {
        alert("Please enter your name");
        isValid = false;
    }

    // Check email
    if (emailInput.value.trim() === "" || !/^\S+@\S+\.\S+$/.test(emailInput.value)) {
        alert("Please enter a valid email address");
        isValid = false;
    }

    // Check password
    if (passwordInput.value.trim() === "") {
        alert("Please enter a password");
        isValid = false;
    }

    // Check skills (at least one selected)
    if (skillsSelect.selectedOptions.length === 0) {
        alert("Please select at least one skill");
        isValid = false;
    }



    if (isValid) {
        // Form is valid, submit the form data (e.g., using AJAX or other methods)
        // ...
    }
});
if (isValid) {
    // Instead of preventing default form submission, submit using AJAX or fetch API
    // to the server-side script (form_process.php)

    // Example using fetch API:
    fetch("form_process.php", {
        method: "POST",
        body: new FormData(form) // Send form data
    })
        .then(response => response.text())
        .then(data => {
            // Display success or error message based on the response (data)
        })
        .catch(error => {
            console.error(error);
            // Handle errors
        });
}

// Fetch the registration status from register.php using JavaScript
fetch('register.php', { method: 'POST' })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // If registration is successful, display the success message
            document.getElementById('success-message').style.display = 'block';
        }
    })
    .catch(error => console.error('Error:', error));


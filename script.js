// Form validation function
function validateForm() {
    // Clear previous error message
    document.getElementById("error-message").textContent = "";

    // Get form data
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate fields
    if (name === "" || email === "" || subject === "" || message === "") {
        document.getElementById("error-message").textContent = "All fields are required!";
        return false; // Prevent form submission
    }

    // Simple email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("error-message").textContent = "Please enter a valid email address!";
        return false; // Prevent form submission
    }

    // If everything is valid, allow form submission
    alert("Form submitted successfully!");
    return true;
}

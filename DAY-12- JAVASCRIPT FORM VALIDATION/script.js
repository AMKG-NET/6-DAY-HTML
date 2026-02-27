const form = document.getElementById("registrationForm");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const phone = document.getElementById("phone");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;
    successMessage.textContent = "";

    // Full Name Validation
    if (fullName.value.trim().length < 3) {
        showError(fullName, "Name must be at least 3 characters");
        isValid = false;
    } else {
        clearError(fullName);
    }

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        showError(email, "Enter a valid email");
        isValid = false;
    } else {
        clearError(email);
    }

    // Password Validation
    if (password.value.length < 6) {
        showError(password, "Password must be at least 6 characters");
        isValid = false;
    } else {
        clearError(password);
    }

    // Confirm Password Validation
    if (confirmPassword.value !== password.value) {
        showError(confirmPassword, "Passwords do not match");
        isValid = false;
    } else {
        clearError(confirmPassword);
    }

    // Phone Validation
    if (!/^\d{10,}$/.test(phone.value)) {
        showError(phone, "Phone must contain at least 10 digits");
        isValid = false;
    } else {
        clearError(phone);
    }

    // Success
    if (isValid) {
        successMessage.textContent = "Form Submitted Successfully";
        form.reset();
    }
});

// Show error
function showError(input, message) {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = message;
}

// Clear error
function clearError(input) {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = "";
}
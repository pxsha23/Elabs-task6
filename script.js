const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear previous messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";
  document.getElementById("successMessage").textContent = "";

  let valid = true;

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  }

  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    valid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email address.";
    valid = false;
  }

  if (message === "") {
    document.getElementById("messageError").textContent = "Message cannot be empty.";
    valid = false;
  }

  if (valid) {
    document.getElementById("successMessage").textContent = "Form submitted successfully!";
    form.reset();
  }
});

// Ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  // Listen for the form's submit event
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Get form field values and trim any extra whitespace
    const name = document.getElementById("name").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const dob = document.getElementById("dob").value.trim();

    // Get the selected radio button for preferred pronouns
    const pronounInput = document.querySelector(
      'input[name="pronouns"]:checked'
    );
    const pronouns = pronounInput ? pronounInput.id : "Not specified";

    // Check if any required field is empty
    if (!name || !username || !email || !password || !dob) {
      console.error(
        "Error: Please fill out all required fields before submitting."
      );
      return; // Stop execution if the form is incomplete
    }

    // Create an object with the form data
    const formData = {
      Name: name,
      Username: username,
      Email: email,
      Password: password,
      "Date of Birth": dob,
      "Preferred Pronouns": pronouns,
    };

    // Log the form data in a table format if available, otherwise log normally
    if (typeof console.table === "function") {
      console.table(formData);
    } else {
      console.log("Form Data:", formData);
    }
  });
});

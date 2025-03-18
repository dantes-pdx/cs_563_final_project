document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Ensure all fields are filled out
    if (!name || !email || !message) {
      console.error("Error: Please fill out all required fields.");
      return;
    }

    // Prepare the template parameters for EmailJS
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message, // Added message parameter
      to_email: "dantes@pdx.edu", // This field should match the field name in your EmailJS template
    };

    // Send the email using EmailJS
    emailjs.send("service_ehccknx", "template_i7pmt69", templateParams).then(
      (response) => {
        console.log("Email sent successfully!", response.status, response.text);
      },
      (error) => {
        console.error("Failed to send email:", error);
      }
    );
  });
});

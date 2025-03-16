document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
      console.error("Error: Please fill out all required fields.");
      return;
    }

    // Prepare the template parameters for EmailJS
    const templateParams = {
      from_name: name,
      from_email: email,
      to_email: "dantes@pdx.edu", // This field should be set up in your EmailJS template
    };

    // Send the email using EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams).then(
      (response) => {
        console.log("Email sent successfully!", response.status, response.text);
      },
      (error) => {
        console.error("Failed to send email:", error);
      }
    );
  });
});

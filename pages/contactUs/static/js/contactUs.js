document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById("process-contact");
    const successAlert = document.getElementById("success-alert");

    form.addEventListener("submit", (event) => {
         event.preventDefault(); // Prevent form submission

        const email = document.getElementById("email").value;

        // Validate form input
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
            return false;
        }


        // Show success alert
        successAlert.style.display = "block";

        // Clear form inputs
        form.reset();

        // Hide alert after 5 seconds
        setTimeout(() => {
            successAlert.style.display = "none";
        }, 5000);
    });


        const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };
});
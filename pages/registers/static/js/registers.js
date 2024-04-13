document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById("form-register");


    registerForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission


       const name = document.getElementById('name').value;
        const birthdate = document.getElementById('birthdate').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById("confirm password").value;

         // Validate form input
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
            return false;
        }


        // Validate name
        if (!/^[a-zA-Z ]+$/.test(name)) {
            alert('Invalid name. Please enter a valid name in English.');
            return false;
        }

        // Calculate age
      const today = new Date();
      const birthDate = new Date(birthdate);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

    //validate age
      if (age < 18) {
        alert("You must be at least 18 to register");
        event.preventDefault();
        return false;
      }


        // Validate phone number
        if (!/^\+?[0-9\- ]{12,}$/.test(phone)) {
            alert('Invalid phone number. Please enter a valid phone number.');
            return false;
        }

     // Validate password length
        if (password.length < 6) {
            alert('Password should be at least 6 characters long.');
            return false;
        }

     //validate password
        if (password !== confirmPassword) {
        event.preventDefault();
        alert("Passwords do not match.");
        return false;
      }

        // User can proceed with form submission
        alert('Account created successfully!');
        registerForm.submit(); // Submit the form

        function displayError(elementId, message) {
            document.getElementById(elementId).textContent = message;
        }

        function clearErrors() {
            const errorElements = document.getElementsByClassName('error');
            for (const element of errorElements) {
                element.textContent = '';
            }
        }

    });

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };



});
  
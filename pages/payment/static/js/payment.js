
document.addEventListener("DOMContentLoaded", () => {
     const paymentForm = document.querySelector('.payment-form');
    const cardNumberInput = document.getElementById('cardNumber');
    const expiryDateInput = document.getElementById('expiryDate');
    const cvvInput = document.getElementById('cvv');
    const submitButton = document.querySelector('.submit-button');

    // Disable the submit button initially
  submitButton.disabled = true;

   // Function to display error message
  function displayErrorMessage(inputElement, errorMessage) {
    let errorElement = inputElement.nextElementSibling;
    if (!errorElement || !errorElement.classList.contains('error-message')) {
      errorElement = document.createElement('div');
      errorElement.classList.add('error-message');
      inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
    }
    errorElement.textContent = errorMessage;
  }

   // Function to remove error message
  function removeErrorMessage(inputElement) {
    // Check if error message element exists
    let errorElement = inputElement.nextElementSibling;
    if (errorElement && errorElement.classList.contains('error-message')) {
      // Remove error message element
      errorElement.parentNode.removeChild(errorElement);
    }
  }

// Valid credit card number
  cardNumberInput.addEventListener('input', () => {
    if (/^\d{16}$/.test(cardNumberInput.value)) {      removeErrorMessage(cardNumberInput);
    } else {
      displayErrorMessage(cardNumberInput, 'Please enter a valid card number (16 digits).');
    }
  });

   // Valid expiration date
  expiryDateInput.addEventListener('input', () => {
    // Perform validation on the expiry date input
      const currentDate = new Date();
 const enteredMonth = parseInt(expiryDateInput.value.slice(0, 2));
    const enteredYear = parseInt(expiryDateInput.value.slice(3));
    const enteredDate = new Date(2000 + enteredYear, enteredMonth - 1, 1);
    if (!enteredDate <= currentDate ) {
        // Display error message
        displayErrorMessage(expiryDateInput, 'Invalid expiration date. Please enter a future date.');
      } else {
        // Remove error message
        removeErrorMessage(expiryDateInput);
      }
  });

  // Validate CVV
  cvvInput.addEventListener('input', () => {
   if (/^\d{3}$/.test(cvvInput.value)) {      // Remove error message
      removeErrorMessage(cvvInput);
    } else {
      // Display error message
      displayErrorMessage(cvvInput, 'Invalid CVV. Please enter a 3 or 4-digit number.');
    }
  });

  // Add submit event listener to the form
  paymentForm.addEventListener('submit', event => {
    event.preventDefault();

    // Submit the form if all validations pass
    paymentForm.submit();
  });
});

document.addEventListener('DOMContentLoaded', function() {
    // Retrieve total amount from local storage
    const totalAmount = localStorage.getItem('totalAmount') || '$0';

    // Display total amount on the payment page
    const totalAmountElement = document.getElementById('total-price');
    totalAmountElement.textContent = `$${totalAmount}`;
});


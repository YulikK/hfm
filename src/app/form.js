const countryCodes = {
  USA: '+1',
  UK: '+44',
  India: '+91',
};

document.addEventListener('DOMContentLoaded', () => {
  const { body } = document;
  const emailInput = /** @type {HTMLInputElement} */ (
    body.querySelector('#email')
  );
  const form = /** @type {HTMLFormElement} */ (document.querySelector('#form'));
  const countrySelect = /** @type {HTMLSelectElement} */ (
    body.querySelector('#country')
  );
  const phoneCodeInput = /** @type {HTMLInputElement} */ (
    body.querySelector('#phone_code')
  );
  const phoneInput = /** @type {HTMLInputElement} */ (
    body.querySelector('input[name="phone"]')
  );

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      emailInput.setCustomValidity('Please enter a valid email address.');
    } else {
      emailInput.setCustomValidity('');
    }
  };

  const updatePhoneCode = () => {
    const selectedCountry = countrySelect.value;
    phoneCodeInput.value = countryCodes[selectedCountry] || '';
  };

  form.addEventListener('submit', (event) => {
    validateEmail();
    if (!emailInput.checkValidity()) {
      event.preventDefault();
    }
  });

  countrySelect.addEventListener('change', updatePhoneCode);
  phoneInput.addEventListener('input', () => {
    phoneInput.value = phoneInput.value.replace(/\D/g, '');
  });
});

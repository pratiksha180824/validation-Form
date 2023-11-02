const form = document.getElementById('registrationForm');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    errorMessage.innerHTML = '';

    const username = form.username.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/;
    const phoneRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@]).{7,}$/;

    if (username === '' || email === '' || phone === '' || password === '' || confirmPassword === '') {
        errorMessage.innerHTML = 'All fields are required.';
        return;
    }

    if (!emailRegex.test(email)) {
        errorMessage.innerHTML = 'Invalid email address.';
        return;
    }

    if (!phoneRegex.test(phone)) {
        errorMessage.innerHTML = 'Invalid phone number.';
        return;
    }

    if (!passwordRegex.test(password)) {
        errorMessage.innerHTML = 'Password must be at least 7 characters long and contain one capital letter, one digit, and one special character (&,$,#@).';
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.innerHTML = 'Passwords do not match.';
        return;
    }

    // Registration successful, you can proceed with form submission or other actions here
    alert('Registration successful!');
});

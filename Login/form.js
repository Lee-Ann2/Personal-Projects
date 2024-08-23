const form = document.getElementById("signup-form");
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const personName = document.getElementById('name');
    const nameError = document.getElementById('nameError')
    if(personName.value.length < 3) {
        nameError.textContent = 'Username must be at least 3 characters long';

        return;
    } else {
        nameError.textContent = '';
    }

    const userEmail = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(userEmail.value)) {
        emailError.textContent = 'Please enter valid email address.';

        return;
    } else {
        emailError.textContent = "";
    }

    const getPassword = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    if(getPassword.value.length < 8) {
        passwordError.textContent = 'Password must at least be 8 characters long';

        return;
    } else {
        passwordError.textContent = '';
    }

    const submit = document.getElementById('btn');
    function submit () {
        submit.textContent = 'You have signed up successfully.';
    }
    form.submit();
});

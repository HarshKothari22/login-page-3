const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDiplay = inputControl.querySelector('.error');

    errorDiplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDiplay = inputControl.querySelector('.error');

    errorDiplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return re.test(String(email).toLowerCase());
}


const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    }else if(usernameValue.length <= 2){
        setError(username, 'Username should not be less than 2.');
    }else{
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    }else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    }else{
        setSuccess(email);
    }

    if(passwordValue === ''){
        setError(password, 'Password is required');
    }else if (passwordValue.length < 8) {
        setError(password, 'Password must be atleast 8 character.');
    }else{
        setSuccess(password);
    }

    if(password2Value === ''){
        setError(password2, 'Please confirm your password');
    }else if (password2Value.length < 8) {
        setError(password, 'Password must be atleast 8 character.');
    }else if (password2Value !== passwordValue){
        setError(password2, "Passwords doesn't match");
    }else{
        setSuccess(password2);
    }
};


function toggleMenu() {
   document.querySelector('.nav-links').classList.toggle('show');
}

const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signInForm = document.getElementById('sign-in');
const signUpForm = document.getElementById('sign-up');

signUpButton.addEventListener('click', () => {
    signInForm.style.display = 'none';
    signUpForm.style.display = 'block';
});

signInButton.addEventListener('click', () => {
    signUpForm.style.display = 'none';
    signInForm.style.display = 'block';
});

document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fname = document.getElementById('fname').value;
    const lname = document.getElementsByName('lname')[0].value;
    const email = document.getElementsByName('email')[0].value;
    const password = document.getElementsByName('password')[0].value;

    const user = {
        fname,
        lname,
        email,
        password
    };

    localStorage.setItem('user', JSON.stringify(user));
    alert('Sign up successful! Please sign in.');
    document.getElementById('sign-up').style.display = 'none';
    document.getElementById('sign-in').style.display = 'block';
});

document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementsByName('email')[1].value;
    const password = document.getElementsByName('password')[1].value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert('Sign in successful!');
        window.location.href = 'home.html';
    } else {
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'block';
    }
});

document.getElementById('signUpButton').addEventListener('click', function() {
    document.getElementById('sign-up').style.display = 'block';
    document.getElementById('sign-in').style.display = 'none';
});

document.getElementById('signInButton').addEventListener('click', function() {
    document.getElementById('sign-up').style.display = 'none';
    document.getElementById('sign-in').style.display = 'block';
});
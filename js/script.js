// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you can add your backend logic for handling form submission
    // For demo purposes, we'll simply display the user data in the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    // For demo purposes, show a success message
    alert('Sign up successful!');
}

// Function to handle Google signup
function handleGoogleSignup() {
    // Here you can add your Google sign up logic
    // For demo purposes, show an alert
    alert('Sign up with Google clicked!');
}

// Function to handle Facebook signup
function handleFacebookSignup() {
    // Here you can add your Facebook sign up logic
    // For demo purposes, show an alert
    alert('Sign up with Facebook clicked!');
}

// Event listeners
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', handleSubmit);

const googleButton = document.querySelector('.google-btn');
googleButton.addEventListener('click', handleGoogleSignup);

const facebookButton = document.querySelector('.facebook-btn');
facebookButton.addEventListener('click', handleFacebookSignup);

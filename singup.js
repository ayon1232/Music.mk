const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
	event.preventDefault(); // Prevent form from submitting

	const username = document.getElementById('username').value;
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	const confirmPassword = document.getElementById('confirm-password').value;

	// Perform validation here

	// If validation succeeds, redirect to main page
	window.location.href = 'index.html';
});

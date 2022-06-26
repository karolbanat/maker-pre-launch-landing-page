const subscriptionForm = document.querySelector('.subscription');
const emailInput = document.querySelector('.subscription__input');
const submitBtn = document.querySelector('.submit-btn');
const errorMsg = document.querySelector('.error-msg');

const emailRegex =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const handleSubmitButton = (e) => {
	e.preventDefault();

	if (!emailInput.value) {
		subscriptionForm.classList.add('error');
		errorMsg.innerText = 'Oops! Please add your email.';
	} else if (!emailInput.value.match(emailRegex)) {
		subscriptionForm.classList.add('error');
		errorMsg.innerText = "Oops! That doesn't look like an email address.";
	} else {
		subscriptionForm.classList.remove('error');
		errorMsg.innerText = '';
	}
};

submitBtn.addEventListener('click', handleSubmitButton);
subscriptionForm.addEventListener('focusin', () => {
	subscriptionForm.classList.remove('error');
	errorMsg.innerText = '';
});

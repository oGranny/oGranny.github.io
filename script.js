const nameField = document.getElementById("nameField");
const subjectField = document.getElementById("subjectField");
const emailField = document.getElementById("emailField");
const messageField = document.getElementById("messageField");
const submitBtn = document.getElementById("submit-btn");
const errName = document.getElementById("name-err");
const errSubject = document.getElementById("sub-err");
const errEmail = document.getElementById("mail-err");
const errMsg = document.getElementById("msg-err");
const successMsg = document.getElementById("success-msg");

let valid = true;
let regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
let submitted = false;

let theme = localStorage.getItem('theme');

if (theme == null) {
	setTheme('light');
} else {
	setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');


for (var i = 0; themeDots.length > i; i++) {
	themeDots[i].addEventListener('click', function () {
		let mode = this.dataset.mode;
		console.log('Option clicked:', mode);
		setTheme(mode);
	})
}

function setTheme(mode) {
	if (mode == 'light') {
		document.getElementById('theme-style').href = 'default.css';
	}

	if (mode == 'blue') {
		document.getElementById('theme-style').href = 'blue.css';
	}

	if (mode == 'green') {
		document.getElementById('theme-style').href = 'green.css';
	}

	if (mode == 'purple') {
		document.getElementById('theme-style').href = 'purple.css';
	}

	localStorage.setItem('theme', mode);
}
submitBtn.addEventListener('click', () => {
	name = nameField.value.trim();
	subject = subjectField.value.trim();
	email = emailField.value.trim();
	message = messageField.value.trim();

	if (name === '') {
		errName.innerText = "This field is required"
		nameField.style['border-color'] = "red";
		return valid = false
	}
	if (subject === '') {
		errSubject.innerText = "This field is required"
		subjectField.style['border-color'] = "red";
		return valid = false
	}
	if (email === '') {
		errEmail.innerText = "This field is required"
		emailField.style['border-color'] = "red";
		return valid = false
	}
	if (!regex.test(emailField.value.trim())) {
		errEmail.innerText = "Emial is not valid"
		emailField.style['border-color'] = "red";
		return valid = false
	}
	if (message === '') {
		errMsg.innerText = "This field is required"
		messageField.style['border-color'] = "red";
		return valid = false
	}
	// fetch(`https://formsubmissionapi.herokuapp.com/?name=${name}&email=${email}&subject=${subject}&msg=${message}`)
	// 	.then(Response => data = Response.json)
	// 	.then(data => console.log(data))
	if (valid && !submitted) {
		console.log("form valid")
		fetch(`https://formsubmissionapi.herokuapp.com/?name=${name}&email=${email}&subject=${subject}&msg=${message}`)
			.then(Response => data = Response.json)
			.then(data => console.log(data))
		successMsg.innerText = "submitted your response ☺"
		return submitted = true;
	}
})




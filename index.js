let form = document.querySelector("form");

const signUser = (event) => {
	event.preventDefault();

	const userInfo = {
		id: Date.now(),
		email: document.getElementById("email").value,
		password: document.getElementById("password").value,
	};

	console.log(userInfo);

	form.reset();

	setTimeout(() => {
		alert("Sign up was successful!");
	}, [1000]);
};

form.addEventListener("submit", signUser);

// signup section
let signupBtn = document.getElementById("signUp");
let signupHandlerMsg = document.getElementById("error-msg");
let signupUsername = document.getElementById("signup-username");
let signupEmail = document.getElementById("signup-email");
let signupPassword = document.getElementById("signup-password");
let confirmPassword = document.getElementById("confirm-password");

signupBtn.addEventListener("click", () => {
  event.preventDefault();

  if (signupUsername.value === "" || signupPassword.value === "" || confirmPassword.value === "") {
    signupHandlerMsg.textContent = "All fields are required";
    //   } else if (signupEmail.includes("@")) {
    //     signinHandlerMsg.textContent = "Please enter a valid email address";
  } else if (signupPassword.value !== confirmPassword.value) {
    signupHandlerMsg.textContent = "Password does not matched.";
  } else {
    signupHandlerMsg.textContent = "Account created successfully";
  }

  // clear out input field
  signupUsername.value = "";
  signupEmail.value = "";
  signupPassword.value = "";
  confirmPassword.value = "";
});

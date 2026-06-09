// form container
let container = document.getElementById("container");

// signin section
let signinBtn = document.getElementById("signIn");
let signinHandlerMsg = document.getElementById("error-msg");
let signinUsername = document.getElementById("signin-username");
let signinPassword = document.getElementById("signin-password");

signinBtn.addEventListener("click", () => {
  event.preventDefault(); // This stops the refresh!

  if (signinUsername.value === "" || signinPassword.value === "") {
    signinHandlerMsg.textContent = "Please try again";
  } else {
    signinHandlerMsg.textContent = `hello ${signinUsername.value} welcone back`;
    // window.alert("Welcome Back");
  }

  // clear out input field
  signinUsername.value = "";
  signinPassword.value = "";
});

function showPassword() {
  // grab password input
  let inputEye = document.getElementById("signin-password");

  // if input type === password, display password in text
  if (inputEye.type === "password") {
    inputEye.type = "text";
  } else {
    inputEye.type = "password";
  }
}

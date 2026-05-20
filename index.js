// error msg
// let errorMessage = document.getElementById("error");
// function errorFunc() {
//   errorMessage.textContent = "Something went wrong. Please try agian!";
// }

function submitFunc() {
  let userName = document.getElementById("name").value;
  if (userName.length >= 2) {
    window.alert(`Hello ${userName}! Your message has been succesfully submitted`);
  } else {
    window.alert("Please enter your name");
  }
}

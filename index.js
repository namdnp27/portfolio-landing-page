// function submitFunc() {
//   let userName = document.getElementById("name").value;
//   if (userName.length >= 2) {
//     window.alert(`Hello ${userName}! Your message has been succesfully submitted`);
//   } else {
//     window.alert("Please enter your name");
//   }
// }

let msgBtnEl = document.getElementById("msgBtn");
let errorEl = document.getElementById("error-msg");

msgBtnEl.addEventListener("click", () => {
  let userNameEl = document.getElementById("name").value;

  if (userNameEl.length >= 2) {
    window.alert(`Hello ${userNameEl}! Your message has been succesfully submitted`);
  } else {
    window.alert("Please enter your name");
  }
});

const email = document.getElementById("email");
const tick = document.querySelector(".tick");
const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

email.addEventListener("keyup", (e) => {
  console.log(e.target.value);
  if (emailRegex.test(e.target.value)) {
    email.parentElement.classList.add("valid");
  } else {
    email.parentElement.classList.remove("valid");
  }
});

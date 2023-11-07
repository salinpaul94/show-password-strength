let password = document.getElementById("password");
let message = document.getElementById("message");
let strength = document.getElementById("strength");

password.addEventListener("input", () => {
  if (password.value.length > 0) {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
  if (password.value.length < 4) {
    strength.innerHTML = "weak";
  } else if (password.value.length >=4 && password.value.length < 8) {
    strength.innerHTML = "medium";
  }
});

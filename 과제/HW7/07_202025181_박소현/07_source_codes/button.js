var id = document.getElementById("id");
var password = document.getElementById("password");
var login = document.getElementById("login");
password.addEventListener("keyup", checkButton);
id.addEventListener("keyup", checkButton);

function checkButton() {
  id.value.length > 0 && password.value.length > 0
    ? (login.disabled = false)
    : (login.disabled = true);
}

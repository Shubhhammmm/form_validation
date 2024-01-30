function data() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (
    name == "" ||
    email == "" ||
    number == "" ||
    password == "" ||
    confirmPassword == ""
  ) {
    alert("All Fields are mandatory");
    return false;
  } else if (number.length < 10 || number.length > 10) {
    alert("Number should be of 10 digits");
    return false;
  }
  else if (isNaN(b)) {
    alert("Only numbers are allowed");
    return false;
  }
  else if (password != confirmPassword) {
    alert("Please enter same password");
    return false;
  }
   else true;
}

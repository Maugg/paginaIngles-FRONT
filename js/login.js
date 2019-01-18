function verPassword() {
  var x = document.getElementById("Mypass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
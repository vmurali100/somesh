function createUser() {
  var user = {
    email: "",
    password: ""
  };
  //   user.email = document.getElementById("email").value;
  //   user.password = document.getElementById("password").value;

  for (a in user) {
    user[a] = document.getElementById(a).value;
  }
  console.log(user);
}

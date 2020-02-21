var users = JSON.parse(localStorage.getItem("users"));
if (users == null) {
  users = [];
}
function createUser() {
  var person = captureUser();
  users.push(person);
  localStorage.setItem("users", JSON.stringify(users));
  displayUsers();
  clearForm(person);
}

//To user while creating and updating
function captureUser() {
  var person = {
    email: "",
    password: ""
  };

  for (a in person) {
    person[a] = document.getElementById(a).value;
  }

  return person;
}

function clearForm(obj) {
  for (a in obj) {
    document.getElementById(a).value = "";
  }
}

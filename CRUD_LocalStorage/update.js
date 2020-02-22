function editUser(i) {
  gindex = i; //It  will globally(across application) Available if we wont use var
  //   var obj = users[i];
  //   for (a in obj) {
  //     document.getElementById(a).value = obj[a];
  //   }

  //   document.getElementById("update").style.display = "block";
  //   document.getElementById("submit").style.display = "none";
  displayUsers(true);
}

function updateUser() {
  var user = captureUser();
  users[gindex] = user;
  localStorage.setItem("users", JSON.stringify(users));
  displayUsers();

  document.getElementById("update").style.display = "none";
  document.getElementById("submit").style.display = "block";

  clearForm(user);
}

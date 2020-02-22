function delteUser(i) {
  users.splice(i, 1);
  localStorage.setItem("users", JSON.stringify(users));
  displayUsers();
}

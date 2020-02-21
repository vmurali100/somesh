function displayUsers() {
  document.getElementById("myTable").innerHTML = "";
  users.map(function(user) {
    console.log(user);
    var myTr = document.createElement("tr");

    // for (a in user) {
    // var myTd = document.createElement("td");
    // myTd.innerHTML = user[a];
    // myTr.appendChild(myTd);
    // }

    //Object.values(user) will convery obj as Array

    Object.values(user).map(function(val) {
      var myTd = document.createElement("td");
      myTd.innerHTML = val;
      myTr.appendChild(myTd);
    });
    document.getElementById("myTable").appendChild(myTr);
  });
}

displayUsers();

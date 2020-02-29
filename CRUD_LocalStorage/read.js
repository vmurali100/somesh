function displayUsers(isEdit) {
  if (isEdit) {
    document.getElementById("myTable").innerHTML = "";
    users.map(function(user, i) {
      var myTr = document.createElement("tr");

      if (gindex != i) {
        Object.values(user).map(function(val) {
          var myTd = document.createElement("td");
          myTd.innerHTML = val;
          myTr.appendChild(myTd);
        });
        createButtons(myTr, i);
      } else {
        Object.values(user).map(function(val) {
          var myTd = document.createElement("td");
          var myinput = document.createElement("input");
          myinput.setAttribute("onkeyup", "updateValues(" + i + ")");
          myinput.value = val;
          myinput.setAttribute("class", "form-control");
          myTd.appendChild(myinput);
          myTr.appendChild(myTd);
        });
        myTr.style.background = "grey";
        createButtons(myTr, i);
      }
      document.getElementById("myTable").appendChild(myTr);
    });
  } else {
    document.getElementById("myTable").innerHTML = "";
    users.map(function(user, index) {
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

      var editTd = document.createElement("td");
      var deleteTd = document.createElement("td");

      myTr.appendChild(editTd);
      myTr.appendChild(deleteTd);

      var editbtn = document.createElement("button");
      editbtn.innerHTML = "Edit";
      editbtn.setAttribute("class", "btn btn-warning");
      editbtn.setAttribute("onclick", "editUser(" + index + ")");
      var deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "Delete";
      deleteBtn.setAttribute("class", "btn btn-danger");
      deleteBtn.setAttribute("onclick", "delteUser(" + index + ")");

      editTd.appendChild(editbtn);
      deleteTd.appendChild(deleteBtn);

      document.getElementById("myTable").appendChild(myTr);
    });
  }
}

displayUsers();

function createButtons(myTr, i) {
  var editTd = document.createElement("td");
  var deleteTd = document.createElement("td");

  myTr.appendChild(editTd);
  myTr.appendChild(deleteTd);

  var editbtn = document.createElement("button");
  editbtn.innerHTML = "Edit";
  editbtn.setAttribute("class", "btn btn-warning");
  editbtn.setAttribute("onclick", "editUser(" + i + ")");
  var deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.setAttribute("class", "btn btn-danger");
  deleteBtn.setAttribute("onclick", "delteUser(" + i + ")");

  editTd.appendChild(editbtn);
  deleteTd.appendChild(deleteBtn);
}

function updateValues(row) {
  var isInvalid = false;
  var allrows = document.getElementsByTagName("tr");
  var targetRow = allrows[row + 1];
  updatedPerson = {
    email: targetRow.cells[0].children[0].value,
    password: targetRow.cells[1].children[0].value
  };

  for (a in updatedPerson) {
    if (a !== "email") {
      if (updatedPerson[a] == "") {
        isInvalid = true;
      }
    } else {
      var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!pattern.test(updatedPerson[a])) {
        isInvalid = true;
      }
    }

    console.log(a);
  }
  if (isInvalid) {
    targetRow.cells[2].children[0].setAttribute("disabled", true);
  } else {
    targetRow.cells[2].children[0].removeAttribute("disabled");
  }
  // console.log(gindex);
  targetRow.cells[2].children[0].innerHTML = "Update";
  targetRow.cells[2].children[0].setAttribute("onclick", "updateUser()");
}

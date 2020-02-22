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
  var allrows = document.getElementsByTagName("tr");
  console.log(row);
  var targetRow = allrows[row + 1];
  targetRow.cells[2].children[0].innerHTML = "Update";
}

function getDataFromApi() {
  return new Promise(function(resolve, reject) {
    resolve("I am Success ...");
    // reject();
  });
}

// getDataFromApi()
//   .then(function(res) {
//     console.log(res);
//   })
//   .catch(function() {
//     console.log("soething went wrong");
//   });

function showFetch() {
  fetch(
    "http://www.filltext.com/?rows=5&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true"
  )
    .then(function(res) {
      return res.json();
    })
    .then(function(response) {
      console.log("Some eomsmsoeom");
      createDynamicForm(response);
    })
    .catch(function(error) {
      // console.log(error);
      console.log("Some thing went wrong" + error);
    });
}
showFetch();

// try {
//   calculateAbc();
// } catch (error) {
//   console.log("Something went wrong ... comback later");
// }

// function createDynamicForm(data) {
//   var obj = data[0];
//   for (a in obj) {
//     var divElement = document.createElement("div");
//     divElement.setAttribute("class", "form-group");
//     document.querySelector("form").appendChild(divElement);

//     var inputElement = document.createElement("input");
//     inputElement.setAttribute("class", "form-control");
//     divElement.appendChild(inputElement);
//   }
// }

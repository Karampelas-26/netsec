const username = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("submit-btn");
const SERVER_ULR = "http://localhost:8080/auth/login"

username.value = "admin";
password.value = "admin";

button.addEventListener("click", () => {
    console.log("Username " + username.value + " Password " + password.value)
    // fetch("http://localhost:8080/login", {
    //     method: "GET"
    // }).then (res => {
    //     console.log(res);
    // })
    postLoginToServer()
   
    // postData(SERVER_ULR, data)

})


function postLoginToServer() {
    data = {
        username: 'admin',
        password: 'admin'
    }
    fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem("token", data.token)
    })
    .catch(error => console.log(error));
}

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
let token;
const usr = document.getElementById("username");
const pass = document.getElementById("password");
const button = document.getElementById("submit-btn");
const SERVER_ULR = "http://localhost:8080/auth/login"

button.addEventListener("click", async () => {
    document.getElementById("dummy-text").innerHTML = '';
    document.getElementById("pass-exp").innerHTML = "";
    await postLoginToServer();
})


function postLoginToServer() {
    data = {
        username: usr.value,
        password: pass.value
    };
    fetch('https://localhost:8443/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        console.log(res.status)
        if(res.status == 400) {
            alert("Wrong credentials");
        }
        if(res.status == 403) {
            alert("Account is locked");
        }
        if(res.status == 200) {
            token = data.token;
            getDummyText(token);
        }
        return res.json();
    })
    .then(data => {
        if(data.passwordExpired == true) {
            document.getElementById("pass-exp").innerHTML = "Your password is expired!";
        }
    })
    .catch(error => console.log(error));
}


async function getDummyText(token) {
    console.log("should")
    await fetch('https://localhost:8443/auth/secure-dummy-end-point', {
        method: 'GET',
        headers: {
            'Authentication': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("dummy-text").innerHTML = data.response;
    })
    .catch(error => console.log(error));
    token = '';
}
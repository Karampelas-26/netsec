let dummy = document.getElementById("dummy-text");
let token = localStorage.getItem("token");
// console.log(token)
let username = localStorage.getItem("username")
// console.log(localStorage.getItem(username))

let log_data = []

// console.log("Loggings: " + username + " " + token)
// let template = document.getElementById("logging").innerHTML;
// let compiled_template = Handlebars.compile(template);
// let loggings = []
// let rendered = compiled_template({loggings})
// document.getElementById("logging").innerHTML = rendered

async function getLogging() {
    await fetch('https://localhost:8443/auth/secure-dummy-end-point', {
        method: 'GET',
        headers: {
            'Authentication': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => {
        // log_data = data.loggingList
        dummy.innerHTML = data.response
        console.log(data.response)
    })
    .catch(error => console.log(error));
}

async function init() {

    await getLogging()
    // console.log(" first " + loggings)
    // let template = document.getElementById("logging").innerHTML;
    // let compiled_template = Handlebars.compile(template);
    // let rendered = compiled_template(loggings)
    // document.getElementById("logging").innerHTML = rendered

    // let template = document.getElementById("logging").innerHTML
    // let compiled_template = Handlebars.compile(template)
    // let rendered = compiled_template(loggings)
    // document.getElementById("logging").innerHTML = rendered;
    // $(function() {
    //     console.log('asdf')
    //     var template = Handlebars.compile($("#logging").html());
    //     $('#stemplate tbody').html(template(log_data));
    // });
    hdn()
} 

function hdn() {

    var template = Handlebars.compile(document.getElementById("logging").innerHTML);
    
};

init()

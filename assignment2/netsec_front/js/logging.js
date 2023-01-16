// let template = document.getElementById("logging");
// let compiled_template = Handlebars.compile(template);
// // let rendered = compiled_template({
// //     categories
// // })
// const token = localStorage.getItem(token);
console.log(localStorage.getItem(token))

function getLogging() {
    fetch('http://localhost:8080/auth/loggging', {
        method: 'GET',
        headers: {
            'Authentication': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.log(error));
}

// getLogging()
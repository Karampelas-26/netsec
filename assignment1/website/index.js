const button =  document.getElementById("submit-username");
const input =  document.getElementById("input-username");

button.addEventListener('click', sumbit);

function sumbit() {
    if(input.value == '3180072') {
        console.log('success');
        alert('success');
    }
    else{
        console.log('fail')
        alert('fail');
    }
    input.value = '';
}
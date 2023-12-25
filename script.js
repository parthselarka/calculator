// script.js
function input(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}


const loading = [
    "this may take some time", "loading...." , "calculating the right answer...." , "Please wait a moment." , "loading,please be patient" , "Hold on while we prepare" , "Data is on its way", "Sit tight, we're getting things ready", "This won't take too long" , "we're almost there."
]

console.log(loading.length);

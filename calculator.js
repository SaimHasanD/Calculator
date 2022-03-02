// clear (C) button for clear all
function deleteAll() {
    document.getElementById("myResult").value = "";
}

// add new value on my result input
function calculator(newValue) {
    document.getElementById("myResult").value += newValue;
}

// calculate all value 
function result() {
    const resultValue = document.getElementById("myResult").value;
    const result = eval(resultValue);
    document.getElementById("myResult").value = result;
}

// backspace (B) for go back 1 string
function backSpace() {
    const backspace = document.getElementById("myResult").value;
    document.getElementById("myResult").value = backspace.substring(0, backspace.length - 1);
}
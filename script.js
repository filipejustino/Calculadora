
function Apagar() {
    var display = document.getElementById("resultado");
    display.value = display.value.slice(0, -1);
}

function addNumero(char) {
    var display = document.getElementById("resultado");
    display.value += char;
}

function Clear() {
    document.getElementById("resultado").value = "";
}

function Calcular() {
    var display = document.getElementById("resultado");
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}

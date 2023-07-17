function appendToDisplay(value) {
    var display = document.getElementById("display");
    display.value += value;
}

function clearDisplay() {
    var display = document.getElementById("display");
    display.value = "";
} 

function calculate() {
    var display = document.getElementById("display");
    var result = eval(display.value);
    display.value = result;
}

function remove(){
    var display = document.getElementById("display");
    var result1 = display.value.split(""); //divide os valores do display em array
    var result2 = result1.pop(); //apaga o ultimo elemento do array
    display.value = result1.join(''); //junta novamente os elementos do array em um valor uníco
}
const display = document.getElementById('display');
let bracketsOpened = false;

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let expression = display.value;

        // Kontrollojmë rastin kur përdoret operatori %
        if (expression.includes('%')) {
            // Ndarja me 100 për t'u përdorur si një përqindje
            expression = expression.replace(/%/g, '/100');
        }

        const result = eval(expression);

        if (!isFinite(result)) {
            display.value = "Undefined";
        } else {
            // Përdorimi i toFixed për të limituar numrin e shifrave pas pikes
            display.value = parseFloat(result.toFixed(10));
        }
    } catch (error) {
        display.value = "Error";
    }
}

function toggleSign() {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = -currentValue;
    }
}

function openthebrackets() {
    if (!bracketsOpened) {
        appendToDisplay('(');
        bracketsOpened = true;
    } else {
        appendToDisplay(')');
        bracketsOpened = false; 
    }
}
function updateResult() {
    // Llogaritni dhe shfaqni rezultatin aktual
    calculate();
}

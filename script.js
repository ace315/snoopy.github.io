// Predefined conversion function
function convertToSystems(number) {
    const decimalNumber = parseInt(number, 10);
    if (!isNaN(decimalNumber)) {
        return {
            binary: decimalNumber.toString(2),
            decimal: decimalNumber,
            octal: decimalNumber.toString(8),
            hexadecimal: decimalNumber.toString(16).toUpperCase()
        };
    }
    return null;
}

// Main function to update the DOM
function convertNumber() {
    const inputNumber = document.getElementById('inputNumber').value;
    const results = convertToSystems(inputNumber);

    if (results) {
        document.getElementById('binaryOutput').textContent = results.binary;
        document.getElementById('decimalOutput').textContent = results.decimal;
        document.getElementById('octalOutput').textContent = results.octal;
        document.getElementById('hexadecimalOutput').textContent = results.hexadecimal;
    } else {
        document.getElementById('binaryOutput').textContent = '';
        document.getElementById('decimalOutput').textContent = '';
        document.getElementById('octalOutput').textContent = '';
        document.getElementById('hexadecimalOutput').textContent = '';
    }
}

// Event listener
document.getElementById('inputNumber').addEventListener('input', convertNumber);


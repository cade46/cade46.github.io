while (true) {
    // Get user inputs
    let num1str = prompt('Type a number:');
    if (num1str === null) break; // Exit if the user clicks Cancel
    
    let op = prompt('Type an operator (x, /, +, -) :');
    if (op === null) break; // Exit if the user clicks Cancel
    
    let num2str = prompt('Type a number:');
    if (num2str === null) break; // Exit if the user clicks Cancel

    // Convert strings to numbers using parseFloat
    let num1 = parseFloat(num1str);
    let num2 = parseFloat(num2str);

    // Check for valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid numbers entered. Please try again.");
    } else {
        // Perform the operation based on the input operator
        if (op === "x" || op === "*") {
            alert(num1 * num2);
        } else if (op === "/") {
            if (num2 === 0) {
                alert("Cannot divide by zero!");
            } else {
                alert(num1 / num2);
            }
        } else if (op === "+") {
            alert(num1 + num2);
        } else if (op === "-") {
            alert(num1 - num2);
        } else {
            alert('!!__ERROR: You may have typed an invalid operator__!!');
        }
    }
}

alert("Github:Cade2j");

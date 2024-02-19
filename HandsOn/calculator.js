function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	if (b !== 0) {
		return a / b;
	} else {
		return "Error: Division by zero is not allowed";
	}
}

function calculator() {
	var a = Number(prompt("Enter the first number:"));
	var b = Number(prompt("Enter the second number:"));
	var operation = prompt(
		"Enter the operation (add, subtract, multiply, divide):"
	);

	var result;
	switch (operation) {
		case "add":
			result = add(a, b);
			break;
		case "subtract":
			result = subtract(a, b);
			break;
		case "multiply":
			result = multiply(a, b);
			break;
		case "divide":
			result = divide(a, b);
			break;
		default:
			result = "Error: Invalid operation";
			break;
	}

	alert("The result is: " + result);
}

calculator();

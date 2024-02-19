const { calculator } = require("./calculator");

describe("calculator", () => {
	it("adds two numbers", () => {
		expect(calculator(1, 2, "add")).toBe("The result is: 3");
	});

	it("subtracts two numbers", () => {
		expect(calculator(5, 2, "subtract")).toBe("The result is: 3");
	});

	it("multiplies two numbers", () => {
		expect(calculator(3, 2, "multiply")).toBe("The result is: 6");
	});

	it("divides two numbers", () => {
		expect(calculator(6, 2, "divide")).toBe("The result is: 3");
	});

	it("returns error for invalid operation", () => {
		expect(calculator(6, 2, "invalid")).toBe(
			"The result is: Error: Invalid operation"
		);
	});
});

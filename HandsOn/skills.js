function calculateNumbers(var1, var2) {
	return var1 + var2;
}

// A function that calculates the price of a vehicle based on gas mileage, year and number of miles driven.
function calculatePrice(mileage, year, miles) {
	var price = 0;
	if (year < 2000) {
		price = 10000;
	} else if (year < 2010) {
		price = 20000;
	} else {
		price = 30000;
	}
	price -= miles * mileage;
	return price;
}

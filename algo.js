const fibonacci = (n) => {
	return Math.round(
		(1 / Math.sqrt(5)) *
			(((1 + Math.sqrt(5)) / 2) ** n - ((1 - Math.sqrt(5)) / 2) ** n)
	);
};

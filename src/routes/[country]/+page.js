export async function load({ fetch, params }) {
	// const res = await fetch('https://restcountries.com/v3.1/name/' + params.country);

	const res = await fetch('https://restcountries.com/v3.1/alpha/' + params.country);
	const country = await res.json();

	const borderArray = [];
	if (country[0].borders == undefined) {
		return { country, borderArray };
	}
	const bordersCode = country[0].borders;
	const keys = Object.keys(bordersCode);
	const values = keys.map((key) => bordersCode[key]);
	const border = values.map(async (item) => {
		const borders = await fetch('https://restcountries.com/v3.1/alpha?codes=' + item);
		const bord = await borders.json();
		const result = bord[0].name.common;
		return borderArray.push(result);
	});

	await Promise.all(border);
	return { country, borderArray };
}

export async function load({ fetch }) {
	const res = await fetch('https://restcountries.com/v3.1/all');
	const countries = await res.json();
	// console.log(countries);
	return { countries };
}

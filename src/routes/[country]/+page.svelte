<script>
	export let data;
	import SingleCountry from '$lib/template/SingleCountry.svelte';

	$: country = data.country[0];
	function ObjToArr(params) {
		const obj = params;
		const keys = Object.keys(obj);
		const values = keys.map((key) => obj[key]);

		return values;
	}
</script>

<main>
	<button on:click={() => window.history.back()}> <p>go back</p> </button>

	<SingleCountry
		domain={country.tld}
		alt={country.flags.alt}
		nativeName={country.name.nativeName
			? Object.values(data.country[0].name.nativeName)[0].common
			: 'why? another name?'}
		name={country.name.common}
		flag={country.flags.png}
		population={country.population || 'no one is here'}
		region={country.region}
		subRegion={country.subregion || "it's just one big place"}
		capital={country.capital == undefined ? 'none recorded yet' : country.capital.join(', ')}
		currency={data.country[0].currencies
			? Object.values(data.country[0].currencies)[0].name
			: "we don't spend here 💸"}
		languages={country.languages ? Object.values(country.languages).join(', ') : 'kjzjvhf 🤐'}
		borderCountries={data.borderArray}
	/>
</main>

<style>
	main {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 3rem;
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem 1rem;
	}

	button {
		max-width: max-content;
		text-decoration: none;
		font-weight: 600;
		text-transform: capitalize;
		padding: 0.5rem 1rem;
		cursor: pointer;
		border: none;
	}
	@media screen and (min-width: 520px) {
		main {
			padding-inline: 2rem;
		}
	}
	@media screen and (min-width: 768px) {
		main {
			padding-inline: 2rem;
		}
	}
	@media screen and (min-width: 1200px) {
		main {
			padding-inline: 0rem;
		}
	}
</style>

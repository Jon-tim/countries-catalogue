<script>
	export let data;
	// console.log(data);
	import CountryCard from './components/CountryCard.svelte';
	$: info = data.countries;
</script>

<main>
	<section class="">
		{#each info as country, id (id)}
			<CountryCard
				name={country.name.official}
				common={country.name.common}
				capital={country.capital}
				img={country.flags.png}
				alt={country.flags.alt}
				population={country.population}
				region={country.region}
			/>
		{/each}
	</section>
</main>

<style>
	main {
		padding: 2rem 0rem;
	}
	section {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 2rem;
		justify-content: center;
	}
	
</style>

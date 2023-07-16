<script>
	export let data;
	import Controls from '$lib/Controls.svelte';
	import Countries from '$lib/Countries.svelte';

	$: info = data.countries;

	// function to filter
	function filter(params) {
		if (params === ' ' || params === null) {
		} else {
			fetch(`https://restcountries.com/v3.1/name/${params}`)
				.then((res) => res.json())
				.then((data) => {
					if (data.status != 404) {
						info = data;
					}
				});
		}
	}
	// function to search
	function search(params) {
		if (params === 'all') {
			fetch(`https://restcountries.com/v3.1/${params}`)
				.then((res) => res.json())
				.then((data) => (info = data));
		} else {
			fetch(`https://restcountries.com/v3.1/region/${params}`)
				.then((res) => res.json())
				.then((data) => (info = data));
		}
	}
</script>

<main>
	<Controls {search} {filter} />
	<Countries {info} />
</main>

<style>
	main {
		padding: 1rem;
		max-width: 1250px;
		margin: 0 auto;
	}
</style>

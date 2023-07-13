<script>
	export let data;
	import Controls from '$lib/Controls.svelte';
	import Countries from '$lib/Countries.svelte';
</script>

<main>
	<Controls />
	<Countries {data} />
</main>

<style>
	main {
		padding: 1rem;
		max-width: 1250px;
		margin: 0 auto;
	}
</style>

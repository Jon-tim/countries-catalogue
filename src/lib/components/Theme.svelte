<script>
	import { onMount } from 'svelte';

	let darkTheme = false;

	if (typeof localStorage !== 'undefined') {
		const storedTheme = localStorage.getItem('theme');
		if (storedTheme !== null) {
			darkTheme = storedTheme === 'dark';
		}
	}

	if (typeof window !== 'undefined') {
		darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
	}

	function switchTheme() {
		darkTheme = !darkTheme;

		if (darkTheme == true) {
			document.documentElement.classList.remove('light');
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
			document.documentElement.classList.add('light');
		}
		localStorage.setItem('theme', darkTheme ? 'dark' : 'light');
	}

	onMount(() => {
		const storedTheme = localStorage.getItem('theme');
		if (storedTheme !== null) {
			darkTheme = storedTheme === 'dark';
		} else {
			darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
		}
		document.documentElement.classList.add(darkTheme ? 'dark' : 'light');
	});
</script>

<button on:click={switchTheme}>
	{#if darkTheme}
		<i class="bx bxs-sun" />
		<p>light mode</p>
	{:else}
		<i class="bx bxs-moon" />
		<p>dark mode</p>
	{/if}
</button>

<style>
	button {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		cursor: pointer;
		border: none;
		background: none;
		box-shadow: none;
	}

	p {
		font-weight: 600;
		font-size: 0.8rem;
		text-transform: capitalize;
	}

	@media screen and (min-width: 768px) {
		p {
			font-size: 1rem;
		}
	}
</style>

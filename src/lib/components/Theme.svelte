<!-- ThemeToggle.svelte -->
<script>
	import { onMount } from 'svelte';
	import { theme } from '../store/theme';
	console.log($theme);
</script>

<!-- <button on:click={toggleTheme}>Toggle Theme</button> -->

<button on:click={theme.switchTheme()}>
	{#if $theme === 'light'}
		<i class="bx bxs-moon" />
		<p>dark mode</p>
	{:else if $theme == 'dark'}
		<i class="bx bxs-sun" />
		<p>light mode</p>
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

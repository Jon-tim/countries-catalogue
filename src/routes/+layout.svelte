<script>
	import Navbar from '$lib/Navbar.svelte';
	import '../Styles/default.css';
	// import { onMount } from 'svelte';


	// let isDarkMode = false;

	// if (typeof window !== 'undefined') {
	// 	isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
	// }

	// onMount(() => {
	// 	document.body.classList.add(isDarkMode ? 'dark' : 'light');
	// });
</script>

<main class="container">
	<Navbar />
	<slot />
</main>

<style>
</style>

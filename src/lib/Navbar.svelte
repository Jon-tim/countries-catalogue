<script>
	import Theme from './components/Theme.svelte';

</script>

<nav class="">
	<section>
		<a href="/">Where in the world?</a>
		<Theme />
	</section>
</nav>

<style>
	nav {
		position: sticky;
		top: 0px;
		z-index: 1000;
	}
	nav section {
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.5rem 1rem;
		max-width: 1250px;
	}

	a {
		box-shadow: none;
		text-decoration: none;
		font-weight: 800;
		font-size: 1rem;
	}

	@media screen and (min-width: 520px) {
		nav section {
			padding-inline: 1.5rem;
		}
	}
	@media screen and (min-width: 768px) {
		a {
			font-size: 1.2rem;
		}
	}
	@media screen and (min-width: 1200px) {
		nav section {
			padding-inline: 1rem;
		}
	}
</style>

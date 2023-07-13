<script>
</script>

<nav class="">
	<section>
		<a href="/">Where in the world?</a>
		<div>
			<i class="bx bxs-moon" />
			<p>dark mode</p>
		</div>
	</section>
</nav>

<style>
	nav {
		position: sticky;
		top: 0px;
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
		text-decoration: none;
		color: white;
		font-weight: 800;
		font-size: 1rem;
	}

	div {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		cursor: pointer;
	}

	p {
		font-weight: 600;
		font-size: 0.8rem;
		text-transform: capitalize;
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
		p {
			font-size: 1rem;
		}
	}
	@media screen and (min-width: 1200px) {
		nav section {
			padding-inline: 1rem;
		}
	}
</style>

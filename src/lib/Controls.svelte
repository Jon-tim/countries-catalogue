<script>
	import '../Styles/colours.css';

	const continents = ['africa', 'asia', 'oceania', 'america', 'europe'];
	let displayContinents = false;

	function handleDisplay() {
		displayContinents = !displayContinents;
	}
</script>

<section class="container">
	<section>
		<form class="box">
			<button>
				<i class="bx bx-search" />
			</button>
			<input type="text" placeholder="Search for a country..." />
		</form>
		<div class="filter-box">
			<div class="filter box" on:click={handleDisplay}>
				<p>Filter by Region</p>
				<i class="bx bx-chevron-down" />
			</div>
			<div class={`continents box ${displayContinents ? 'show' : ''}`}>
				{#each continents as continent, id (id)}
					<p on:click={handleDisplay}>{continent}</p>
				{/each}
			</div>
		</div>
	</section>
</section>

<style>
	.container {
		width: 100%;
	}
	.container section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	@media screen and (min-width: 768px) {
		.container section {
			flex-direction: row;
			justify-content: space-between;
		}

		
		p {
			font-size: 1rem;
		}
	}

	form,
	.filter,
	.continents {
		border-radius: 0.4rem;
	}

	form {
		padding: 1rem 2rem;
		display: flex;
		align-items: center;
		gap: 1.5rem;
		padding: 1rem 2rem;
		border-radius: 0.4rem;
	}

	i {
		font-size: 1.2rem;
		display: block;
	}

	button {
		cursor: pointer;
	}

	button,
	input {
		height: 100%;
		display: block;
		outline: none;
		border: none;
		background-color: transparent;
		color: white;
		font-weight: 600;
	}

	.filter-box {
		width: max-content;
		position: relative;
		/* overflow: hidden; */
	}
	.filter {
		padding: 1rem 1.5rem;
		display: flex;
		align-items: center;
		gap: 3rem;
		font-size: 0.8rem;
		font-weight: 600;
		cursor: pointer;
	}

	.continents {
		display: none;
		position: absolute;
		width: 100%;
		top: 110%;
		overflow: hidden;
	}
	.continents p {
		padding: 0.8rem 1.5rem;
		text-transform: capitalize;
		font-weight: 300;
		font-size: 0.8rem;
		cursor: pointer;
	}

	.continents p:hover {
		background-color: var(--Dark-Blue);
	}

	.show {
		display: block;
	}
</style>

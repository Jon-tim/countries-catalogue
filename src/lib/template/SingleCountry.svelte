<script>
	export let flag;
	export let alt;
	export let name;
	export let nativeName;
	export let population;
	export let region;
	export let subRegion;
	export let capital;
	export let domain;
	export let currency;
	export let languages;
	export let borderCountries;
</script>

<section>
	<div class="img-holder">
		<img src={flag} {alt} />
	</div>
	<div class="country-info">
		<h1>{name}</h1>
		<aside>
			<div class="details">
				<div class="key-values">
					<p class="key">native name:</p>
					<span class="value">{nativeName}</span>
				</div>
				<div class="key-values">
					<p class="key">population:</p>
					<span class="value">{population.toLocaleString()}</span>
				</div>
				<div class="key-values">
					<p class="key">region:</p>
					<span class="value">{region}</span>
				</div>
				<div class="key-values">
					<p class="key">sub region:</p>
					<span class="value">{subRegion}</span>
				</div>
				<div class="key-values">
					<p class="key">capital:</p>
					<span class="value">{capital.join(', ')}</span>
				</div>
			</div>
			<div class="details">
				<div class="key-values">
					<p class="key">top level domain:</p>
					<span class="value">{domain}</span>
				</div>
				<div class="key-values">
					<p class="key">currencies:</p>
					<span class="value">{currency}</span>
				</div>
				<div class="key-values lang">
					<p class="key">languages:</p>
					<span class="value">{languages.join(', ')}</span>
				</div>
			</div>
		</aside>
		<div class="key-values border-section">
			<p class="key">border countries:</p>
			<div class="borders">
				{#if borderCountries.length == 0 || borderCountries == undefined}
					<div class="noBorder">
						<p>Seems this country has no bordering country 🚫 🌍</p>
						<button on:click={() => window.history.back()}>Click here to go back home</button>
					</div>
				{:else}
					{#each borderCountries as border, id (id)}
						<a href={`/${border}`} class="border">
							<p>{border}</p>
						</a>
					{/each}
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}

	aside {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		width: 100%;
	}

	h1 {
		margin-bottom: 1.5rem;
	}
	.img-holder {
		width: 100%;
	}
	img {
		width: 100%;
		height: 300px;
		object-fit: cover;
		object-position: center;
	}
	p,
	span {
		display: inline-block;
	}

	.lang span {
		/* width: 100%; */
		word-wrap: break-word;
		display: inline-block;
	}

	p {
		text-transform: capitalize;
		font-weight: 600;
	}
	span {
		color: white;
	}
	.details {
		display: flex;
		flex-direction: column;
		gap: 0.7rem;
	}
	.key-values {
		display: flex;
		gap: 0.5rem;
	}

	.border-section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-top: 2rem;
	}
	.borders {
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-wrap: wrap;
	}
	.border {
		min-width: max-content;
		padding: 0.35rem 0.8rem;
	}
	.noBorder p {
		color: red;
		text-transform: none;
	}

	.noBorder button {
		margin-top: 0.3rem;
		display: block;
		width: max-content;
		padding: 0.5rem 1rem;
		font-size: inherit;
		cursor: pointer;
		text-decoration: none;
		color: #fff;
		font-weight: 600;
	}

	@media screen and (min-width: 720px) {
		aside {
			flex-direction: row;
		}
		.details {
			width: 50%;
			flex: 1;
		}
	}
	@media screen and (min-width: 768px) {
		section {
			flex-direction: row;
		}
		.img-holder,
		.country-info {
			/* flex: 1; */
			width: 50%;
		}
		.img-holder img {
			width: 90%;
		}
	}
</style>

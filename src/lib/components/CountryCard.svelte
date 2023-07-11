<script>
	export let img;
	export let population;
	export let region;
	export let capital;
	export let name;
	export let common;
	export let alt;
	// console.log(common);
</script>

<a href={`/${common}`}>
	<div class="img-holder">
		<img src={img} {alt} />
	</div>
	<div class="country-details">
		<h1>{name}</h1>
		<div class="key-values">
			<p class="key">population:</p>
			<span class="value">{population.toLocaleString()}</span>
		</div>
		<div class="key-values">
			<p class="key">region:</p>
			<span class="value">{region}</span>
		</div>
		<div class="key-values">
			<p class="key">capital:</p>
			<span class="value">{capital}</span>
		</div>
	</div>
</a>

<style>
	a {
		display: block;
		border-radius: 10px;
		overflow: hidden;
		max-width: 280px;
		text-decoration: none;
	}
	.img-holder {
		height: 50%;
		width: 100%;
		overflow: hidden;
	}
	img {
		width: 100%;
	}
	h1 {
		font-size: 1.15rem;
		margin-bottom: 0.5rem;
	}
	p,
	span {
		display: inline-block;
	}
	p {
		text-transform: capitalize;
		font-weight: 600;
	}
	span {
		color: white;
	}

	.country-details {
		padding: 1.5rem 1.2rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
</style>

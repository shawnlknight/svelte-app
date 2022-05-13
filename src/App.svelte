<script>
	export let name;
	export let location;
</script>

<main>
	<h1>Welcome!</h1>
	<p>I'm {name}, a software engineer living in {location}.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #7300ff;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 200;
	}

	p {
		font-size: 1.2em;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
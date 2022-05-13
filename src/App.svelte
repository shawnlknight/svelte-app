<script>
	export let name;
	export let location;
</script>

<main>
	<h1>Hello!</h1>
	<p>I'm {name}.</p>
	<p>A software engineer living in {location}.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 400px;
		margin: 0 auto;
	}

	h1 {
		color: rgb(0 255 255) ;
		text-transform: uppercase;
		font-size: 5em;
		font-weight: 300;
		/* text-shadow: -0vh 0 #a697ba, 0 0.1vh #a697ba, 0.4vh 0 #a697ba, 0 -0.1vh #a697ba; */
		text-shadow:
			0 1px 0px #378ab4,
			1px 0 0px #5dabcd,
			1px 2px 1px #378ab4,
			2px 1px 1px #5dabcd,
			2px 3px 2px #378ab4,
			3px 2px 2px #5dabcd,
			3px 4px 2px #378ab4,
			4px 3px 3px #5dabcd,
			4px 5px 3px #378ab4,
			5px 4px 2px #5dabcd,
			5px 6px 2px #378ab4,
			6px 5px 2px #5dabcd,
			6px 7px 1px #378ab4,
			7px 6px 1px #5dabcd,
			7px 8px 0px #378ab4,
			8px 7px 0px #5dabcd;
	}

	p {
		color: #fff;
		font-size: 1.5em;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
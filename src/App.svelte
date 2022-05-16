<script>
	export let name;
	export let location;
</script>

<main>
	<h1 data-shadow='Hello!'>Hello!</h1>
	<p>They call him {name}.</p>
	<p>He punches a keyboard during the day.</p>
	<p>He can be found in {location}.</p>
</main>

<style>
	@import url(https://fonts.googleapis.com/css?family=Creepster);
	@import url(https://fonts.googleapis.com/css?family=Koulen);
	
	*, *:before, *:after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		position: relative;
  }

	main {
		text-align: center;
		padding: 1em;
		max-width: 410px;
		margin: 0 auto;
	}

	h1 {
		display: inline-block;
		color: #67be55;
		font-family: 'Creepster', serif;
		font-size: 10em; 
		letter-spacing: 10px;
		text-shadow: .03em .03em 0 rgb(24, 23, 23);
  }
	
  h1:after {
    content: attr(data-shadow);
    position: absolute;
    top: .06em; left: .06em;
    z-index: -1;
    text-shadow: none;
    background-image:
      linear-gradient(
        45deg,
        transparent 45%,
        rgb(250, 195, 30) 45%,
        rgb(250, 195, 30) 55%,
        transparent 0
			);
    background-size: .05em .05em;
		background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  
    animation: shad-anim 15s linear infinite;
	}

	@keyframes shad-anim {
		0% {background-position: 0 0}
		0% {background-position: 100% -100%}
  }

	p {
		color: rgb(250, 195, 30);
		font-size: 1.8em;
		margin: 1em 0;
		font-family: 'Koulen', serif;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	@media (max-width: 640px) {
		main {
			max-width: none;
		}

		h1 {
			font-size: 5em;
		}

		p {
			font-size: 1.5em;
		}
	}
</style>
<script>
	export let name;
	export let location;
	export let occupation;
</script>


<div class="content">
  <p><span class="underline">Name:</span> {name}</p>
  <p><span class="underline">Occupation:</span> {occupation}</p>
  <p><span class="underline">Location:</span> {location}</p>
</div>

<style>	
  p {
		color: rgb(250, 195, 30);
		font-size: 1.8em;
		font-family: 'Roboto Condensed', sans-serif;
		font-style: italic;
	}

  .content {
		margin: 5em 0;
		text-align: left;
	}

	.underline {
		border-bottom: 2px dotted #67be55;
	}

  @media (max-width: 640px) {
		p {
			font-size: 1.5em;
		}
	}
</style>
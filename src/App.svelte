<script>
	import Banner from './components/Banner.svelte'
	import Icon from './components/Icon.svelte';
	import Content from './components/Content.svelte';

	export let name;
	export let location;
	export let occupation;
</script>

<main>
	<Banner/>
	<div class="container">
		<Content name={name} location={location} occupation={occupation} />
		<Icon/>
	</div>
</main>

<style>
	@import url(https://fonts.googleapis.com/css?family=Creepster);
	@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital@0;1&display=swap);

  *, *:before, *:after {
		box-sizing: border-box;
  }

	main {
		text-align: center;
		padding: 1em;
		max-width: 410px;
		margin: 0 auto;
	}

	.container {
		max-width: 410px;
		margin: 0 auto;
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
	}
</style>
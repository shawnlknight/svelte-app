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
		<div class="divider"></div>
		<Icon/>
	</div>
</main>

<style>
	@import url(https://fonts.googleapis.com/css?family=Creepster);
	@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:italc);

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

	.divider {
		text-align: center;
		width: 300px;
		padding: 5em;
		margin: 0 auto;
		border-bottom: 1px solid #67be55;
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
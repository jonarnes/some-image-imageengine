<style>

main {
	text-align: center;
	padding: 1em;
	max-width: 240px;
	margin: 0 auto;
}
p{
font-size: 3em;
}
	h1 {
	color: firebrick;
	text-transform: capitalize;
	font-size: 7em;
	font-weight: 900;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>


<script>
	export let title;
	export let desc;
</script>

<main>
	<h1>{title}</h1>
	<p>{desc}</p>
</main>

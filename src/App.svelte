<style>

main {
	text-align: center;
	padding: 1em;
	max-width: 240px;
	margin: 0 auto;
}
p{
font-size: xx-large;
}
	h1 {
	color: firebrick;
	text-transform: capitalize;
	font-size: 4em;
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

import App from './App.svelte';
const params = new URLSearchParams(window.location.search)

const app = new App({
	target: document.body,
	props: {
		title: params.get('title'),
		desc: params.get('desc')

	}
});

export default app;

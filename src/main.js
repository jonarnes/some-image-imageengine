import App from './App.svelte';

//Read the URL parameters
const params = new URLSearchParams(window.location.search)
const app = new App({
	target: document.body,

	//Put the values of the URL params into props
	props: {
		title: params.get('title'),
		desc: params.get('desc')
	}
});
export default app;

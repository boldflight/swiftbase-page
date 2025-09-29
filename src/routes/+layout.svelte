<script lang="ts">
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/theme';
	import AppHeader from '$lib/components/AppHeader.svelte';
	import AppFooter from '$lib/components/AppFooter.svelte';
	import '../app.css';

	let { children } = $props();

	onMount(() => {
		// Initialize theme system
		const cleanup = theme.init();
		
		// Return cleanup function for onDestroy
		return cleanup;
	});
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<meta property="og:image" content="https://swiftbase.dev/social-media-card.png" />
	<meta name="twitter:image" content="https://swiftbase.dev/twitter-card.png" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<AppHeader />

<main class="min-h-screen">
	{@render children()}
</main>

<AppFooter />
<script lang="ts">
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
	import { assets } from '$app/paths';

	const links = [
		{
			label: 'Features',
			to: '/',
			icon: 'heroicons:cube-transparent'
		},
		{
			label: 'News',
			to: '/news',
			icon: 'heroicons:light-bulb'
		},
		{
			label: 'Ecosystem',
			to: '/ecosystem',
			icon: 'heroicons:rectangle-group'
		},
		{
			label: 'Examples',
			to: '/examples',
			icon: 'heroicons:document'
		}
	];
</script>

<header class="lg:!border-transparent bg-gray-50 dark:bg-gray-950 sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo -->
			<div class="flex items-center">
				<a href="/" class="flex items-center space-x-2">
					<img
						src="{assets}/logo@100px.png"
						alt="Swift Base Logo"
						class="w-8 h-8 mx-auto header-logo"
					/>
					<span class="text-xl font-bold text-gray-900 dark:text-white">Swift Base</span>
				</a>
			</div>

			<!-- Navigation Links -->
			<nav class="hidden md:flex">
				<div class="ring-1 ring-gray-200 dark:ring-gray-800 px-3 gap-x-0 rounded-full flex">
					{#each links as link}
						<a
							href={link.to}
							class="py-2 px-4 font-medium transition-colors relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full after:opacity-0 after:bg-gray-900 dark:after:bg-white after:transition-opacity
								{$page.url.pathname === link.to ? 'text-gray-900 dark:text-white after:opacity-100' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'}"
						>
							{link.label}
						</a>
					{/each}
				</div>
			</nav>

			<!-- Right side button -->
			<div class="flex items-center">
				<a
					href="https://docs.swiftbase.dev/"
					target="_blank"
					rel="noopener noreferrer"
					class="hidden lg:flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
				>
					<span>Docs</span>
					<Icon icon="heroicons:arrow-right-20-solid" class="w-4 h-4" />
				</a>
			</div>
		</div>
	</div>
</header>

<style>
	.header-logo {
		margin-right: -0.5em;
	}
</style>
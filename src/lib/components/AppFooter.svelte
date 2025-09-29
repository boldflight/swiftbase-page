<script lang="ts">
	import Icon from '@iconify/svelte';
	import { theme } from '$lib/stores/theme';

	let resolvedTheme: 'light' | 'dark' = 'light';

	// Subscribe to resolved theme changes
	$: unsubscribe = theme.resolvedTheme.subscribe((value) => {
		resolvedTheme = value;
	});

	const links = [{
		label: 'Resources',
		children: [{
			label: 'Docs',
			to: 'https://docs.swiftbase.dev/'
		}, {
			label: 'Examples',
			to: 'https://github.com/swiftbase/examples'
		}, {
			label: 'Discord',
			to: 'https://discord.gg/swiftbase'
		}]
	}, {
		label: 'Contributing',
		children: [{
			label: 'GitHub',
			to: 'https://github.com/swiftbase/swiftbase'
		}]
	}];

	const currentYear = new Date().getFullYear();
</script>

<footer class="border-t border-gray-200 dark:border-gray-800">
	<!-- Top section -->
	<div class="border-t border-gray-200 dark:border-gray-800">
		<div class="py-8 lg:py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{#each links as linkGroup}
					<div>
						<h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
							{linkGroup.label}
						</h3>
						<ul class="mt-4 space-y-2">
							{#each linkGroup.children as link}
								<li>
									<a
										href={link.to}
										target="_blank"
										rel="noopener noreferrer"
										class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
									>
										{link.label}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Bottom section -->
	<div class="border-t border-gray-200 dark:border-gray-800">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
			<div class="flex items-center justify-between">
				<p class="text-gray-500 dark:text-gray-400 text-sm">
					Copyright © {currentYear}. All rights reserved.
				</p>
				
				<!-- Color mode toggle -->
				<button
					type="button"
					class="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
					aria-label="Toggle color mode"
					onclick={theme.toggle}
				>
					{#if resolvedTheme === 'dark'}
						<Icon icon="heroicons:sun-20-solid" class="w-4 h-4" />
					{:else}
						<Icon icon="heroicons:moon-20-solid" class="w-4 h-4" />
					{/if}
				</button>
			</div>
		</div>
	</div>
</footer>
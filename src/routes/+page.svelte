<script lang="ts">
	import BackgroundIcons from '$lib/components/BackgroundIcons.svelte';
	import LandingSection from '$lib/components/LandingSection.svelte';
	import LandingHero from '$lib/components/LandingHero.svelte';
	import LandingCard from '$lib/components/LandingCard.svelte';
	import LandingCTA from '$lib/components/LandingCTA.svelte';
	import CodeBlock from '$lib/components/CodeBlock.svelte';
	import Icon from '@iconify/svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	// Extract Swift code from Swift Base examples
	const helloCode = `import SwiftBase
import ComposableArchitecture

@App
struct MyApp {
    @State var store = Store(initialState: AppState()) {
        AppReducer()
    }
    
    @Route("/hello")
    func hello() -> String {
        return "Hello, Swift Base!"
    }
}`;

	const basicRouteCode = `import SwiftBase
import Supabase
import Get

@App 
struct VideoApp {
    @Database var supabase: SupabaseClient
    
    @Route("/videos/:id")
    func getVideo(id: String) async throws -> Video {
        // Type-safe database query with Supabase
        let video: Video = try await supabase
            .from("videos")
            .select()
            .eq("id", value: id)
            .single()
            .execute()
            .value
            
        // Client receives the same Video type
        return video
    }
    
    // Client and server share the same Video model
    struct Video: Codable {
        let id: String
        let title: String
        let duration: TimeInterval
    }
}`;
</script>

<svelte:head>
	<title>{data.page?.title || 'Swift Base'}</title>
	<meta name="description" content={data.page?.description || 'Full Stack Swift Ecosystem'} />
	<meta property="og:title" content={data.page?.title || 'Swift Base'} />
	<meta property="og:description" content={data.page?.description || 'Full Stack Swift Ecosystem'} />
</svelte:head>

<div class="relative min-h-screen">
	<div id="icons" class="absolute inset-0 -z-10">
		<BackgroundIcons />
	</div>

	<LandingSection class="!py-16 md:!py-24 lg:!py-32 min-h-screen flex items-center">
		<LandingHero 
			title='<span class="logo-overlay">Swift Base</span>'
			description={data.page?.hero?.description}
			links={data.page?.hero?.links}
		>
			{#snippet headline()}
				{#if data.page?.hero?.headline}
					<a
						href={data.page.hero.headline.to}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700 ring-1 ring-orange-600/20 dark:bg-orange-400/10 dark:text-orange-400 dark:ring-orange-400/30 hover:bg-orange-100 dark:hover:bg-orange-400/20 transition-colors"
						aria-label={data.page.hero.headline.label}
					>
						{data.page.hero.headline.label}
						{#if data.page.hero.headline.icon}
							<Icon icon={data.page.hero.headline.icon} class="ml-1 w-4 h-4" />
						{/if}
					</a>
				{/if}
			{/snippet}

			{#snippet bottom()}
				<div class="mt-16">
					<LandingCard class="line-numbered-code">
						<CodeBlock code={helloCode} language="swift" />
					</LandingCard>
				</div>
			{/snippet}
		</LandingHero>
	</LandingSection>

	<LandingSection 
		title={data.page?.features?.title}
		description={data.page?.features?.description}
		headline={data.page?.features?.headline}
	>
		<div class="landing-grid" id="features">
			{#each (data.page?.features?.items || []) as item}
				<LandingCard
					title={item.title}
					description={item.description}
					icon={item.icon}
				/>
			{/each}
		</div>
	</LandingSection>

	<LandingSection>
		<LandingHero
			title={data.page?.ecosystem?.title}
			description={data.page?.ecosystem?.description}
			links={data.page?.ecosystem?.links}
			align="center"
		>
			{#snippet children()}
				<LandingCard class="line-numbered-code">
					<CodeBlock code={basicRouteCode} language="swift" />
				</LandingCard>
			{/snippet}
		</LandingHero>
	</LandingSection>

	<LandingSection>
		<LandingCTA
			title={data.page?.cta?.title}
			description={data.page?.cta?.description}
			links={data.page?.cta?.links}
		/>
	</LandingSection>
</div>

<style>
	#icons {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: -1;
		pointer-events: none;
	}

	@media (max-width: 500px) {
		:global(.logo-container) {
			font-size: 32pt;
		}

		:global(.line-numbered-code) {
			font-size: 9.5pt;
		}
	}

	:global(.logo-overlay::before) {
		width: 2em;
		height: 2em;
		margin-left: -1.7em;
		margin-top: -0.5em;
		position: absolute;
		content: '';
		background-image: url("/logo@400px.png");
		background-size: 2em;
		background-repeat: no-repeat;
	}

	:global(.logo-overlay) {
		margin-left: 1.5em;
	}

	:global(.line-numbered-code) {
		max-width: calc(min(90vw, 40em, 100%));
		overflow: none;
		white-space: pre-wrap;
		margin: 0 auto;
	}

	:global(.line-numbered-code pre) {
		line-height: 1.625;
		counter-reset: lines;
	}

	:global(.line-numbered-code pre code) {
		display: flex;
		flex-direction: column;
	}

	:global(.line-numbered-code pre code .line) {
		display: inline-table;
		min-height: 1rem;
	}

	@media (min-width: 500px) {
		:global(.line-numbered-code pre code .line::before) {
			counter-increment: lines;
			content: counter(lines);
			width: 1rem;
			margin-right: 1.5rem;
			display: inline-block;
			text-align: left;
			color: rgba(115, 138, 148, 0.4);
		}
	}

	:global(.line-numbered-code pre code .highlight) {
		background-color: #363b46;
		display: block;
		margin-right: -1em;
		margin-left: -1em;
		padding-right: 1em;
		padding-left: 0.75em;
		border-left: 0.25em solid red;
	}
</style>
import { loadYamlContent, loadMarkdownContent } from '$lib/content.js';
import type { PageServerLoad } from './$types';
import type { PageData } from '$lib/types';

export const load: PageServerLoad = async () => {
	const page = loadYamlContent('index.yml') as PageData;
	const hello = loadMarkdownContent('_hello-swiftbase.md') as string;
	const basicRoute = loadMarkdownContent('_basic-route.md') as string;

	return {
		page,
		hello,
		basicRoute
	};
};
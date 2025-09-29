import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// TODO: Update this redirect once Swift Base documentation is available
	throw redirect(301, '#');
};
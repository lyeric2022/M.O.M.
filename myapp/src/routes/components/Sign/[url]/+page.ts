import { error } from '@sveltejs/kit';

/** @type {import('../$types').PageLoad} */

export function load({ params }): URL {
	if (params.url == 'username') {
		const BASE_URL = new URL(`http://localhost:5173/?username=${params.url.username}`);
		return BASE_URL;
	}

	throw error(404, 'Not found');
}

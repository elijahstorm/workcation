import { destinations } from '$lib/stores/stores'
import { error } from '@sveltejs/kit'
import { get } from 'svelte/store'
import type { PageLoad } from './$types'

export const load: PageLoad = ({ params }) => {
	const dest = get(destinations).find((dest) => dest.id == params.id)

	if (dest) {
		return dest
	}

	throw error(404, 'Not found')
}

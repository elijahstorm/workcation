<script lang="ts">
	import DestinationCard from '$lib/components/cards/DestinationCard.svelte'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<DestinationCard {...data} />

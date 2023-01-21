<script lang="ts">
	import DestinationCard from '$lib/components/cards/DestinationCard.svelte'
	import SizedContent from '$lib/components/containers/SizedContent.svelte'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<SizedContent>
	<DestinationCard {...data} />
</SizedContent>

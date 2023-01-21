<script>
	import { destinations } from '$lib/stores/stores'
	import DestinationCard from '../cards/DestinationCard.svelte'
</script>

<section class="space-y-4">
	<h2>Popular Destinations</h2>

	<p class="text-gray-500">
		A selection of great work-friendly cities with lots to see and explore.
	</p>

	<div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
		{#each $destinations as destination (destination.id)}
			<DestinationCard {...destination} />
		{/each}
	</div>
</section>

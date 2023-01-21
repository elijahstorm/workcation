<script lang="ts">
	import Header from '../lib/components/containers/Header.svelte'
	import '../app.css'
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="bg-gray-200 min-h-screen flex flex-col justify-between">
	<div class="min-w-full grow self-center">
		<Header />

		<main class="[&>*:nth-child(odd)]:bg-gray-100">
			<slot />
		</main>
	</div>

	<footer class="px-8 py-6 bg-brand-900 text-slate-200 flex justify-between">
		<p>Workcation</p>
		<p>
			<a href="https://github.com/elijahstorm" target="_blank" rel="noopener noreferrer">
				Elijah Storm
			</a>
		</p>
	</footer>
</div>

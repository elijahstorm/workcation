<script lang="ts">
	import Header from './Header.svelte'
	import '../app.css'
</script>

<div class="bg-gray-200 min-h-screen flex flex-col justify-between">
	<div class="min-w-full grow self-center">
		<Header />

		<main class="[&>*:nth-child(odd)]:bg-gray-100">
			<slot />
		</main>
	</div>

	<footer class="px-8 py-6 bg-indigo-900 text-slate-200 flex justify-between">
		<p>Workcation</p>
		<p>
			<a href="https://github.com/elijahstorm" target="_blank"> Elijah Storm </a>
		</p>
	</footer>
</div>

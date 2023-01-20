<script lang="ts">
	import Header from './Header.svelte'
	import '../app.css'
</script>

<div class="bg-gray-100">
	<div class="h-screen flex flex-col justify-between">
		<div class="grow self-center w-full max-w-md sm:max-w-xl lg:max-w-6xl lg:px-8">
			<Header />

			<main>
				<slot />
			</main>
		</div>

		<footer class="px-8 py-6 bg-indigo-900 text-slate-200">
			<p>Workcation</p>
		</footer>
	</div>
</div>

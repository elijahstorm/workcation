<script lang="ts">
	import Header from './Header.svelte'
	import '../app.css'
</script>

<div class="bg-gray-100 h-screen">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>heres a footer</p>
	</footer>
</div>

<script lang="ts">
	import { page } from '$app/stores'
	import logo from '$lib/images/logo.svg'
	import github from '$lib/images/github.svg'
</script>

<div class="h-24 py-8 flex justify-between">
	<a class="contents" href="/">
		<img src={logo} alt="Worcation" />
	</a>

	<a class="contents" href="https://github.com/elijahstorm">
		<img src={github} alt="GitHub" />
	</a>
</div>

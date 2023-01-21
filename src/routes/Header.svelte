<script lang="ts">
	import { page } from '$app/stores'
	import logo from '$lib/images/logo.svg'
	import github from '$lib/images/github.svg'
	import SizedContent from '$lib/components/containers/SizedContent.svelte'
</script>

<SizedContent>
	<div class="h-8 flex justify-between">
		<a class="contents" href="/">
			<img src={logo} alt="Worcation" />
		</a>

		<a class="contents" href="https://github.com/elijahstorm" target="_blank">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</SizedContent>

<script lang="ts">
	import logo from '$lib/images/logo-brand.svg'
	import github from '$lib/images/github.svg'
	import SizedContent from '$lib/components/containers/SizedContent.svelte'
	import { base } from '$app/paths'
</script>

<SizedContent>
	<div class="h-8 flex justify-between">
		<a class="contents" href="{base}/">
			<img src={logo} alt="Worcation" />
		</a>

		<a
			class="contents"
			href="https://github.com/elijahstorm"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img src={github} alt="GitHub" />
		</a>
	</div>
</SizedContent>

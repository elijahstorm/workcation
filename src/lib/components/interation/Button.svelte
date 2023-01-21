<script lang="ts">
	export let buttonText: string
	export let buttonAction: VoidFunction
	export let extraClassInfo = ''
	export let primary = false
</script>

<button
	class:btn={true}
	class:btn-primary={primary}
	class:btn-secondary={!primary}
	class={extraClassInfo}
	on:click={buttonAction}>{buttonText}</button
>

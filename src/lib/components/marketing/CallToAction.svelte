<script lang="ts">
	import Button from '../interation/Button.svelte'

	export let img: string
	export let imgAlt: string
	export let header: string
	export let headerHighlight: string
	export let paragraph: string
	export let buttonText: string
	export let buttonAction: VoidFunction
	export let secondaryButtonText: string | undefined
	export let secondaryButtonAction: VoidFunction | undefined
</script>

<section class="grid lg:grid-cols-2 2xl:grid-cols-5">
	<div class="flex flex-col gap-2 lg:py-12 2xl:max-w-xl 2xl:col-span-2 2xl:justify-self-center">
		<img
			class="rounded-lg shadow-lg sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
			src={img}
			alt={imgAlt}
		/>

		<h1
			class="mt-2 text-2xl font-headline tracking-tight font-semibold text-gray-900 sm:text-3xl sm:mt-6 lg:mt-0 lg:text-3xl"
		>
			{header}
			<br />
			<span class="text-brand-500"> {headerHighlight} </span>
		</h1>

		<p class="text-gray-500 sm:text-xl sm:mt-2">
			{paragraph}
		</p>

		<div class="space-x-2">
			<Button
				primary
				extraClassInfo="transform hover:-translate-y-0.5 focus:-translate-y-0.5 shadow-lg"
				{buttonText}
				{buttonAction}
			/>
			{#if secondaryButtonText && secondaryButtonAction}
				<Button buttonText={secondaryButtonText} buttonAction={secondaryButtonAction} />
			{/if}
		</div>
	</div>

	<div class="hidden relative lg:block 2xl:col-span-3">
		<img class="absolute inset-0 w-full h-full object-cover object-center" src={img} alt={imgAlt} />
	</div>
</section>

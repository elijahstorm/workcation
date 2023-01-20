<script lang="ts">
	export let img: string
	export let imgAlt: string
	export let header: string
	export let headerHighlight: string
	export let paragraph: string
	export let buttonText: string
	export let buttonAction: VoidFunction
</script>

<section class="grid lg:grid-cols-2 2xl:grid-cols-5">
	<div class="flex flex-col gap-2 lg:py-12 2xl:max-w-xl 2xl:col-span-2 2xl:justify-self-center">
		<img
			class="rounded-lg shadow-lg sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
			src={img}
			alt={imgAlt}
		/>

		<h1 class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl sm:mt-6 lg:mt-0 lg:text-3xl">
			{header}
			<br />
			<span class="text-indigo-500"> {headerHighlight} </span>
		</h1>

		<p class="text-gray-500 sm:text-xl sm:mt-2">
			{paragraph}
		</p>

		<button
			class="self-start mt-2 px-5 py-3 bg-indigo-500 text-white rounded-lg uppercase tracking-wider font-semibold text-sm shadow-lgtext-4xl sm:text-base sm:mt-4"
			on:click={buttonAction}>{buttonText}</button
		>
	</div>

	<div class="hidden relative lg:block 2xl:col-span-3">
		<img class="absolute inset-0 w-full h-full object-cover object-center" src={img} alt={imgAlt} />
	</div>
</section>

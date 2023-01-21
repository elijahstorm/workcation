<script>
	import { goto } from '$app/navigation'
	import { base } from '$app/paths'
	import CallToAction from '$lib/components/marketing/CallToAction.svelte'
</script>

<svelte:head>
	<title>Workcation</title>
	<meta name="description" content="Work and vacation" />
</svelte:head>

<CallToAction
	img="/img/beach-work.jpg"
	imgAlt="woman sitting on beach"
	header="You can work from anywhere."
	headerHighlight="Take advantage of it."
	paragraph="Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some
nice weather even when you're not on vation."
	buttonText="Book your escape"
	buttonAction={() => {
		goto(base + '/book')
	}}
	secondaryButtonText="Learn more"
	secondaryButtonAction={() => {
		goto(base + '/learn')
	}}
/>

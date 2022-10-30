<script>
	import '../index.scss';
	import { fly, fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	let loaded = false;
	onMount(async () => {
		loaded = true;
	});
</script>

<svelte:head>
	<title>Bumble's Website</title>
	<meta name="title" content="Bumble's Website" />
	<meta
		name="description"
		content="Hey, I'm bumble. I'm a human being that uses the internet. she/they. "
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

{#if loaded}
	<div id="titlebox">
		<h1 in:fly={{ y: 200, duration: 2500 }} out:fade>Hey, I'm bumble.</h1>

		<span class="align-top" in:fly={{ y: 200, duration: 2600, delay: 400 }} out:fade
			>I'm a human being that uses the internet. she/they.</span
		>
	</div>

	<ul class="topnav">
		<li in:fly={{ y: -200, duration: 2800, delay: 2000 }} out:fade class="left">
			<a href="https://discord.gg/hNPpwPmWRr">Discord Server</a>
		</li>
	</ul>
	<div>hi bumble (0.0)~~~*</div>
{/if}

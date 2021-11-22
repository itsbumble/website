<script>
	import '../index.scss';
	import { fly, fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	let loaded = false;
	let stage = 0;
	let time;
	onMount(async () => {
		loaded = true;

		time = setInterval(() => {
			if (stage > 5) clearTimeout(time);
			stage++;
		}, 300);
	});
</script>

<svelte:head>
	<title>Bumble's Website</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div id="titlebox">
	{#if loaded}
		{#if stage > 4}
			<h1 in:fly={{ y: 200, duration: 2500 }} out:fade>Hey, I'm bumble.</h1>
		{/if}
		{#if stage > 4}
			<span style="vertical-align: top;" in:fly={{ y: 200, duration: 2600 }} out:fade
				>I'm a human being that uses the internet. she/they.</span
			>
		{/if}
	{/if}
</div>

<ul class="topnav">
		{#if stage > 1}
			<li in:fly={{ y: -200, duration: 2800 }} out:fade class="left">
				<a href="https://discord.gg/hNPpwPmWRr">Discord Server</a>
			</li>
		{/if}
</ul>

<div>hi bumble</div>

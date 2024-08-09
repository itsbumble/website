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
	<title>bumble's website</title>
	<meta name="title" content="bumble's website" />
	<meta
		name="description"
		content="Hey, I'm bumble. I'm a human being that uses the internet. she/her."
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

{#if loaded}
<div id="titlebox">
    <h1 in:fly={{ x: 500, duration: 2500 }} out:fade>Hey, I'm bumble.</h1>

    <span class="align-top" in:fly={{ x: 500, duration: 2600, delay: 400 }} out:fade>
        I play Geometry Dash, osu!, and Minecraft. <br>
        I also make weird programs! You should check out my Github to see them.<br>
        I use she/they. More info on my Pronouns.page!
    </span>
</div>


	<ul class="topnav">
		<li in:fly={{ y: -200, duration: 2000, delay: 700 }} out:fade class="left">
			<a href="https://discord.gg/hNPpwPmWRr">Discord Server</a>
		</li>
		<li in:fly={{ y: -200, duration: 2000, delay: 1000 }} out:fade class="left">
			<a href="https://youtube.com/@shoebill_stork/">YouTube Channel</a>
		</li>
		<li in:fly={{ y: -200, duration: 2000, delay: 1300 }} out:fade class="left">
			<a href="https://www.twitch.tv/its_bumble">Twitch</a>
		</li>
		<li in:fly={{ y: -200, duration: 2000, delay: 1600 }} out:fade class="left">
			<a href="https://github.com/itsbumble">Github</a>
		</li>
		<li in:fly={{ y: -200, duration: 2000, delay: 1900 }} out:fade class="left">
			<a href="https://twitter.com/bumblebee607">Twitter</a>
		</li>
		<li in:fly={{ y: -200, duration: 2000, delay: 2200 }} out:fade class="left">
			<a href="https://www.chess.com/member/its_bumble">Chess.com</a>
		</li>
		<li in:fly={{ y: -200, duration: 2000, delay: 2400 }} out:fade class="left">
			<a href="https://en.pronouns.page/@itsbumble">Pronouns.page</a>
		</li>
		<li in:fly="{{ y: -200, duration: 2000, delay: 700 }}" out:fade class="right">
			<a href="https://bumble.pink/linkbot" target="_blank">LinkBot Web</a>
		</li>
		
		
		
		
	</ul>
	<div>hi bumble (0.0)~~~*</div>
{/if}
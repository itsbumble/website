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
	<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap" rel="stylesheet">
	<title>bumble's website</title>
	<meta name="title" content="bumble's website" />
	<meta
		name="description"
		content="bumble's space on the web - check out my socials/projects here"
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

{#if loaded}
<div id="titlebox">
    <h1 in:fly={{ y: 500, duration: 2500 }} out:fade style="font-weight: 400;">Hey, I'm bumble.</h1>

    <span class="align-top" in:fly={{ y: 500, duration: 2560, delay: 400 }} out:fade>
        Roller coaster enthusiast, aviation enthusiast, gamer, programmer, saxophonist<br>
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

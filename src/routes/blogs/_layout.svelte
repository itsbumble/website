<script lang="ts">
	import '../../github.scss';
	export const ssr = true;
	export const prerender = true;
	export const hydrate = false;
	export const router = false;
</script>

<template>
	<!-- tailwind css doesnt work your gonna have to make your own css sorry - tricked -->
	<div class="doc max-w-[80rem] m-auto">
		<slot />
	</div>
</template>

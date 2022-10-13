<script lang="ts">
	import Popover from '$lib/Content/SkillContent/Popover.svelte';
	import go from '/src/img/go.png';
	import rust from '/src/img/rust.png';
	import django from '/src/img/django.png';
	import html from '/src/img/html.png';
	import java from '/src/img/java.png';
	import jquery from '/src/img/jquery.png';
	import js from '/src/img/js.png';
	import php from '/src/img/php.png';
	import python from '/src/img/python.png';
	import react from '/src/img/react.png';
	import svelte from '/src/img/svelte.png';
	import ts from '/src/img/typescript.png';
	const images: any = {
		main: '',
		go: go,
		rust: rust,
		django: django,
		html: html,
		java: java,
		jquery: jquery,
		js: js,
		php: php,
		react: react,
		svelte: svelte,
		python: python,
		ts: ts
	};

	export let itemname: string = '';
	export let items: string[] = [];
</script>

<div class="gap-12 min-w-full mx-auto px-3">
	<p class="bg-[rgba(125,125,125,0.771)] rounded-xl p-4">{itemname}</p>
	<div
		class="rounded-xl h-fit grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 2xl:grid-cols-4 gap-10 w-full mx-auto mt-10 2xl:mt-12"
	>
		{#each items as item}
			{#if item === ''}
				{console.log('배열에 빈 항목이 있습니다. SkillContent.jsx -> ' + itemname)}
			{:else}
				<div class="h-28 flex items-center justify-center">
					<img src={images[item]} alt={item + 'logo'} />
					<Popover top={item === 'go' || item === 'php' || item === 'django' ? '15px' : '-10px'} />
				</div>
			{/if}
		{/each}
	</div>
</div>

<script lang="ts">
	import Tuna from '/src/img/tunanohand.png';
	import { spring } from 'svelte/motion';
	import { draw } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Background from '$lib/Content/bg/Background.svelte';
	import '../app.css';
	import Skills from './skills/Skills.svelte';
	import Nav from '$lib/Content/Nav.svelte';
	import roadmap from '/src/img/roadmap.svg';
	import viewport from '$lib/Content/ts/useViewportAction';
	export let data: any;
	let scale1 = spring(1);
	let scale2 = spring(1);
	let scale3 = spring(1);
	let scale4 = spring(1);
	let dodraw = false;

	const GithubData = JSON.parse(data.GithubData);
	const ContributionCalendar = GithubData.data.user.contributionsCollection.contributionCalendar;
	console.log(ContributionCalendar);
</script>

<svelte:head>
	<title>DongwonTuna</title>
</svelte:head>
<Background />
 
<div
	class="relative h-[500px] top-[-70px]  md:w-[90vw] md:gap-y-[7vw] md:grid xl:flex xl:flex-row xl:justify-between xl:h-[400px] xl:top-[-150px] xl:min-w-fit xl:w-[60vw] max-w-[1000px] mx-auto flex  items-center  grid-cols-2  flex-col  gap-10"
>
	<div
		on:pointerenter={() => ($scale1 = 1.1)}
		on:pointerleave={() => ($scale1 = 1)}
		class="mx-auto bg-white xl:w-80 h-56 max-h-56 px-10 py-8 rounded-xl text-white flex items-center justify-between flex-col md:w-[340px] w-[80vw] bg-contain"
		style="filter: drop-shadow(15px 10px 10px #ef3c3c86; transform:scale({$scale1});"
	>
		<p class="text-3xl">利便性重視</p>
		<br />
		<p class="text-lg">使用者の便宜性を第一に思っております。</p>
	</div>
	<div
		on:pointerenter={() => ($scale2 = 1.1)}
		on:pointerleave={() => ($scale2 = 1)}
		class="mx-auto bg-gradient-to-tr from-sky-300 to-sky-400 xl:w-80 h-56 max-h-56 px-10 py-8 rounded-xl text-slate-700 flex items-center justify-between md:w-[340px] flex-col w-[80vw]"
		style="filter: drop-shadow(15px 10px 10px #38bdf886); transform:scale({$scale2})"
	>
		<p class="text-3xl">デザイン重視</p>
		<br />
		<p class="text-lg">デザインを重視したウェブデザイナーを指向しています。</p>
	</div>
	<div
		on:pointerenter={() => ($scale3 = 1.1)}
		on:pointerleave={() => ($scale3 = 1)}
		class="mx-auto bg-gradient-to-tr from-slate-50 to-slate-100 xl:w-80 h-56 max-h-56 px-10 py-8 rounded-xl text-slate-700 flex items-center md:w-[340px] justify-between flex-col w-[80vw]"
		style="filter: drop-shadow(15px 10px 10px #d9d7d786); transform:scale({$scale3})"
	>
		<p class="text-3xl">お客さまの要望に合わせて</p>
		<br />
		<p class="text-lg">デザインを重視したウェブデザイナーを指向しています。</p>
	</div>
	<div
		on:pointerenter={() => ($scale4 = 1.1)}
		on:pointerleave={() => ($scale4 = 1)}
		class="mx-auto bg-gradient-to-tr from-[#CFCFCF] to-slate-300 xl:w-80 h-56 max-h-56 px-10 py-8 rounded-xl text-slate-700 flex items-center md:w-[340px] justify-between flex-col w-[80vw]"
		style="filter: drop-shadow(15px 10px 10px #64748b86); transform:scale({$scale4})"
	>
		<p class="text-3xl">デザイン重視</p>
		<br />
		<p class="text-lg">デザインを重視したウェブデザイナーを指向しています。</p>
	</div>
</div>
<div class="h-[4000px] mt-40">
	<div class="">
		<div class="w-[400px] h-40 relative mt-[400px] mx-auto">
			<img class="absolute scale-150 top-[-150px]" src={Tuna} alt="tuna" />
			<h1 class="text-5xl text-slate-600 whitespace-nowrap">Study Roadmap</h1>
		</div>
		<svg
			use:viewport
			on:enterViewport={() => {
				dodraw = true;
			}}
			class="w-[110vw] min-w-[800px] relative scale-110 left-[50%] translate-x-[-50%] lg:translate-x-0 lg:left-0  rotate-90 lg:rotate-0 z-[-1] "
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1998 870"
		>
			{#if dodraw}
				<path
					style="stroke: #dfe1ff;
				stroke-miterlimit: 10;
				stroke-width: 30px; fill: none;"
					transition:draw={{ duration: 4000, easing: quintOut }}
					d="M40.86,55.21c237.53,81.38,423.61,81.75,550,66.87,287.39-33.84,402-56.17,402-56.17,36.19-7.05,156.88-31.13,306,2.67,67.27,15.25,129.46,40.18,154,97.63,26.02,60.93-3.15,137.86-45,182.93-53.91,58.07-143.94,62.88-324,72.51-63.03,3.37-137.03,7.33-233-5.51-42.68-5.71-62.89-11.16-125-18-88.36-9.74-133.49-14.37-180-3-34.32,8.39-96.26,23.54-132,76-48.24,70.82-24.62,174.23,20,237,65.47,92.11,181.07,103.62,239,109.39,128.59,12.8,162.73-33.64,337-65.53,188.26-34.45,349.51-17.8,416-9.36,119.7,15.18,189.49,41.07,344,45.47,80.03,2.28,146.23-2.25,191-6.69"
				/>
			{/if}
		</svg>
	</div>

	<div class="h-96" />
</div>

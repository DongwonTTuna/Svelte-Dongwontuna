<script lang="ts">
	import { fly } from 'svelte/transition';
	import sun from '/src/img/sun.png';
	import Cloud from '../lib/Content/bg./lib/Content/bg/Cloud.svelte';
	import threefish from '/src/img/threefish.png';
	import fish from '/src/img/fish.png';
	import wave from '/src/img/wave.svg';
	import tuna from '/src/img/tuna.png';
	import { onMount } from 'svelte';

	let visible: boolean = false;
	onMount(() => {
		visible = true;
	});
</script>

<div class="absolute top-0 h-[3500px] w-full bg-[#f5d7d5] min-h-[100vh] z-[-6]" />
<div>
	<div
		class="wave w-[9600px] opacity-50 h-[1000px] bg-repeat-x absolute top-[76vh] z-[-4]"
		style={`background-image: url(${wave})`}
	/>
	<div
		class="wave w-[9600px] h-[1000px] bg-repeat-x absolute top-[76vh] z-[-5] opacity-100"
		style={`background-image: url(${wave})`}
	/>

	<div
		class="wave w-[9600px] h-[1000px] bg-repeat-x absolute top-[76vh] z-[-5] opacity-100"
		style={`background-image: url(${wave})`}
	>
		<div
			class="absolute top-[1000px] z-[-5] w-full h-[2999px] bg-gradient-to-b from-[#4d808c] to-[#1f425e] opacity-100"
		/>
	</div>
</div>
{#if visible}
	<img
		id="tuna"
		in:fly={{ x: 800, y: 400, duration: 2000 }}
		class="absolute"
		src={tuna}
		alt="tuna"
	/>
{/if}
<div class="z-[2]">
	<img src={sun} class="w-[300px] absolute top-[0vh] md:top-[26vh] right-[4vw] z-[-6]" alt="sun" />
	<div class="z-[-1]">
		<div class="cloudbox">
			<Cloud src={6} w="800" top="-10vh" opacity="0.5" additionalClasses="z-[-2]" />
			<Cloud src={3} w="800" top="30vh" opacity="0.5" additionalClasses="z-[-2]" />
			<Cloud src={1} w="800" top="35vh" opacity="0.5" additionalClasses="z-[-2]" />
			<Cloud src={2} w="1000" top="-6vh" opacity="0.75" additionalClasses="z-[-3]" />
		</div>
		<div class="cloudbox w-[900px] absolute ">
			<Cloud src={1} w="600" top="35vh" opacity="0.5" additionalClasses="z-[-3]" />
			<Cloud src={7} w="600" top="45vh" opacity="0.5" additionalClasses="z-[-5]" />
		</div>
		<div class="cloudbox absolute opacity-70" style="transform: scaleX(-1)">
			<Cloud src={4} w="1000" additionalClasses="z-[-2]" />
			<Cloud src={3} w="600" top="25vh" additionalClasses="z-[-3]" />
		</div>
		<div class="cloudbox absolute opacity-80" style="transform: scaleX(-1)">
			<Cloud src={4} w="1000" top="30vh" additionalClasses="z-[-2]" />
			<Cloud src={7} w="600" top="5vh" additionalClasses="z-[-3]" />
		</div>
		<div class="cloudbox opacity-50 absolute">
			<Cloud src={3} w="700" top="0" additionalClasses="z-[-3]" />
		</div>
		<div class="reversed-cloud cloudbox absolute">
			<Cloud src={5} w="1000" top="-11vh" additionalClasses="z-[-2]" />
			<Cloud src={4} w="800" top="45vh" additionalClasses="z-[-3]" />
		</div>
		<div class="reversed-cloud cloudbox absolute opacity-60">
			<Cloud src={1} w="1000" additionalClasses="z-[-2]" />
		</div>
		<div class="reversed-cloud cloudbox absolute">
			<Cloud src={1} w="1000" top="10vh" additionalClasses="z-[-2]" />
			<Cloud src={4} w="1000" top="-40px" additionalClasses="z-[-3]" />
		</div>
		<div class="reversed-cloud cloudbox absolute">
			<Cloud src={3} w="1000" top="200px" additionalClasses="z-[-2]" />
		</div>
		<div class="cloudbox absolute">
			<Cloud src={6} w="1000" top="-100px" opacity="0.4" additionalClasses="z-[-2]" />
		</div>
	</div>

	<div class="fish w-full absolute top-[180vh] left-0 z-[-4]">
		<img class="w-[240px]" src={fish} alt="fish" />
	</div>
	<div class="w-full absolute top-[300vh] left-0 z-[-5]" style="transform: scaleX(-1)">
		<div class="fish">
			<img class="w-[200px] -scale-x-[1]" src={threefish} alt="fish" style="transform: scaleX(1)" />
		</div>
	</div>
</div>

<style>
	.cloudbox {
		width: 100%;
	}
	.reversed-cloud {
		transform: scaleX(-1);
	}
	.cloudbox:nth-child(1) {
		animation: 80s linear -10s infinite cloud;
	}
	.cloudbox:nth-child(2) {
		animation: 85s linear -20s infinite cloud;
	}
	.cloudbox:nth-child(3) {
		animation: 70s linear -56s infinite cloud;
	}
	.cloudbox:nth-child(4) {
		animation: 65s linear -30s infinite cloud;
	}
	.cloudbox:nth-child(5) {
		animation: 55s linear -20s infinite cloud;
	}
	.cloudbox:nth-child(6) {
		animation: 45s linear -15s infinite cloud;
	}
	.cloudbox:nth-child(7) {
		animation: 75s linear -15s infinite cloud;
	}
	.cloudbox:nth-child(8) {
		animation: 95s linear 0s infinite cloud;
	}
	.cloudbox:nth-child(9) {
		animation: 95s linear 0s infinite cloud;
	}
	.cloudbox:nth-child(10) {
		animation: 95s linear -40s infinite cloud;
	}
	.wave:nth-child(1) {
		animation: wave 10s linear 1s infinite;
	}
	.wave:nth-child(2) {
		animation: wave 10s linear -3s infinite;
	}
	.wave:nth-child(3) {
		animation: wave 10s linear -6s infinite;
	}
	.fish {
		animation: fish 25s linear 0s infinite;
	}
	#tuna {
		z-index: -5;
		right:0;
		left: 0;
		margin: 0 auto;
		top: 15vh;
		min-width: 800px;
		opacity: 0.2;
		transform: rotate(45deg);
		animation: tuna 10s ease-in-out 2s infinite alternate;
	}

	@keyframes cloud {
		0% {
			transform: translate(140%, 30px);
		}
		100% {
			transform: translate(-1000px, -30px);
		}
	}

	@keyframes wave {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-1600px);
		}
	}

	@keyframes tuna {
		0% {
			transform: translateY(0px);
			rotate: 45deg;
		}
		40% {
			transform: translateY(-30px);
			rotate: 45deg;
		}
		100% {
			transform: translateY(30px);
			rotate: 45deg;
		}
	}
	@keyframes fish {
		0% {
			transform: translate(-20%, -30px);
		}
		10% {
			transform: translate(-8%, 30px);
		}
		20% {
			transform: translate(4%, -30px);
		}
		30% {
			transform: translate(16%, 30px);
		}
		40% {
			transform: translate(28%, -30px);
		}
		50% {
			transform: translate(40%, 30px);
		}
		60% {
			transform: translate(52%, -30px);
		}
		70% {
			transform: translate(64%, 30px);
		}
		80% {
			transform: translate(76%, -30px);
		}
		90% {
			transform: translate(88%, 30px);
		}
		100% {
			transform: translate(100%, -30px);
		}
	}
</style>

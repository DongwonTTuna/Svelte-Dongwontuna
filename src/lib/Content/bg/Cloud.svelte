<script lang="ts">
	import cloud from '/src/img/cloud.png';
	import cloud2 from '/src/img/cloud2.png';
	import cloud3 from '/src/img/c3.png';
	import cloud4 from '/src/img/c4.png';
	import cloud5 from '/src/img/c5.png';
	import cloud6 from '/src/img/c6.png';
	import cloud7 from '/src/img/cloud7.png';

	export let w: string = '';
	export let src: number = 1;
	export let top: string = '';
	export let opacity: string = '';
	export let additionalClasses: string = '';

	const Cloud: string[] = [cloud, cloud2, cloud3, cloud4, cloud5, cloud6, cloud7];
</script>

<img
	src={Cloud[src - 1]}
	style={`position: absolute; max-width: ${w}px; top: ${top}; opacity: ${opacity}`}
	class={additionalClasses}
	alt="cloud"
/>

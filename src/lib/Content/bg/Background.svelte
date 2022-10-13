<script>
	import Tunaavif from '/src/img/tuna6k.avif';
	import Tunawebp from '/src/img/tuna6k.webp';
	import Tunajpg from '/src/img/tuna6k.jpg';
</script>

<div>
	<picture>
        <source srcset={Tunaavif} type="image/avif" />
		<source srcset={Tunawebp} type="image/webp" />
		<img id="6kimg" src={Tunajpg} class="min-w-[3000px] w-screen min-h-[1000px] h-[70vh] relative left-[50%]" style="transform:translateX(-50%);  backdrop-filter: blur(12px)" alt="Tuna" />

    </picture>
</div>

<style>

</style>

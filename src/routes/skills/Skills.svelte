<script>
    import SkillContent from "$lib/Content/SkillContent/SkillContent.svelte";
	import Nav from "$lib/Content/Nav.svelte"
</script>

<Nav/>
<div class="w-full flex flex-col items-center z-10">
	<p
		class="text-center w-full h-24 text-[34px] py-[70px] z-10 "
	>
		Skills
	</p>
	<div class="relative min-w-[450px] w-[450px] md:w-[600px] lg:w-[800px] 2xl:w-[1400px] max-w-[1400px] min-h-[900px] bg-[rgba(56,56,56)] py-[25px] rounded-xl text-center z-10 flex justify-center" >
        <div class="grid sm:grid-cols-1 xl:grid-cols-2 gap-7 min-w-full gap-y-10 xl:gap-y-0">
            <SkillContent />
        </div>
    </div>
</div>

<style>
</style>

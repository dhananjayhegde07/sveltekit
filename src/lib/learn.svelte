<script>
	import Hrline from "./hrline.svelte";

    export let info
    let keys=Object.keys(info)
</script>

<div class="main_learn">
    <div class="sub_learn">
        {#each keys as i }
            {#each info[i]['desc'] as j }
                <div class="mb-11">
                    <h2 class=" font-bold learn_heading">{j.meta}</h2>
                    <p class="mb-10">{j.full}</p>
                    <Hrline></Hrline>
                </div>
            {/each}
        {/each}
    </div>
</div>
<style>
    .main_learn{
        width: 100vw;
        display: grid;
        place-items: center;
    }
    .sub_learn{
        width: 65vw;
    }
    .learn_heading{
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 50px;
        font-size: large;
    }
</style>
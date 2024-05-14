<script>
    import Vrline from "./vrline.svelte";
    import Vrlinesmall from "./vrlinesmall.svelte";
    import Button from "./components/ui/button/button.svelte";
    import {createEventDispatcher} from 'svelte'
    let data=['','','']
    let disp=createEventDispatcher()
    export let info;
    let keys=Object.keys(info)
</script>


<div class="main_home">
    <main>
        <div class="about">
           <div class="about_image">
            <div class="about_image_sub">
                <img src="/person.svg" alt="">
                <p>Dhananjay hegde</p>
            </div>
           </div>
           <div class="about_text">
                <p>Tech entrepreneur with a knack for disruption. Experienced in leading both corporate giants and startups to success. Skilled at turning visionary ideas into reality. Dedicated to fostering innovation and collaboration. Passionate about shaping the future of technology.</p>
                <Button class="m-5">Follow</Button>
            </div>
        </div>
        <div class="content">
            <div class="timeline">
                <div class="timeline_details">
                    <div style="height: 20vh;">

                    </div>
                    {#each keys as d }
                        <div class="timeline_date">
                            <p>{info[d].date}</p>
                        </div>
                        <div class="timeline_desc">
                            <div class="timeline_desc_inner">
                                <div >
                                    <div class="flex">
                                        {#each info[d]['img'] as src }
                                            <img src={src} alt="">
                                        {/each}
                                    </div>
                                    <p class="mt-5">{info[d]['head']}</p>
                                </div>
                            </div>

                        </div>
                    {/each}
                    <div class="timeline_date">
                        <p>12-10-2023</p>
                    </div>
                    <div style="height: 20vh;"></div>
                </div>
                <div class="timeline_border">
                    <Vrlinesmall></Vrlinesmall>
                    {#each keys as d }
                        <img src="/round.svg" alt="">
                        <Vrline></Vrline>
                    {/each}
                    <img src="/round.svg" alt="">
                    <Vrlinesmall></Vrlinesmall>
                </div>
            </div>
            <div class="cards_main">
                <div style="height: 20vh;">

                </div>
                {#each keys as d}
                    <div class="mt-8 cards_sub">
                        {#each info[d]['desc'] as desc}
                            <div class="card">
                                <div>
                                    <img src={desc.img} alt="">
                                </div>
                                <p on:click={()=>{
                                    disp('nav',{home:false})
                                }}>{desc.meta}</p>
                            </div>
                        {/each}
                    </div>
                {/each}
            </div>
        </div>
    </main>
</div>


<style>
    .main_home{
        display: grid;
        grid-template-columns: 15vw 1fr 15vw;
        grid-template-rows: 1fr;
        height: 90vh;
        overflow: scroll;
    }
    .main_home::-webkit-scrollbar{
        display: none;
    }
    main{
        grid-column-start: 2;
    }
    .about{
        height: 25vh;
        display: grid;
        grid-template-columns: 20vw 1fr;
        /* background-color: aqua; */
    }
    .about img{
        height: 15vh;
    }
    .about_image{
        width: 18vw;
        display: grid;
        place-items: end;
        margin-bottom: 20px;
    }
    .about_image_sub{
        display: grid;
        place-items: center;
    }
    .about_text{
        margin-top: 30px;
        height: 100%;
        /* display: grid;
        place-items: center; */
        /* margin-left: 20px; */
    }
    .timeline_border{
        height: 120vh;
        width: 30px;
        /* border-right: 2px dotted blue;
        border-right-width: 3px; */
        overflow: visible;
        display: grid;
        place-items: center;
    }
    .timeline{
        width: 15vw;
        display: flex;
    }
    .timeline_details{
        width: 15vw;
    }
    .timeline_border img{
        width: 30px;
        max-width: none;
    }
    .timeline_date{
        display: flex;
        justify-content: end;
        height: 30px;
        margin-right: 10px;
    }
    .timeline_desc{
        height: 40vh;
        display: flex;
        justify-content: end;
    }
    .timeline_desc img{
        height: 40px;
        margin-left: 15px;
        
    }
    .timeline_desc_inner{
        height: 100%;
        display: grid;
        place-items: center;
    }
    .content{
        display: flex;
    }
    .cards_main{
        margin-left: 5vw;
        width: 48vw;
        height: 176vh;
    }
    .cards_sub{
        height: 40vh;
        display: flex;
        align-items: center;
        
    }
    .card{
        border: 1px solid grey;
        border-radius: 10px;
        margin-left: 50px;
        height: 30vh;
        width: 25vw;
    }
    .card:hover{
        scale: 1.2;
        transition: all .2s ease-in-out;
    }
    .card img{
        width: 25vw;
        height: 170px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .card p{
        margin: 15px;
        display: grid;
        place-items: center;
        cursor: pointer;
    }
</style>


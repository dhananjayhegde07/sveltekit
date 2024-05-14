<script>
    import { Button } from "$lib/components/ui/button";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import NavBar from '$lib/nav.svelte';
    import Hrline from '$lib/hrline.svelte'
    import Home from '$lib/home.svelte'
	import Learn from "$lib/learn.svelte";
    export let data;
   let home=true
   let cmt=false
   let newCmt=''
   let name=''
   // @ts-ignore
   /**
	 * @type {any[]}
	 */
   let alcmt=[]

    const getcomments=async()=>{
        let res=await fetch('/api/getdata')
        let d=await res.json()
        alcmt=d.data
    }

    const adnewcmt=async()=>{
        if(name==''||newCmt=='')return
        let res=await fetch('/api/setdata',{method:'post',headers:{"Content-Type":'application/json'},
        body:JSON.stringify({name:name,msg:newCmt})})
        let res2=await res.json()
        if(res2.status=='done'){
            name=''
            newCmt=''
            getcomments()
        }
    }

  </script>



  <NavBar on:nav={(obj)=>{
    home=obj.detail.home
    cmt=obj.detail.cmt
    getcomments()
  }}/>
  <Hrline></Hrline>
  {#if home}
    <Home info={data} on:nav={(obj)=>{
        home=obj.detail.home
      }}></Home>
  {/if}
  {#if !home}
    <Learn info={data}></Learn>
  {/if}


  {#if cmt}
    <div class="commeent">
        <div class='cmt_main'>
            <h3 on:click={()=>{
                cmt=false
            }} class="bg-red-800 w-10 h-10">X</h3>
            <div class="adcmt">
                <h4 >Add a comment</h4>
                <input type="text" placeholder="name" bind:value={name}>
                <input type="text" bind:value={newCmt} placeholder="Type here">
                <div>
                    <Button on:click={()=>{
                        adnewcmt()
                    }}>ADD</Button>
                    <Button class='bg-red-900' on:click={()=>{newCmt=''}}>Cancel</Button>
                </div>
            </div>
            <div class="alcmt">
                <h4>All Comments</h4>
                <Hrline></Hrline>
                {#each alcmt as cmt}
                    <div>
                        <h5>{cmt.name}</h5>
                        <p>{cmt.msg}</p>
                    </div>
                {/each}
            </div>
        </div>
    </div>
  {/if}


  <style>
    .commeent{
        position: absolute;
        top: 0px;
        left: 0px;
        height: 100vh;
        width: 100vw;
        display: grid;
        place-items: center;
        background-color: rgba(240, 248, 255, 0.444);
        backdrop-filter: blur(5px);
    }
    .cmt_main{
      width: 50vw;
      background-color: rgb(152, 173, 193); 
      border-radius: 10px;
    }
    .cmt_main h3{
        display: grid;
        place-items: center;
        color: white;
        user-select: none;
        margin-bottom: 20px;
        border-top-left-radius: 10px;
    }
    .adcmt{
        height: 30vh;
        width: 50%;
        border: 1px solid black;
        border-radius: 5px;
        background-color: rgba(240, 248, 255, 0.403);
        margin: 20px;
    }
    .adcmt h4{
        height: 40px;
        text-align: center;
    }
    .adcmt input{
        height: 40px;
        margin-top: 10px;
        margin-left: 25px;
        border-radius: 5px;
        width: 80%;
    }
    .adcmt div{
        margin-left: 25px;
        margin-top: 10px;
    }
    .alcmt{
        height: 50vh;
        width: 90%;
        border: 1px solid black;
        border-radius: 5px;
        background-color: rgba(240, 248, 255, 0.403);
        margin: 20px;
        overflow: scroll;
    }
    .alcmt::-webkit-scrollbar{
        display: none;
    }
    .alcmt h4{
        height: 50px;
        display: grid;
        place-items: center;
    }
    .alcmt div{
        border: 1px solid black;
        border-radius: 5px;
        background-color: rgba(240, 248, 255, 0.403);
        margin: 10px;
    }
    .alcmt div h5{
        color: green;
        width: 200px;
        text-decoration: underline;

    }
    .alcmt div p{
        margin-left: 20px;

    }
  </style>

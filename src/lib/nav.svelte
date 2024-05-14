<script>
    import {createEventDispatcher} from 'svelte'
    import * as DropdownMenu from '$lib/components/ui/dropdown-menu'
    let adclass=""
    const dropdownmenu=()=>{
        console.log('click')
        if(adclass=='') adclass="accessed"
        else adclass=''
    }
    const disp=createEventDispatcher()
</script>


<div class="navbar">
    <div class="heading">
        <p>Company</p>
    </div>
    <div class="navigators">
        <div class="subnavs">
            <div on:click={()=>{
                disp('nav',{home:true})
            }}>
                <img src="/home.svg" alt="x" class="h-8 ml-3">
                <p>Home</p>
            </div>
            <div on:click={()=>{
                disp('nav',{home:false})
            }}>
                <img src="/learn.svg" alt="x" class="h-8 ml-3">
                <p>Learn</p>
            </div>
            <div class="bordering" on:click={()=>{
                disp('nav',{home:true,cmt:true})
            }}>
                <img src="/comment.svg" alt="x" class="h-8 ml-3">
                <p>Comment</p>
            </div>
        </div>
        <div class="profile_main ml-3 justify-end ">
            <div class="overflow-hidden profile mr-3">
                <img src="/person.svg" alt="" class="h-28">
            </div>
            <p class="mr-2">Dhananjay Hegde</p>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger on:click={()=>{dropdownmenu()}}> <img src="/up.svg" alt="^" class="h-5 mr-2 drop" id={adclass} /> </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Group>
                    <DropdownMenu.Label>My Account</DropdownMenu.Label>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item>My website</DropdownMenu.Item>
                    <DropdownMenu.Item>Instagram</DropdownMenu.Item>
                    <DropdownMenu.Item>Linkdin</DropdownMenu.Item>
                    <DropdownMenu.Item>Email</DropdownMenu.Item>
                  </DropdownMenu.Group>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
        </div>
    </div>
</div>


<style>
    .navbar{
        display: flex;
        align-items: center;
        height: 10vh;
        overflow: hidden;
        padding-left: 10px;
        background-color: rgba(250, 235, 215, 0.227);
    }
    .heading{
        width: 40%;
    }
    .navigators{
        display: flex;
        width: 60%;
    }
    .subnavs{
        display: flex;
        align-items: center;
        width: 70%;
    }
    .subnavs div{
        display: flex;
        align-items: center;
        width: 25%;
    }
    /* .navigators div:nth-last-child(1){
        width: 40%;
        height: 100%;
        margin-left: 10px;
    } */
    /* .navigators div img{
        height: 30px;
        margin-right: 10px;
    } */
    .bordering{
        border: 1px solid rgba(0, 0, 0, 0.627);
        height: 40px;
        align-items: center;
        border-radius: 5px;
        background-color: rgba(240, 248, 255, 0.601);
    }
    .navigators p:hover{
        transform: scale(1.1);
        transition: all .2s ease-in-out;
        cursor: pointer;
    }
    .profile_main{
        display: flex;
        align-items: center;
    }
    .profile_main img{
        height: 50px;
    }
    /* .profile_main img:nth-child(0){
        height: 100px;
    } */
    .profile_main .drop{
        height: 25px;
    }
    #accessed{
        transform: rotate(180deg);
    }
</style>
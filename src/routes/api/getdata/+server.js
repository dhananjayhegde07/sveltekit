import { json } from "@sveltejs/kit"
export const GET= async()=>{
    let res=await fetch('http://localhost:3400/getcmt')
    let obj=await res.json()
    return json({data:obj.cmt})
}
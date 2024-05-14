import { json } from "@sveltejs/kit"

export const POST=async(req)=>{
    let requests=req.request
    let obj=await requests.json()
    let res=await fetch('http://localhost:3400/addcmt',{method:'post',headers:{"Content-Type":'application/json'},
        body:JSON.stringify(obj)})
    res=await res.json()
    return json(res)
}
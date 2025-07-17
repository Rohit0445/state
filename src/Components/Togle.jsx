import { useState } from "react"

function Togle(){
      
    let [a,setA] = useState(false)
     
    return(
        <>
        {a ? "" : <h1 className="text-4xl ">Hide Me </h1>}

        <br /><br />


        <button className="border p-3 rounded-2xl" onClick={()=>setA(!a)}>Togle</button> <br /><br />
        <button className="border p-3 rounded-2xl" onClick={()=>setA(!a)}>{a ? "Show":"Hide"}</button>
       
        </>
    )
}

export default Togle
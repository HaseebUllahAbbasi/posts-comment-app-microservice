import { useState } from "react";
import axios from 'axios'
const PostCreate = ()=>
{
    
    const [title,setTitle] =  useState("")
    return(
       <form className="mb-3" onSubmit={async (e)=>
       {
           console.log("submit")
           e.preventDefault();
           await axios.post('http://localhost:4000/posts',{
               title
           })

       }}>
           <div className="form-group">
               <label>
                   Title
               </label>
               <input value={title} onChange={(e)=>{
                   setTitle(e.target.value);
               }} className="form-control" />
           </div>
           <button type="submit" className="btn btn-info mt-3">Add Post</button>
       </form> 

    )
}
export default PostCreate;
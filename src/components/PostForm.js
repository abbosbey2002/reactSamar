
import React, {useState} from "react"
import Mybutton from "./UI/but/button/Mybutton"
import Myinput from "./UI/but/Myinput/Myinput"

function PostForm({createPost}){
         const [post, setPost]=useState({title:'', stack:''})

         const addPost=(e)=>{
                  e.preventDefault() 
                  const newPost={
                           ...post, 
                           id: Date.now()
                  }
                  createPost(newPost)
                  setPost({title:'', stack:''})
                }

         return(
                  <>
                  <form>
      <h4 className="text-center">Create language</h4>
      <Myinput type='text' className="form-control" placeholder="programmimg language" 
       value={post.title}
       onChange={e=>setPost({...postMessage, title:e.target.value})}/>
      <Myinput type='text' className="form-control my-3" placeholder="Enter your stack" 
      value={post.stack}
      onChange={e=>setPost({...post, stack:e.target.value})}
      />
    <Mybutton onClick={addPost}
    >Add post </Mybutton> 
     </form>
    </>
    )
}


 export default PostForm;
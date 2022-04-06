
import React, {useState, useRef} from "react";
import "./style/style.css"
import TableList from "./components/TableList";
import PostForm from "./components/PostForm";



function App() {

  const [posts, setPosts]=useState([
    {id:1, title:'Python', stack:'Full stack'},
    {id:2, title:'javascript', stack:'mern stack'},
    {id:3, title:'Beckend', stack:'middle'},
    {id:4, title:'cyber', stack:'senior'},
    {id:5, title:'frontend', stack:'junior'}
  ])

  const createPost=(newPost)=>{
    setPosts([...posts, newPost])
  }

  const removePost=(post)=>{
    setPosts(posts.filter(s=>s.id!=post.id))
  }

  return (
    <>
    <div className="app w-50 mx-auto">
    <PostForm createPost={createPost} />
    <div className="text-right my-2 w-50">
      <select className="form-select">
        <option  >Sorted by title</option>
        <option  >Sorted by Job</option>
      </select>
    </div>

    {posts.length
      ? <TableList remove={removePost} posts={posts} title={'Favourite language'} />
    : <h6 className="my-3 text-center">You should add some Post</h6>
    }

    </div>
  </>
  
  );
}

export default App;

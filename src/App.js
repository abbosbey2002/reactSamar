
import React, {useState, useRef} from "react";
import "./style/style.css"
import TableList from "./components/TableList";
import Mybutton from "./components/UI/but/button/Mybutton";
import Myinput from "./components/UI/but/Myinput/Myinput";


function App() {

  const [posts, setPosts]=useState([
    {id:1, title:'Python', stack:'Full stack'},
    {id:2, title:'javascript', stack:'mern stack'},
    {id:3, title:'Beckend', stack:'middle'},
    {id:4, title:'cyber', stack:'senior'},
    {id:5, title:'frontend', stack:'junior'}
  ]
)
const [posts2, setPosts2]=useState([
  {id:1, title:'Html', stack:'Templote'},
  {id:2, title:'Css', stack:'Dizayn'},
  {id:3, title:'SCSS', stack:'starong design'},
  {id:4, title:'JAvascript', stack:'Dinamika'},
  {id:5, title:'React', stack:'library'}
])
const [title, setTitle]= useState('');

const inputRef=useRef()

const addPost=(e)=>{
  e.preventDefault()
  console.log(title)
  console.log(inputRef.current.value)
}

  return (
    <>
    <div className="app w-50 mx-auto">
    <form>
      <h4 className="text-center">Create language</h4>
      <Myinput type='text' className="form-control" placeholder="programmimg language" 
       value={title}
      onChange={e=>setTitle(e.target.value)}/>
      <input type={'text'} ref={inputRef}/>
      <Myinput type='text' className="form-control my-3" placeholder="Enter your stack" />
    <Mybutton onClick={addPost}
    >Add post </Mybutton>
     </form>
<TableList posts={posts} title={'Favourite language'} />
    </div>
    <div className="app w-50 mx-auto">
<TableList posts={posts2} title={'frontend texnology'}/>
    </div>
  </>
  
  );
}

export default App;

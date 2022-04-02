import React from "react";
import Mybutton from "./UI/but/button/Mybutton";


const TableItem=(props)=>{
         return(
                  <>
                           
      <tr>
        <td>{props.number}</td>
        <td>{props.post.title}</td>
        <td>{props.post.stack}</td>
        <td>
          <Mybutton onClick={()=>props.remove(props.post)}
          > Delete </Mybutton>
        </td>
      </tr>
    
                  </>
         )
}

export default TableItem;
import React from "react";
import Mybutton from "./UI/but/button/Mybutton";


const TableItem=(props)=>{
         return(
                  <>
                           
      <tr>
        <td>{props.post.id}</td>
        <td>{props.post.title}</td>
        <td>{props.post.stack}</td>
        <td>
          <Mybutton> Delete </Mybutton>
        </td>
      </tr>
    
                  </>
         )
}

export default TableItem;
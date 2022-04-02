import React from "react";
import Tableheader from "./Tableheader";
import TableItem from "./TableItem";

const TableList=({posts, title, remove})=>{
         return (
                  <>
                  <p className="text-center">{title}</p>
  <table className="table table-striped">
   <Tableheader />
   <tbody>
     {posts.map((post, index)=>(

   <TableItem remove={remove} number={index+1} post={post} key={post.id} />
     ))}
   </tbody>
  </table>
                  </>
         )
}

export default TableList;
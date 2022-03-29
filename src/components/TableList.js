import React from "react";
import Tableheader from "./Tableheader";
import TableItem from "./TableItem";

const TableList=({posts, title})=>{
         return (
                  <>
                  <p className="text-center">{title}</p>
  <table className="table table-striped">
   <Tableheader />
   <tbody>
     {posts.map(post=>(

   <TableItem post={post} key={post.id} />
     ))}
   </tbody>
  </table>
                  </>
         )
}

export default TableList;
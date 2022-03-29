import React, {useState} from "react"

export default function Counter(){
         const  [count, setCount]=useState(0)

         function inc(){
                  setCount(count+1)
                }
                function dec(){
                  setCount(count-1)
                }

         return(
                  <>
                  <h3>count: {count}</h3>
                  <button onClick={inc} className="btn btn-success">Inc</button>
                  <button onClick={dec} className="btn btn-danger">dec</button>
                 
                  </>
         )
}

import {useState} from 'react'
export default function Inputvalue(){
         const [value, setValue]=useState('')
         return (
                  <>
                  <p>Value: {value} </p>
                  <input type="text" className="form-control" value={value}
                  onChange={event=>console.log(setValue(event.target.value))}
                  />
                  </>
         )
}
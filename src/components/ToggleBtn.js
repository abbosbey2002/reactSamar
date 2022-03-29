import { render } from '@testing-library/react'
import {useState} from 'react'

export default function ToggleBtn(){
         function toggles(){
                  SeTtoggleBtn(!toggleBtn) 
                }
         const [toggleBtn, SeTtoggleBtn]=useState(false)
         return (
                  <>
                  <button onClick={toggles} className="btn btn-secondary my-3">toggle</button>
                  {
                           toggleBtn?
                           <p className="lead">Hello, Abbosbey</p>
                           : null
                           
                  }
                  </>
         )
}
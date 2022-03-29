import React from "react";
import { useState } from "react";

export default class Like extends  React.Component{
         constructor(props){
                  super(props);
                  this.state={
                  count:0
                  }

                  this.increment=this.increment.bind(this)
                  this.decrement=this.decrement.bind(this)
         }
         increment() {
                  this.setState({count: this.state.count+1})
         }
         decrement(){
                  this.setState({count: this.state.count-1})
         }

         render(){
                  return(
                           <>
                           <h4>Hello: {this.state.count}</h4>
                           <button onClick={this.increment} className="btn btn-success">Inc</button>
                           <button onClick={this.decrement}  className='btn btn-danger'>dec</button>
                           </>
                  )
         }


}


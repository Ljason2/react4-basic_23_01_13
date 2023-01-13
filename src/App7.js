

import React from "react";



class App7 extends React.Component{
    constructor(props){
        super(props)
        this.state={num:100}
    }
    render(){
        return(
        <>
        <h1>계산기</h1>
        <p>{this.state.num}</p>
        <p>
        <button
        type="button"
        onClick={()=>{
            this.setState((state)=>({num:state.num-10}))
        }}>

        </button>
        </p>
        </>)
    }
}

export default App7;
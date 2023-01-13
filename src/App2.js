


import React from "react";


class App2 extends React.Component{
    render(){
        return(
            <>
            <h1>{this.props.title}</h1>
            <p>{this.props.year}</p>
            <p>{this.props.text}</p>
            </>
        )
    }
}


export default App2;



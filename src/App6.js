
import React from "react";
class App6 extends React.Component{
constructor(props){
    super(props);
    this.state={count :0}
}
render(){
    return(
        <div>
            <p>{this.state.count}</p>
            <p>
                <button type="button"
                onClick={
                    ()=>{
                        this.setState((state)=>({count:state.count + 3}))
                    }
                }>click</button>
            </p>
        </div>
    )
}
}



export default App6;



// onClick ={function(){}}
// onClick ={()=>{}}
// onClick ={ ()=> {this.setState((state)=>{return {속성:state.속성명 식}})}}
// onClick ={ ()=> {this.setState((state)=>{return ({속성:state.속성명 식})})}}
// onClick ={ ()=> {this.setState((state)=>({속성:state.속성명 식}))}}



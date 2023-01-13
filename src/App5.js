

// 클래스 방식의 컴포넌트 생성은 React를 import 해야함.
import React from "react";


class App5 extends React.Component{
    state ={count:0}
render(){
    return(
        <div>
            <p>{this.state.count}</p>
            <p><button 
type="button" onClick={()=>{
                this.setState({count:this.state.count +1})
            }}>click</button></p>
        </div>
    )
}

}

export default App5;




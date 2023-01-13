// function App1(){
//     return()
// }

import React from "react";



class App1 extends React.Component{
    render(){
        return(

        <dl>
            <dt>책의제목</dt>
            <dd>{this.props.title}</dd>
            <dt>가격</dt>
            <dd>{this.props.price}</dd>
        </dl>
        )
    }
}


export default App1;


// 생성자 함수 방식과 다르게 앞에 this.이 붙고 매개변수로 
// props가 오지 않는다.

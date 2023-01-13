
// 초반에 useState를 사용하기 위해서 import를 해줘야한다.
import {useState} from 'react';


// 리액트에서 state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미한다.
// 클래스형 컴포넌트에서 사용:state
// 함수형 컴포넌트에서 사용 :useState

function App4(){
    const [count, setCount] = useState(0)
    return(
        <div>
            <p>{count}</p>
            <p>
                <button onClick={click}>click</button>
            </p>
        </div>
    )

    function click(){
        setCount(count + 2)
    }
}



export default App4;

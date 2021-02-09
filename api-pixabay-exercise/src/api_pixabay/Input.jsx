
import {useState} from 'react'

const Input = () => {
    const[input,setInput]=useState('');

    const inputHandler = (e)=>  setInput(e.target.value);

    return (
        <div>
            <input type="text" onChange={inputHandler}/>
        </div>
    )
}

export default Input



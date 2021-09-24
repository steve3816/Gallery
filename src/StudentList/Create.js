import React, {useState} from 'react'

const Create = ({messages,setMessages}) => {

    let [name, setName] = useState();

    return (
        <div>
            <input type="text" value={name} onChange={e=> setName(e.target.value)} />
            <button onClick={()=> setMessages([...messages, name])}>輸入</button>
        </div>
    )
}


export default Create

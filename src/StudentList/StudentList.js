import React, {useState, useEffect} from 'react'
import Create from './Create'
import ListView from './ListView'


const StudentList = () => {

    let [name, setName] = useState('1');
    let [messages, setMessages] = useState([]);

    useEffect(() =>{
        console.log('改變囉', messages, name);
    },[messages,name]);


    return (
        <div>
            <Create messages={messages} setMessages={setMessages}></Create>
            <ListView messages={messages}  ></ListView>
            <button onClick={() => setName(name+'1')}>改name</button>
        </div>
    )
}

export default StudentList

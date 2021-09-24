import React, {useState} from 'react'

const alertName = (text)=>{
    alert(text);
}

const FriendCard = ({friend, number}) => {

    // this.state.friend = props.friend;

    let [name,updateName] = useState(friend.name);

    let [nameToChange, updateNameToChange] = useState();

    const changeName = ()=>{
        updateName(nameToChange);
    };

    return (
        <div>
            <h1>Name: {name}</h1>
            <div>age: {friend.age}</div>
            <p>description: {friend.desc}</p>
            <div>要改的名字
                <input value={nameToChange} onChange={e => updateNameToChange(e.target.value)}/>
            <button onClick={changeName}>改名字</button>
            </div>
        </div>
    )
    
}

export default FriendCard

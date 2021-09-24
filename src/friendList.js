import React from 'react'
import FriendCard from './friendCard';

const friendList = () => {
    var friends = [
        {name:'steve', age: 18, desc:'哈哈阿'},
        { name:'jack', age:20, desc:"i'm jack"},
        { name:'Rose', age:35, desc:'I am Rose'}
    ];
    return (
        <div>
            {/* {friends.map(friend => <FriendCard name={friend.name} age={friend.age} desc={friend.desc}/>)} */}
            {friends.map(friend => <FriendCard friend={friend} number={1+1}/>)}
            <button onClick={()=> {friends[0].name='123'}}>改名啦</button>
        </div>
    )
}

export default friendList


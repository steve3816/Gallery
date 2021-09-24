import React from 'react'

const ListView = ({messages}) => {
    return (
        <div>
            {messages.map(message => <p>{message}</p>)}
        </div>
    )
}

export default ListView

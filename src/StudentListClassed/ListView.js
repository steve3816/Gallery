import React, { Component } from 'react'

export default class ListView extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                {this.props.messages.map(mes => <p>{mes}</p>)}
            </div>
        )

    }
}

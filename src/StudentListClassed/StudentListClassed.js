import React, { Component } from 'react'
import Create from './Create'
import ListView from './ListView'

export default class StudentListClassed extends Component {

    constructor(props){
        super(props);
        this.state = {
            messages:['123','45']
        }
    }

    handleMessagesChange(messages){
        console.log(messages);
        this.setState({messages: messages})
    }


    render() {
        return (
            <div>
                <Create messages={this.state.messages} setMessages={this.handleMessagesChange.bind(this)}/>
                <ListView messages={this.state.messages} />
            </div>
        )
    }
}

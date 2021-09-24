import React, { Component } from 'react'

export default class Create extends Component {

    constructor(props){
        super(props);
        this.state = {
            name:''
        }
    }

    onSubmit(){
        this.props.setMessages([...this.props.messages, this.state.name])
        this.setState({name:''});
        // this.props.messages = [...this.props.messages, this.state.name];
    }
    
    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={e => this.setState({name:e.target.value})} /> 
                <button onClick={this.onSubmit.bind(this)}>Submit</button>
            </div>
        )
    }
}

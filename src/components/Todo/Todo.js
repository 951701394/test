import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
             user:""
        }
        
    }

    ch(e){
        
           this.setState({user:e.target.value})
    }

    add(){

          this.props.f1(this.state.user)
    }
    
    render() {
        return (
            <div>
                <input type="text"  value={ this.state.user }  onChange={ this.ch.bind(this) } />
                <input type="button" value="添加" onClick={ this.add.bind(this) } />
            </div>
        )
    }
}

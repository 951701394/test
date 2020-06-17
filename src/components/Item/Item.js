import React, { Component } from 'react'

export default class Item extends Component {
    constructor(props) {
        super(props)
        
    }

    add(){

        this.props.f("laizi item de 数据")
    }
    
    render() {
        return (
            <div>
                   item
                   <input type="button"  value="传值到福组件" onClick={ this.add.bind(this) } />
            </div>
        )
    }
}

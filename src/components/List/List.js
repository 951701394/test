import React, { Component } from 'react';
import Item from "../Item/Item"

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {

              title:"11111"
        }
        
    }

    fn1(msg){
       console.log(msg)
       this.setState({title:msg})
           
    }
    
    render() {
        return (
            <div>
                  {/* <h3>列表111111111</h3>
                  <p>{ this.state.title }</p>

                  <Item f={ this.fn1.bind(this) }></Item> */}
                  <ul>
                      {
                          this.props.a.map((item)=>{
                            
                            return <li> { item } </li>

                          })
                      }
                  </ul>
            </div>
        );
    }
}

export default List;

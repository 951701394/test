import React, { Component } from 'react';
import News from "../News/News"
import List from "../List/List"
import Todo from "../Todo/Todo"

class App extends Component {
    constructor(props){
           super(props)
           this.state = {
               arr:["aaaaaaa"]
           }
    }

    getData(msg){
       
         // alert(msg)
         var a = this.state.arr;

         a.push(msg)

         this.setState({arr:a})

    }


    
    render() {
        return (
            <div>
                {/* <News></News> */}
              <Todo f1 = { this.getData.bind(this) }></Todo>
              <List a = { this.state.arr } ></List>
            </div>
        );
    }
}

export default App;

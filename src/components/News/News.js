import React, { Component } from 'react';
import "./news.scss"
class News extends Component {

    constructor(props){
           super(props)
           this.state = {
               titles:[
                   "精选",
                   "社区",
                   "娱乐",
                   "生活"
               ],
               content:[
                   "aaaaaaaaaaa",
                   "bbbbbbbbbbbb",
                   "cccccccccccc",
                   "dddddddddddd"
               ],
               n:0,
               s:["fl","active"],
               currentIndex:1
           }

    }
    qx(i){
       
      this.setState({n:i})
 
    }
    render() {
        return (
            <div className="news">
                  <div className="tab">
                         <div className="tit">
                              <ul>
                                  {
                                      this.state.titles.map((item,index)=>{
                                           
                                        return <li className={this.state.n==index?"active":""} onClick={ this.qx.bind(this,index) } >
                                                  { item }
                                                </li>
                                      })

                                  }
                              </ul>
                         </div>
                         <div>
                             {
                                 this.state.content.map((item,index)=>{

                                       return <div style={{display:this.state.n==index?"block":"none"}}>
                                                { item }
                                       </div>
                                 })
                             }
                         </div>
                  </div>
                  <div className={ this.state.s.join(" ") }>1111111</div>
                  <div className={ this.state.isError && 'box-color' }>hello world</div>
                  <div className={`container tab ${1===this.state.currentIndex?"active":null}`}>此标签是否选中</div>
            </div>
        );
    }
}

export default News;

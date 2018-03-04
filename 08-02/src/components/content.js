import React,{Component} from 'react';
import  '../css/content.css';
// import ReactDom from 'react-dom';

export default class Content extends Component{
  constructor(){
    super();//调用基类的所有初始化方法
    this.state={
      userName:'bob',
      age:24
    };
  }
  render(){
    setTimeout(()=>{
      // 更改state
      this.setState({userName:'alla'});
    },4000);
    return(
      <div className="content">
        <h2>this is content</h2>
        <p>userName:{this.state.userName}<br/>age:{this.state.age}</p>
        <p>{this.props.userid}</p>
        <p>{this.props.userName}</p>
      </div>
    )
  }
}

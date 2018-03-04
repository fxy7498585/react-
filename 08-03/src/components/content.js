import React,{Component} from 'react';
import  '../css/content.css';
import ContentChild from './contentChild.js';
// import ReactDom from 'react-dom';

export default class Content extends Component{
  constructor(){
    super();//调用基类的所有初始化方法
    this.state={
      userName:'bob',
      age:24
    };
  };
  changeUserInfo(){
    this.setState({age:50});
    console.log(this);
  };
  handleChildVlaue(event){
    this.setState({age:event.target.value});
  };
  render(){
    // setTimeout(()=>{
    //   // 更改state
    //   this.setState({userName:'alla'});
    // },4000);
    return(
      <div className="content">
        <h2>this is content</h2>
        <p>content--userName:{this.state.userName}<br/>content--age:{this.state.age}</p>
        <p>{this.props.userid}</p>
        <p>{this.props.userName}</p>
        <input type="button" value="提交" onClick={this.changeUserInfo.bind(this)}/>
        <ContentChild handleChildVlaue={this.handleChildVlaue.bind(this)}/>
      </div>
    )
  }
}

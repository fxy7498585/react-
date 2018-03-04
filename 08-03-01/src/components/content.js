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
  };
  change(event){
    this.setState({userName:event.target.value})
  };
  render(){
    setTimeout(()=>{
      // 更改state
      this.setState({userName:'alla'});
    },4000);
    return(
      <div className="content">
        <h2>this is content</h2>
        <p>userName:{this.state.userName}<br/>age:{this.state.age}</p>
        <p>userid{this.props.userid}</p>
        <p>userName:{this.props.userName}</p>
        value:<input type="text" onChange={this.props.change}/>
        value:<input type="text" onChange={this.change.bind(this)}/>

      </div>
    )
  }
}

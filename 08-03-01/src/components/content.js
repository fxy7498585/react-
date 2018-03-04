import React,{Component} from 'react';
import  '../css/content.css';
// import ReactDom from 'react-dom';

export default class Content extends Component{
  constructor(){
    super();//调用基类的所有初始化方法
    var aaa;
    this.state={
      userName:'bob',
      age:24,
      bbb:''
    };
  };
  change(event){
    // this.setState({userName:event.target.value})
    this.state.bbb=event.target.value;
    console.log(this.state.bbb);
    // this.setState({age:age});

  };
  clickChange(age){
    this.setState({age:this.state.bbb});
  };
  render(){
    return(
      <div className="content">
        <h2>this is content</h2>
        <p>userName:{this.state.userName}<br/>age:{this.state.age}</p>
        <p>userid{this.props.userid}</p>
        <p>userName:{this.props.userName}</p>
        value:<input type="text" onChange={this.props.change}/>
        value:<input type="text" onChange={this.change.bind(this)}/>
        <button onClick={this.clickChange.bind(this)}>提交1</button>
      </div>
    )
  }
}

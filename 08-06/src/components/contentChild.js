import React,{Component} from 'react';
export default class ContentChild extends Component{
  render(){
    return(
      <div>
        <p>子页面输入：<input type="text" onChange={this.props.handleChildVlaue}/></p>
        <p>{this.props.userid}</p>
        <p>{this.props.id}</p>
      </div>
    )
  }
}

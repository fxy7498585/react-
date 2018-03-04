import React,{Component} from 'react';
// import ReactDom from 'react-dom';

export default class Content extends Component{
  render(){
    var userName='bob';
    return(
      <div className="content">
        <h2>this is content</h2>
        <p>{userName==''?'用户还没有登陆':userName}</p>
      </div>
    )
  }
}

import React,{Component} from 'react';
// import ReactDom from 'react-dom';

export default class Content extends Component{
  render(){
    var userName='bob';
    var boolInput=false;
    var html="html&nbsp;css";
    return(
      <div className="content">
        <h2>this is content</h2>
        <p>{userName==''?'用户还没有登陆':'用户名:'+userName}</p>
        <p><input type="button" value={userName} disabled={boolInput}/></p>
        <p>{html}</p>
        <p></p>
      </div>
    )
  }
}

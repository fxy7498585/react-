import React,{Component} from 'react';
import  '../css/content.css';
import ContentChild from './contentChild.js';
import propTypes from 'prop-types';
// import ReactDom from 'react-dom';
import ReactMixin from 'react-mixin';
import MixinLog from './mixins.js';

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
  clickChange(){
    // const mySubmit=document.getElementById('submitButton');
    // console.log(mySubmit);
    // ReactDom.findDOMNode(mySubmit).style.color="red";
    console.log(this.refs.submitButton);
    this.refs.submitButton.style.color="red";
    MixinLog.log();
  };
  render(){
    // setTimeout(()=>{
    //   // 更改state
    //   this.setState({userName:'alla'});
    // },4000);
    return(
      <div className="content" ref="submitButton2">
        <h2>this is content</h2>
        <ContentChild handleChildVlaue={this.handleChildVlaue.bind(this)} {...this.props} id={4}/>
        <input type="button" id="submitButton" ref="submitButton" value="button" onClick={this.clickChange.bind(this)}/>
      </div>
    )
  }
}
Content.propTypes={
  userid:propTypes.number.isRequired
};
Content.defaultprops={
  userName:'这是一个默认值'
};
ReactMixin.onClass(Content,MixinLog);

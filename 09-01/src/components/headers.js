import React,{Component} from 'react';
import '../css/header.css';
class Header extends Component{
  constructor(){
    super();
  };
  render(){
    const styleComponentHeader={
      header:{
        backgroundColor:"red",
        "color":"blue",
        "paddingTop":"15px",
        paddingBottom:"20px"
      }
    };
    return (
      <div style={styleComponentHeader.header} className="header">
        <p>this is header</p>
      </div>
    )
  }
};

export default Header;

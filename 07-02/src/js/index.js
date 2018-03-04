import React from 'reacr';
import ReactDom from 'react-dom';
import ComponentHeader from './Components/header.js';

class Index extends React.Component{
  render(){
    return(
      <ComponentHeader/>
    )
  }
}

ReactDom.render(<Index/>,document.getElementById('example'));

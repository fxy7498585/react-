import React,{Component}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



class Index extends Component{
  constructor(){
    super();
    this.state={
      username:'fxy87498585'
    }
  };
  onChange(event){
    this.setState({username:event.target.value})
    console.log(event.target.value);
  };
  render(){
    const styleComponent={
      app:{
        color:'red',
      }
    };
    return(
      <div>
        <span style={styleComponent.app}>username{this.state.username}</span>
        <App username="fxy7498585"  onChange={this.onChange.bind(this)}/>
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();

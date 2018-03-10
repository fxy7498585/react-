import React, { Component } from 'react';



class App extends Component {
  constructor(){
    super();
    this.state={
      miniHeader:false,
    }
  };
  switchHeader(){
    this.setState({
      miniHeader:!this.state.miniHeader,
    })
  };
  render() {
    const styleApp={
      app:{
        color:'green',
      },
      header:{
        "fontSize":(this.state.miniHeader)?"12px":"20px",
        "background":"blue"
      }
    }
    return (
      <div className="App" style={styleApp.app}>
        username:<input type="text" onChange={this.props.onChange}/>
        <p>{this.props.username}</p>
        <header style={styleApp.header}>this is miniheader</header>
        <button onClick={this.switchHeader.bind(this)}>改变header大小</button>
      </div>
    );
  }
}

export default App;

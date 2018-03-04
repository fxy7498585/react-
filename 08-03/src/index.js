import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/headers.js';
import Footer from './components/footer.js';
import Content from './components/content.js';
import registerServiceWorker from './registerServiceWorker';


class Index extends Component{
  constructor(){
    super();
    this.state={
      userid:7498585,
      userName:'fxy7498585'
    };
  };
  render(){
    // var componnet=<Header/>;
    return(
      <div>
        <Header/>
        <Content userid={this.state.userid} userName={this.state.userName}/>
        <Footer/>
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();

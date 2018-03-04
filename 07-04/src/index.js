import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/headers.js';
import Footer from './components/footer.js';
import Content from './components/content.js';
import registerServiceWorker from './registerServiceWorker';


class Index extends Component{
  render(){
    // var componnet=<Header/>;
    return(
      <div>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();

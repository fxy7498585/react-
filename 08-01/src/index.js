import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/headers.js';
import Footer from './components/footer.js';
import Content from './components/content.js';
import registerServiceWorker from './registerServiceWorker';


class Index extends Component{
  //页面将要加载的时候
  componentWillMount(){
    // 定义逻辑
    console.log('Index--componentWillMount');
  }
  componentDidMount(){
    console.log('Index---componentDidMount');
  }
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

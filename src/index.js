import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Navbar from './components/navbar';


class App extends Component{
  render(){
    return (
      <div className="app-container">
        <div className="app-nav">
          <Navbar />
        </div>
        <div className="app-content"></div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

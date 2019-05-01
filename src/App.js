import React from 'react';
import Header from './Components/Header.js';
import ResultsPane from './Components/ResultsPane.js';
import './App.scss';
 
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      "queryString": ''
    }
  }


  render() {
    return (
      <div className="App">
        <Header/>
        <ResultsPane/>
      </div>
    );
  }
}


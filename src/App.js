import React from 'react';
import Header from './Components/Header.js';
import ResultsPane from './Components/ResultsPane.js';
import {giphyApiKey, giphySearchURL} from '../giphyAPIKey.js';
import './App.scss';
 
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      "queryString": '',
      "itemCount": 0,
      "data":[]
    }
  }

  changeItemCount(number){
    this.setState({
      itemCount: number
    });
  }

  changeData(data){
    this.setState({
      data
    });
  }

  populatePane(data){

  }

 


  searchGiphy(key) {
    console.log(`Searching GIPHY with key: ${key}`);
    return fetch(`${giphySearchURL}?api_key=${key}&q=${this.state.queryString}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept':'application/json'
      }
    }).then(response =>{
      
          response.json().then(json =>{
            console.log(json);
            this.changeItemCount(json.data.length);
            this.changeData(json.data);

          })
      
      })
      .catch(err=>{
        console.error(err);
      })

  }



  render() {
    // const gifs = this.state.data.map((gif, index)=>{
    //   <div index={index}>
    //     <h5>{gif.title}</h5>
    //   </div>
    // });
    return (
      <div className="App">
        <Header 
          count={this.state.itemCount}
          onChangeFromHeader={(val)=>this.setState({queryString:val})}
          onSubmitFromHeader={()=>this.searchGiphy(giphyApiKey)}/>
        <ResultsPane gifs={this.state.data}/>
      </div>
    );
  }
}


import React, { Component } from 'react'
import {ITEMS} from './store/Items'
import Main from './components/MainComponent';

export class App extends Component {
      constructor(props) {
        super(props)
      
        this.state = {
           items : ITEMS 
        };
      }
      

  render() {
    return (
      <Main items={this.state.items}/>
    )
  }
}

export default App


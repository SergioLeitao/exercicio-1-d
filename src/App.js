import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddItem from './AddItem'
import ListItems from './ListItems'

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {

  state = {
    items: []
  }

  onAddItem = value => {
    console.log('onValue: ', value)
    this.setState(previus=>({items:[...previus.items,value]}))
    
  }

  existUserName = value => {
    if(this.state.items.length === 0){
      console.log('no if')
      return false
    }else{
      const item = this.state.items.find(f=>f.userName === value)
      return item?true:false
    }
  }


  render() {

    console.log(this.state)  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>List of number of games he/she has played</h2>
        <AddItem onAddItem={this.onAddItem} existUserName={this.existUserName}/>
        <ListItems items={this.state.items}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Counter from './Counter'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>React-Mobx-Standard-Boilerplate</h2>
        </div>
        <p className='App-intro'>
          Mobx with Decorators
        </p>
        <Counter />
      </div>
    )
  }
}

export default App

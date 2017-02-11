import React, { Component } from 'react'
import { observable, action, useStrict } from 'mobx'
import { observer } from 'mobx-react'

useStrict(true)

@observer
export default class Counter extends Component {
  @observable count = 0

  @action
  handleDecrement = () => {
    this.count -= 1
  }

  @action
  handleIncrement = () => {
    this.count += 1
  }

  render () {
    return (
      <div>
        <button onClick={this.handleIncrement}>Increment</button>
        <h3>{this.count}</h3>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    )
  }
}

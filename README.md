# react-mobx-standard-boilerplate

This is an opinionated React-Mobx boilerplate using [create-react-app](https://www.npmjs.com/package/create-react-app) with [custom-react-scripts](https://www.npmjs.com/package/custom-react-scripts), and [standardjs](http://standardjs.com/index.html) linting.

### Sample working code using decorators

```js
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
```

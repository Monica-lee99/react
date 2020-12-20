import React from 'react';
import Age from './Age';
import Name from './Name';
class Website extends React.Component {
  constructor () {
    super()
    this.state = {
      name: 'liguohao',
      age: 21
    }
  }
  render () {
    return (
      <div>
        <Name name={this.state.name}></Name>
        <Age age={this.state.age}></Age>
        <p>{this.state.age % 2 ? '奇数' : '偶数'}</p>
        <button onClick={() => this.addNum()}>加一</button>
        
      </div>
    )
  }
  addNum (e) {
    this.setState((preState, props) => {
      return {age: preState.age + 1}
    })
  }
}
export default Website